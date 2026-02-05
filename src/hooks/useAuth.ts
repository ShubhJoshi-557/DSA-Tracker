import { useState, useEffect, useCallback } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    error: null,
    message: null,
  });

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setState(prev => ({ ...prev, loading: false }));
      return;
    }

    // Get initial session (this also handles the redirect from email confirmation)
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Session error:', error);
      }
      setState({
        user: session?.user ?? null,
        session,
        loading: false,
        error: null,
        message: null,
      });
    });

    // Listen for auth changes (including email confirmation)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth event:', event);
        
        // Handle different auth events
        if (event === 'SIGNED_IN') {
          setState({
            user: session?.user ?? null,
            session,
            loading: false,
            error: null,
            message: 'Successfully signed in!',
          });
        } else if (event === 'SIGNED_OUT') {
          setState({
            user: null,
            session: null,
            loading: false,
            error: null,
            message: null,
          });
        } else if (event === 'USER_UPDATED') {
          setState(prev => ({
            ...prev,
            user: session?.user ?? null,
            session,
            loading: false,
          }));
        } else {
          setState(prev => ({
            ...prev,
            user: session?.user ?? null,
            session,
            loading: false,
          }));
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null, message: null }));
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setState(prev => ({ ...prev, loading: false, error: error.message }));
      return false;
    }
    // Don't set loading to false here - onAuthStateChange will handle it
    return true;
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null, message: null }));
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      }
    });

    if (error) {
      setState(prev => ({ ...prev, loading: false, error: error.message }));
      return { success: false, needsConfirmation: false };
    }

    // Check if email confirmation is required
    if (data.user && !data.session) {
      // User created but needs to confirm email
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        message: '✅ Check your email! Click the confirmation link to complete signup.',
        error: null,
      }));
      return { success: true, needsConfirmation: true };
    }

    // User signed up and logged in immediately (email confirmation disabled)
    setState(prev => ({ ...prev, loading: false }));
    return { success: true, needsConfirmation: false };
  }, []);

  const signOut = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    await supabase.auth.signOut();
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const clearMessage = useCallback(() => {
    setState(prev => ({ ...prev, message: null }));
  }, []);

  return {
    ...state,
    signIn,
    signUp,
    signOut,
    clearError,
    clearMessage,
    isConfigured: isSupabaseConfigured(),
  };
}
