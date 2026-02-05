import { useState, useEffect, useCallback } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

type Status = 'pending' | 'done' | 'revision';

interface QuestionState {
  status: Status;
}

const LOCAL_STORAGE_KEY = 'dsa-tracker-states-v3';

export function useProgress(user: User | null) {
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>(() => {
    // Initialize from localStorage immediately
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {};
      }
    }
    return {};
  });
  const [loading] = useState(false); // Start as false since we load from localStorage synchronously
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<Date | null>(null);

  // Sync with Supabase when user is logged in
  useEffect(() => {
    if (!user || !isSupabaseConfigured()) return;

    const syncFromCloud = async () => {
      setSyncing(true);
      try {
        const { data, error } = await supabase
          .from('progress')
          .select('question_states, updated_at')
          .eq('user_id', user.id)
          .single();

        if (data && !error) {
          setQuestionStates(data.question_states || {});
          setLastSynced(new Date(data.updated_at));
        } else if (error?.code === 'PGRST116') {
          // No data exists yet, migrate localStorage to cloud
          const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (localData) {
            const parsed = JSON.parse(localData);
            await saveToCloud(parsed, user.id);
          }
        }
      } catch (e) {
        console.error('Error syncing from cloud:', e);
      }
      setSyncing(false);
    };

    syncFromCloud();
  }, [user]);

  // Save to cloud helper
  const saveToCloud = async (states: Record<number, QuestionState>, userId: string) => {
    setSyncing(true);
    const { error } = await supabase
      .from('progress')
      .upsert({
        user_id: userId,
        question_states: states,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id',
      });
    
    if (!error) {
      setLastSynced(new Date());
    }
    setSyncing(false);
    return !error;
  };

  // Save progress (debounced auto-save)
  useEffect(() => {
    if (loading) return;

    // Always save to localStorage as backup
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(questionStates));

    // Debounced cloud save
    if (user && isSupabaseConfigured()) {
      const timeout = setTimeout(() => {
        saveToCloud(questionStates, user.id);
      }, 1000); // 1 second debounce

      return () => clearTimeout(timeout);
    }
  }, [questionStates, user, loading]);

  // Update question status
  const updateStatus = useCallback((id: number, status: Status) => {
    setQuestionStates(prev => ({
      ...prev,
      [id]: { status }
    }));
  }, []);

  // Toggle status (pending -> done -> revision -> pending)
  const toggleStatus = useCallback((id: number) => {
    setQuestionStates(prev => {
      const current = prev[id]?.status || 'pending';
      const next: Status = current === 'pending' ? 'done' : current === 'done' ? 'revision' : 'pending';
      return { ...prev, [id]: { status: next } };
    });
  }, []);

  // Reset all progress
  const resetProgress = useCallback(async () => {
    setQuestionStates({});
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    
    if (user && isSupabaseConfigured()) {
      await supabase
        .from('progress')
        .delete()
        .eq('user_id', user.id);
    }
  }, [user]);

  // Force sync to cloud
  const syncNow = useCallback(async () => {
    if (user && isSupabaseConfigured()) {
      return await saveToCloud(questionStates, user.id);
    }
    return false;
  }, [user, questionStates]);

  // Import progress from JSON
  const importProgress = useCallback(async (data: Record<number, QuestionState>) => {
    setQuestionStates(data);
    if (user && isSupabaseConfigured()) {
      await saveToCloud(data, user.id);
    }
  }, [user]);

  return {
    questionStates,
    loading,
    syncing,
    lastSynced,
    updateStatus,
    toggleStatus,
    resetProgress,
    syncNow,
    importProgress,
    isCloudEnabled: !!user && isSupabaseConfigured(),
  };
}
