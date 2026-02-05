# 🚀 DSA Sheet Tracker

A beautiful, feature-rich DSA (Data Structures & Algorithms) progress tracker built for landing **30-50 LPA** jobs at top tech companies.

![DSA Tracker](https://img.shields.io/badge/Questions-634-purple)
![Auth](https://img.shields.io/badge/Auth-Supabase-green)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

## ✨ Features

- 📊 **634 Curated Questions** - Handpicked for FAANG/top startup interviews
- 🔐 **Cloud Authentication** - Secure email/password login
- ☁️ **Cloud Sync** - Access your progress from any device
- 📱 **Responsive Design** - Works on mobile, tablet, desktop
- 🎯 **Smart Filtering** - Filter by topic, difficulty, status
- 📈 **Progress Tracking** - Visual stats and progress bars
- 🔄 **Status Management** - Pending → Done → Revision
- 📥 **Import/Export** - Backup and restore progress
- 💾 **Offline Support** - Works without internet (localStorage fallback)

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Supabase (PostgreSQL + Auth)
- **Hosting:** Vercel (Free)

## 🚀 Quick Start

### Local Development (No Cloud)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app works without cloud setup - progress saves to localStorage.

### With Cloud Sync

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full setup guide.

Quick version:
1. Create free [Supabase](https://supabase.com) project
2. Run the SQL to create tables
3. Add env variables
4. Deploy to [Vercel](https://vercel.com)

## 📁 Project Structure

```
src/
├── components/
│   └── Auth.tsx        # Login/Signup modal
├── data/
│   ├── allQuestions.ts # Question data (part 1)
│   └── allQuestions2.ts # Question data (part 2)
├── hooks/
│   ├── useAuth.ts      # Authentication hook
│   └── useProgress.ts  # Progress sync hook
├── lib/
│   └── supabase.ts     # Supabase client
└── App.tsx             # Main application
```

## 🎯 Topics Covered

| Topic | Questions |
|-------|-----------|
| Sorting | 16 |
| Two Pointers | 22 |
| Prefix Sum | 16 |
| Matrix | 19 |
| Hashing | 27 |
| Sliding Window | 22 |
| Linked List | 33 |
| Stack | 34 |
| Queue | 10 |
| Binary Search | 30 |
| Bit Manipulation | 16 |
| Recursion & Backtracking | 36 |
| Binary Trees | 54 |
| BST | 19 |
| Heap | 21 |
| Trie | 10 |
| Greedy | 27 |
| Dynamic Programming | 86 |
| Graphs | 76 |
| Advanced DP | 28 |
| String Algorithms | 12 |
| Advanced (Segment Trees) | 20 |

## 📊 Difficulty Distribution

- 🟢 **Easy:** ~15% - Build foundations
- 🟡 **Medium:** ~60% - Interview standard
- 🔴 **Hard:** ~25% - Challenging but frequently asked

## 🔒 Security

- Row Level Security (RLS) enabled
- Users can only access their own data
- Passwords hashed by Supabase Auth
- HTTPS everywhere

## 📝 License

MIT - Use it, modify it, share it!

---

Built with 💜 for your DSA journey → **30-50 LPA!** 🚀
