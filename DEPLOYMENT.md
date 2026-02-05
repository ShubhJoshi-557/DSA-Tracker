# 🚀 DSA Sheet Tracker - Free Cloud Deployment Guide

Deploy your DSA tracker with **cloud sync** and **authentication** - completely FREE!

## Stack Overview

| Service | Purpose | Free Tier |
|---------|---------|-----------|
| **Vercel** | Hosting | Unlimited deployments, custom domains |
| **Supabase** | Database + Auth | 500MB DB, 50k auth users |

---

## Step 1: Create Supabase Project (5 minutes)

### 1.1 Sign Up
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" → Sign in with GitHub

### 1.2 Create New Project
1. Click "New Project"
2. Fill in:
   - **Name:** `dsa-tracker`
   - **Database Password:** (save this somewhere!)
   - **Region:** Choose closest to you
3. Click "Create new project" (wait ~2 min)

### 1.3 Create the Progress Table
1. Go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Paste this SQL and click "Run":

```sql
-- Create progress table
CREATE TABLE progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  question_states JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Create policy: Users can only see their own progress
CREATE POLICY "Users can view own progress" ON progress
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy: Users can insert their own progress
CREATE POLICY "Users can insert own progress" ON progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy: Users can update their own progress
CREATE POLICY "Users can update own progress" ON progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policy: Users can delete their own progress
CREATE POLICY "Users can delete own progress" ON progress
  FOR DELETE USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_progress_user_id ON progress(user_id);
```

### 1.4 Get Your API Keys
1. Go to **Project Settings** → **API**
2. Copy these values (you'll need them):
   - **Project URL** → `https://xxxxx.supabase.co`
   - **anon public** key → `eyJhbGc...` (long string)

---

## Step 2: Configure Authentication (2 minutes)

### 2.1 Enable Email Auth
1. Go to **Authentication** → **Providers**
2. Ensure **Email** is enabled
3. Optional: Disable "Confirm email" for easier testing

### 2.2 (Optional) Add OAuth Providers
You can also enable:
- GitHub login
- Google login
- Discord login

---

## Step 3: Deploy to Vercel (3 minutes)

### 3.1 Push to GitHub
1. Create a new GitHub repo
2. Push your dsa-tracker folder:
```bash
cd dsa-tracker
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dsa-tracker.git
git push -u origin main
```

### 3.2 Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `dsa-tracker` repository
5. In **Environment Variables**, add:
   - `VITE_SUPABASE_URL` = your Project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
6. Click "Deploy"

### 3.3 Done! 🎉
Your tracker is now live at `https://your-project.vercel.app`

---

## Step 4: Add Vercel URL to Supabase

### 4.1 Configure Allowed URLs
1. Go to Supabase → **Authentication** → **URL Configuration**
2. Add your Vercel URL to:
   - **Site URL:** `https://your-project.vercel.app`
   - **Redirect URLs:** `https://your-project.vercel.app/**`

---

## Local Development

To run locally with cloud sync:

1. Create `.env.local` in the project root:
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

2. Start the dev server:
```bash
npm run dev
```

---

## Features After Setup

✅ **Authentication**
- Email/password sign up & sign in
- Secure sessions

✅ **Cloud Sync**
- Progress saved to database
- Access from any device
- Auto-sync with debouncing

✅ **Privacy**
- Row Level Security (RLS)
- Only you can see your progress
- No one else can access your data

✅ **Offline Support**
- Works without internet (localStorage fallback)
- Syncs when back online

---

## Troubleshooting

### "Invalid API key"
- Check your environment variables are correct
- Redeploy on Vercel after changing env vars

### "Permission denied"
- Make sure RLS policies were created
- Check user is authenticated

### "Can't sign up"
- Check Authentication settings in Supabase
- Verify email confirmation settings

---

## Costs

**Completely FREE** within these limits:
- Supabase: 500MB database, 50k monthly auth users
- Vercel: Unlimited static deployments

For a personal DSA tracker, you'll never hit these limits!

---

## Security Notes

- The `anon` key is safe to expose (it's meant for client-side)
- RLS ensures users can only access their own data
- Never expose your `service_role` key

---

Made with 💜 for your DSA journey → 30-50 LPA! 🚀
