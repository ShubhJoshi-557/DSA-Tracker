import { useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';

interface AuthProps {
  onSignIn: (email: string, password: string) => Promise<boolean>;
  onSignUp: (email: string, password: string) => Promise<{ success: boolean; needsConfirmation: boolean }>;
  loading: boolean;
  error: string | null;
  message: string | null;
  onClearError: () => void;
  onClearMessage: () => void;
}

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  card: {
    backgroundColor: '#1a1a22',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '420px',
    width: '100%',
    border: '1px solid #2a2a35',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  logo: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
    background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '14px',
    marginTop: '8px',
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
  },
  tab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    transition: 'all 0.2s',
  },
  tabActive: {
    backgroundColor: '#a78bfa',
    color: '#fff',
  },
  tabInactive: {
    backgroundColor: '#2a2a35',
    color: '#9ca3af',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#9ca3af',
  },
  input: {
    padding: '12px 16px',
    backgroundColor: '#12121a',
    border: '1px solid #2a2a35',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '14px',
    backgroundColor: '#a78bfa',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '8px',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  error: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    borderRadius: '8px',
    padding: '12px',
    color: '#f87171',
    fontSize: '13px',
    textAlign: 'center',
  },
  success: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '8px',
    padding: '12px',
    color: '#34d399',
    fontSize: '13px',
    textAlign: 'center',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    margin: '24px 0',
    color: '#6b7280',
    fontSize: '12px',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#2a2a35',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '24px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: '#9ca3af',
  },
  featureIcon: {
    fontSize: '16px',
  },
};

export function Auth({ onSignIn, onSignUp, loading, error, message, onClearError, onClearMessage }: AuthProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setEmailSent(false);
    onClearError();
    onClearMessage();

    if (!email || !password) {
      setLocalError('Please fill in all fields');
      return;
    }

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setLocalError('Passwords do not match');
        return;
      }
      if (password.length < 6) {
        setLocalError('Password must be at least 6 characters');
        return;
      }
      const result = await onSignUp(email, password);
      if (result.success && result.needsConfirmation) {
        setEmailSent(true);
      }
    } else {
      await onSignIn(email, password);
    }
  };

  const switchMode = (newMode: 'signin' | 'signup') => {
    setMode(newMode);
    setLocalError(null);
    setEmailSent(false);
    onClearError();
    onClearMessage();
  };

  const displayError = localError || error;
  const displayMessage = message;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>🚀</div>
          <h1 style={styles.title}>DSA Sheet Tracker</h1>
          <p style={styles.subtitle}>Master 634 Questions → FAANG</p>
        </div>

        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tab,
              ...(mode === 'signin' ? styles.tabActive : styles.tabInactive),
            }}
            onClick={() => switchMode('signin')}
          >
            Sign In
          </button>
          <button
            style={{
              ...styles.tab,
              ...(mode === 'signup' ? styles.tabActive : styles.tabInactive),
            }}
            onClick={() => switchMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              autoComplete="email"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            />
          </div>

          {mode === 'signup' && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                style={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>
          )}

          {displayError && <div style={styles.error}>⚠️ {displayError}</div>}
          {displayMessage && <div style={styles.success}>{displayMessage}</div>}
          {emailSent && (
            <div style={styles.success}>
              📧 Confirmation email sent to <strong>{email}</strong>!
              <br />
              <span style={{fontSize: '12px', marginTop: '4px', display: 'block'}}>
                Click the link in your email, then come back here and sign in.
              </span>
            </div>
          )}

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            disabled={loading}
          >
            {loading ? '⏳ Please wait...' : mode === 'signin' ? '🔐 Sign In' : '✨ Create Account'}
          </button>
          
          {emailSent && (
            <button
              type="button"
              style={{
                ...styles.button,
                backgroundColor: 'transparent',
                border: '1px solid #2a2a35',
                marginTop: '8px',
              }}
              onClick={() => {
                setEmailSent(false);
                switchMode('signin');
              }}
            >
              I've confirmed my email → Sign In
            </button>
          )}
        </form>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span>Why sign in?</span>
          <div style={styles.dividerLine}></div>
        </div>

        <div style={styles.features}>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>☁️</span>
            <span>Cloud sync</span>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>📱</span>
            <span>Any device</span>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>🔒</span>
            <span>Private progress</span>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>💾</span>
            <span>Auto backup</span>
          </div>
        </div>
      </div>
    </div>
  );
}
