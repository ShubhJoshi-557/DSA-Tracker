import { useState, useMemo, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { rawQuestions, topicsMeta } from './data/allQuestions';
import { dpQuestions, graphQuestions, advancedQuestions, combinatoricsQuestions } from './data/allQuestions2';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import { Auth } from './components/Auth';
import { isSupabaseConfigured } from './lib/supabase';

type Difficulty = 'easy' | 'medium' | 'hard';
type Status = 'pending' | 'done' | 'revision';

interface Question {
  id: number;
  name: string;
  difficulty: Difficulty;
  topic: string;
  subtopic: string;
  url?: string;
}

// Styles
const styles: Record<string, CSSProperties> = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#0f0f13',
    color: '#e5e5e5',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  header: {
    background: 'linear-gradient(180deg, #1a1a22 0%, #0f0f13 100%)',
    borderBottom: '1px solid #2a2a35',
    padding: '20px 0',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    fontSize: '32px',
  },
  logoTitle: {
    fontSize: '24px',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
  logoSubtitle: {
    fontSize: '12px',
    color: '#6b7280',
    margin: 0,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  headerStats: {
    textAlign: 'right' as const,
    borderLeft: '1px solid #2a2a35',
    paddingLeft: '16px',
  },
  bigNumber: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#fff',
  },
  bigNumberTotal: {
    color: '#6b7280',
    fontSize: '20px',
  },
  userBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '8px',
    fontSize: '13px',
    color: '#34d399',
  },
  syncBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 10px',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '6px',
    fontSize: '11px',
    color: '#a78bfa',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    padding: '24px 0',
  },
  statCard: {
    background: '#1a1a22',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid #2a2a35',
  },
  statLabel: {
    fontSize: '13px',
    color: '#9ca3af',
    marginBottom: '4px',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 700,
  },
  progressBar: {
    height: '6px',
    backgroundColor: '#2a2a35',
    borderRadius: '3px',
    marginTop: '8px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.3s ease',
  },
  filterBar: {
    background: '#16161c',
    borderBottom: '1px solid #2a2a35',
    padding: '16px 0',
  },
  filterRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
    alignItems: 'center',
  },
  searchInput: {
    flex: '1 1 300px',
    padding: '10px 16px',
    backgroundColor: '#1a1a22',
    border: '1px solid #2a2a35',
    borderRadius: '8px',
    color: '#e5e5e5',
    fontSize: '14px',
    outline: 'none',
  },
  select: {
    padding: '10px 16px',
    backgroundColor: '#1a1a22',
    border: '1px solid #2a2a35',
    borderRadius: '8px',
    color: '#e5e5e5',
    fontSize: '14px',
    cursor: 'pointer',
    outline: 'none',
  },
  btn: {
    padding: '10px 16px',
    backgroundColor: '#1a1a22',
    border: '1px solid #2a2a35',
    borderRadius: '8px',
    color: '#e5e5e5',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  btnDanger: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    color: '#f87171',
  },
  btnSuccess: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    color: '#34d399',
  },
  main: {
    padding: '24px 0',
  },
  topicSection: {
    marginBottom: '16px',
    backgroundColor: '#16161c',
    borderRadius: '12px',
    border: '1px solid #2a2a35',
    overflow: 'hidden',
  },
  topicHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    cursor: 'pointer',
    backgroundColor: '#1a1a22',
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s',
  },
  topicHeaderOpen: {
    borderBottom: '1px solid #2a2a35',
  },
  topicTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '16px',
    fontWeight: 600,
  },
  topicIcon: {
    fontSize: '24px',
  },
  topicProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  topicProgressBar: {
    width: '150px',
    height: '8px',
    backgroundColor: '#2a2a35',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  topicCount: {
    fontSize: '14px',
    color: '#9ca3af',
    minWidth: '60px',
    textAlign: 'right' as const,
  },
  expandIcon: {
    fontSize: '20px',
    color: '#6b7280',
    transition: 'transform 0.2s',
  },
  questionTable: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  tableHeader: {
    backgroundColor: '#12121a',
  },
  th: {
    padding: '12px 16px',
    textAlign: 'left' as const,
    fontSize: '12px',
    fontWeight: 600,
    color: '#6b7280',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    borderBottom: '1px solid #2a2a35',
  },
  tr: {
    borderBottom: '1px solid #1f1f28',
    transition: 'background-color 0.2s',
  },
  trDone: {
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
  },
  trRevision: {
    backgroundColor: 'rgba(245, 158, 11, 0.05)',
  },
  td: {
    padding: '12px 16px',
    fontSize: '14px',
    verticalAlign: 'middle' as const,
  },
  statusBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    border: '2px solid',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  statusPending: {
    borderColor: '#4b5563',
    color: '#6b7280',
  },
  statusDone: {
    borderColor: '#10b981',
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    color: '#10b981',
  },
  statusRevision: {
    borderColor: '#f59e0b',
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    color: '#f59e0b',
  },
  questionName: {
    fontWeight: 500,
    color: '#e5e5e5',
  },
  questionLink: {
    color: '#60a5fa',
    textDecoration: 'none',
  },
  difficultyBadge: {
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'capitalize' as const,
  },
  difficultyEasy: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    color: '#34d399',
  },
  difficultyMedium: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    color: '#fbbf24',
  },
  difficultyHard: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    color: '#f87171',
  },
  quickActions: {
    display: 'flex',
    gap: '4px',
  },
  quickBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
    transition: 'opacity 0.2s',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '32px 20px',
    borderTop: '1px solid #2a2a35',
    color: '#6b7280',
    fontSize: '14px',
  },
  emptyState: {
    textAlign: 'center' as const,
    padding: '60px 20px',
    color: '#6b7280',
  },
  loadingOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: '#0f0f13',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  spinner: {
    width: '48px',
    height: '48px',
    border: '4px solid #2a2a35',
    borderTopColor: '#a78bfa',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

// Combine all raw questions
const allRawQuestions = [
  ...rawQuestions,
  ...dpQuestions,
  ...graphQuestions,
  ...advancedQuestions,
  ...combinatoricsQuestions
];

// Convert raw data to Question objects
const difficultyMap: Difficulty[] = ['easy', 'medium', 'hard'];
const questions: Question[] = allRawQuestions.map((q, index) => ({
  id: index + 1,
  name: q[0],
  difficulty: difficultyMap[q[1]],
  topic: topicsMeta[q[2]]?.name || 'Misc',
  subtopic: q[3],
  url: q[4],
}));

function App() {
  const auth = useAuth();
  const progress = useProgress(auth.user);
  const [showAuth, setShowAuth] = useState(false);
  
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    return new Set(topicsMeta.slice(0, 3).map(t => t.name));
  });
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      if (selectedTopic !== 'all' && q.topic !== selectedTopic) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      if (selectedStatus !== 'all') {
        const state = progress.questionStates[q.id]?.status || 'pending';
        if (selectedStatus !== state) return false;
      }
      if (searchQuery && !q.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [selectedTopic, selectedDifficulty, selectedStatus, searchQuery, progress.questionStates]);

  // Group by topic
  const groupedQuestions = useMemo(() => {
    const groups: Record<string, Question[]> = {};
    topicsMeta.forEach(t => {
      const topicQs = filteredQuestions.filter(q => q.topic === t.name);
      if (topicQs.length > 0) {
        groups[t.name] = topicQs;
      }
    });
    return groups;
  }, [filteredQuestions]);

  // Stats
  const stats = useMemo(() => {
    const total = questions.length;
    const done = Object.values(progress.questionStates).filter(s => s.status === 'done').length;
    const revision = Object.values(progress.questionStates).filter(s => s.status === 'revision').length;
    
    const easy = questions.filter(q => q.difficulty === 'easy').length;
    const medium = questions.filter(q => q.difficulty === 'medium').length;
    const hard = questions.filter(q => q.difficulty === 'hard').length;
    
    const easyDone = questions.filter(q => q.difficulty === 'easy' && progress.questionStates[q.id]?.status === 'done').length;
    const mediumDone = questions.filter(q => q.difficulty === 'medium' && progress.questionStates[q.id]?.status === 'done').length;
    const hardDone = questions.filter(q => q.difficulty === 'hard' && progress.questionStates[q.id]?.status === 'done').length;
    
    return { total, done, revision, easy, medium, hard, easyDone, mediumDone, hardDone };
  }, [progress.questionStates]);

  const toggleTopic = useCallback((topic: string) => {
    setExpandedTopics(prev => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  }, []);

  const expandAll = () => {
    setExpandedTopics(new Set(topicsMeta.map(t => t.name)));
  };

  const collapseAll = () => {
    setExpandedTopics(new Set());
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      progress.resetProgress();
    }
  };

  const exportProgress = () => {
    const data = JSON.stringify({ 
      questionStates: progress.questionStates, 
      exportDate: new Date().toISOString(),
      totalQuestions: questions.length,
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dsa-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const importProgress = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string);
            if (data.questionStates) {
              progress.importProgress(data.questionStates);
              alert('Progress imported successfully!');
            }
          } catch {
            alert('Invalid file format');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const getStatusStyle = (status: Status) => {
    switch (status) {
      case 'done': return styles.statusDone;
      case 'revision': return styles.statusRevision;
      default: return styles.statusPending;
    }
  };

  const getDifficultyStyle = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy': return styles.difficultyEasy;
      case 'medium': return styles.difficultyMedium;
      case 'hard': return styles.difficultyHard;
    }
  };

  // Show loading state only when auth is loading
  if (auth.loading) {
    return (
      <div style={styles.loadingOverlay}>
        <div style={styles.spinner}></div>
        <p style={{ marginTop: '16px', color: '#9ca3af' }}>Loading...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Show auth if user clicks sign in or if Supabase is configured but user not logged in
  if (showAuth && isSupabaseConfigured() && !auth.user) {
    return (
      <Auth
        onSignIn={auth.signIn}
        onSignUp={auth.signUp}
        loading={auth.loading}
        error={auth.error}
        message={auth.message}
        onClearError={auth.clearError}
        onClearMessage={auth.clearMessage}
      />
    );
  }

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>🚀</span>
              <div>
                <h1 style={styles.logoTitle}>DSA Sheet Tracker</h1>
                <p style={styles.logoSubtitle}>Master {questions.length} Questions → FAANG</p>
              </div>
            </div>
            <div style={styles.headerRight}>
              {/* Auth / User Info */}
              {isSupabaseConfigured() ? (
                auth.user ? (
                  <>
                    <div style={styles.userBadge}>
                      <span>☁️</span>
                      <span>{auth.user.email?.split('@')[0]}</span>
                    </div>
                    {progress.syncing ? (
                      <div style={styles.syncBadge}>
                        <span>🔄</span>
                        <span>Syncing...</span>
                      </div>
                    ) : progress.lastSynced && (
                      <div style={styles.syncBadge}>
                        <span>✓</span>
                        <span>Synced</span>
                      </div>
                    )}
                    <button 
                      style={styles.btn} 
                      onClick={() => auth.signOut()}
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button 
                    style={{...styles.btn, ...styles.btnSuccess}} 
                    onClick={() => setShowAuth(true)}
                  >
                    ☁️ Sign In to Sync
                  </button>
                )
              ) : (
                <div style={{...styles.syncBadge, borderColor: 'rgba(245, 158, 11, 0.3)', color: '#fbbf24'}}>
                  <span>💾</span>
                  <span>Local Only</span>
                </div>
              )}
              
              <button style={styles.btn} onClick={importProgress}>📤 Import</button>
              <button style={styles.btn} onClick={exportProgress}>📥 Export</button>
              <button style={{...styles.btn, ...styles.btnDanger}} onClick={handleReset}>🗑️ Reset</button>
              <div style={styles.headerStats}>
                <div style={styles.bigNumber}>
                  {stats.done}<span style={styles.bigNumberTotal}>/{stats.total}</span>
                </div>
                <div style={{fontSize: '12px', color: '#6b7280'}}>
                  {Math.round(stats.done/stats.total*100)}% Complete
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div style={{backgroundColor: '#12121a', borderBottom: '1px solid #2a2a35'}}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={{...styles.statCard, borderColor: 'rgba(139, 92, 246, 0.3)'}}>
              <div style={styles.statLabel}>📊 Total Progress</div>
              <div style={{...styles.statValue, color: '#a78bfa'}}>{stats.done} / {stats.total}</div>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${stats.done/stats.total*100}%`, backgroundColor: '#a78bfa'}}></div>
              </div>
            </div>
            <div style={{...styles.statCard, borderColor: 'rgba(16, 185, 129, 0.3)'}}>
              <div style={styles.statLabel}>🟢 Easy</div>
              <div style={{...styles.statValue, color: '#34d399'}}>{stats.easyDone} / {stats.easy}</div>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${stats.easyDone/stats.easy*100}%`, backgroundColor: '#10b981'}}></div>
              </div>
            </div>
            <div style={{...styles.statCard, borderColor: 'rgba(245, 158, 11, 0.3)'}}>
              <div style={styles.statLabel}>🟡 Medium</div>
              <div style={{...styles.statValue, color: '#fbbf24'}}>{stats.mediumDone} / {stats.medium}</div>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${stats.mediumDone/stats.medium*100}%`, backgroundColor: '#f59e0b'}}></div>
              </div>
            </div>
            <div style={{...styles.statCard, borderColor: 'rgba(239, 68, 68, 0.3)'}}>
              <div style={styles.statLabel}>🔴 Hard</div>
              <div style={{...styles.statValue, color: '#f87171'}}>{stats.hardDone} / {stats.hard}</div>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${stats.hardDone/stats.hard*100}%`, backgroundColor: '#ef4444'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={styles.filterBar}>
        <div style={styles.container}>
          <div style={styles.filterRow}>
            <input
              type="text"
              placeholder="🔍 Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <select 
              value={selectedTopic} 
              onChange={(e) => setSelectedTopic(e.target.value)}
              style={styles.select}
            >
              <option value="all">📚 All Topics</option>
              {topicsMeta.map(t => (
                <option key={t.name} value={t.name}>{t.icon} {t.name}</option>
              ))}
            </select>
            <select 
              value={selectedDifficulty} 
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={styles.select}
            >
              <option value="all">🎯 All Difficulties</option>
              <option value="easy">🟢 Easy</option>
              <option value="medium">🟡 Medium</option>
              <option value="hard">🔴 Hard</option>
            </select>
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={styles.select}
            >
              <option value="all">📋 All Status</option>
              <option value="pending">○ Pending</option>
              <option value="done">✓ Done</option>
              <option value="revision">🔄 Revision</option>
            </select>
            <button style={styles.btn} onClick={expandAll}>⬇️ Expand All</button>
            <button style={styles.btn} onClick={collapseAll}>⬆️ Collapse All</button>
            <span style={{marginLeft: 'auto', color: '#6b7280', fontSize: '14px'}}>
              Showing <strong style={{color: '#a78bfa'}}>{filteredQuestions.length}</strong> questions
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          {Object.entries(groupedQuestions).map(([topic, topicQuestions]) => {
            const meta = topicsMeta.find(t => t.name === topic);
            const topicDone = topicQuestions.filter(q => progress.questionStates[q.id]?.status === 'done').length;
            const isExpanded = expandedTopics.has(topic);
            
            return (
              <div key={topic} style={styles.topicSection}>
                {/* Topic Header */}
                <div 
                  style={{
                    ...styles.topicHeader,
                    ...(isExpanded ? styles.topicHeaderOpen : {})
                  }}
                  onClick={() => toggleTopic(topic)}
                >
                  <div style={styles.topicTitle}>
                    <span style={styles.topicIcon}>{meta?.icon}</span>
                    <span>{topic}</span>
                  </div>
                  <div style={styles.topicProgress}>
                    <div style={styles.topicProgressBar}>
                      <div 
                        style={{
                          ...styles.progressFill, 
                          width: `${topicDone/topicQuestions.length*100}%`,
                          backgroundColor: meta?.color || '#6b7280'
                        }}
                      ></div>
                    </div>
                    <span style={styles.topicCount}>{topicDone} / {topicQuestions.length}</span>
                    <span style={{
                      ...styles.expandIcon,
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>▼</span>
                  </div>
                </div>

                {/* Questions Table */}
                {isExpanded && (
                  <table style={styles.questionTable}>
                    <thead style={styles.tableHeader}>
                      <tr>
                        <th style={{...styles.th, width: '60px'}}>Status</th>
                        <th style={{...styles.th, width: '50px'}}>#</th>
                        <th style={styles.th}>Question</th>
                        <th style={{...styles.th, width: '120px'}}>Subtopic</th>
                        <th style={{...styles.th, width: '100px'}}>Difficulty</th>
                        <th style={{...styles.th, width: '100px'}}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topicQuestions.map(q => {
                        const state = progress.questionStates[q.id] || { status: 'pending' as Status };
                        
                        return (
                          <tr 
                            key={q.id} 
                            style={{
                              ...styles.tr,
                              ...(state.status === 'done' ? styles.trDone : {}),
                              ...(state.status === 'revision' ? styles.trRevision : {}),
                            }}
                          >
                            <td style={styles.td}>
                              <button 
                                style={{...styles.statusBtn, ...getStatusStyle(state.status)}}
                                onClick={() => progress.toggleStatus(q.id)}
                                title="Click to cycle: Pending → Done → Revision"
                              >
                                {state.status === 'pending' ? '○' : state.status === 'done' ? '✓' : '🔄'}
                              </button>
                            </td>
                            <td style={{...styles.td, color: '#6b7280'}}>{q.id}</td>
                            <td style={styles.td}>
                              {q.url ? (
                                <a 
                                  href={q.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  style={styles.questionLink}
                                >
                                  {q.name} ↗
                                </a>
                              ) : (
                                <span style={styles.questionName}>{q.name}</span>
                              )}
                            </td>
                            <td style={{...styles.td, color: '#9ca3af', fontSize: '13px'}}>{q.subtopic}</td>
                            <td style={styles.td}>
                              <span style={{...styles.difficultyBadge, ...getDifficultyStyle(q.difficulty)}}>
                                {q.difficulty}
                              </span>
                            </td>
                            <td style={styles.td}>
                              <div style={styles.quickActions}>
                                <button
                                  style={{
                                    ...styles.quickBtn,
                                    backgroundColor: state.status === 'pending' ? '#4b5563' : '#2a2a35',
                                  }}
                                  onClick={() => progress.updateStatus(q.id, 'pending')}
                                  title="Mark as Pending"
                                >○</button>
                                <button
                                  style={{
                                    ...styles.quickBtn,
                                    backgroundColor: state.status === 'done' ? '#10b981' : '#2a2a35',
                                    color: state.status === 'done' ? '#fff' : '#6b7280',
                                  }}
                                  onClick={() => progress.updateStatus(q.id, 'done')}
                                  title="Mark as Done"
                                >✓</button>
                                <button
                                  style={{
                                    ...styles.quickBtn,
                                    backgroundColor: state.status === 'revision' ? '#f59e0b' : '#2a2a35',
                                    color: state.status === 'revision' ? '#fff' : '#6b7280',
                                  }}
                                  onClick={() => progress.updateStatus(q.id, 'revision')}
                                  title="Mark for Revision"
                                >🔄</button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div style={styles.emptyState}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🔍</div>
              <p style={{fontSize: '18px'}}>No questions found matching your filters</p>
              <p style={{marginTop: '8px'}}>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p><strong>DSA Sheet Tracker</strong> • {questions.length} Questions • Built for FAANG Success 🚀</p>
        <p style={{marginTop: '8px', fontSize: '12px'}}>
          ✅ Done: {stats.done} | 🔄 Revision: {stats.revision} | ⏳ Pending: {stats.total - stats.done - stats.revision}
        </p>
        <p style={{marginTop: '8px', fontSize: '12px', color: '#4b5563'}}>
          {progress.isCloudEnabled 
            ? '☁️ Progress synced to cloud • Access from any device!' 
            : '💾 Progress saved locally • Sign in to sync across devices!'}
        </p>
      </footer>
    </div>
  );
}

export default App;
