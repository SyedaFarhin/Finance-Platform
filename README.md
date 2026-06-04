# 💰 FinanceAI — AI-Powered Personal Finance Manager

> A smart, full-featured personal finance application that tracks your money, categorizes transactions automatically, scans receipts, and delivers AI-generated monthly insights — all in a real-time, responsive dashboard.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://your-vercel-url.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📸 Screenshots

> Add screenshots or a demo GIF here

---

## ✨ Features

- **Multi-Account Tracking** — Manage income and expenses across multiple accounts in one place
- **Smart Transaction Categorization** — Automatically categorizes transactions using AI
- **Receipt Scanning** — Upload and scan receipts to auto-populate transaction details
- **Recurring Transactions** — Set up and manage recurring income or expense entries
- **Budget Monitoring with Email Alerts** — Define budgets per category and get email notifications when limits are exceeded
- **Interactive Financial Dashboards** — Visualize spending trends, income vs. expenses, and category breakdowns
- **AI-Generated Monthly Insights** — Personalized AI-powered summaries of your monthly spending with improvement suggestions
- **Responsive UI** — Fully responsive design optimized for desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| UI Components | Shadcn UI |
| Styling | Tailwind CSS |
| Database | PostgreSQL (Neon/Supabase) |
| ORM | Prisma |
| AI Features | Google Gemini API |
| Email Alerts | Resend |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or pnpm
- A Neon or Supabase PostgreSQL database
- Google Gemini API key
- Resend API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/financeai.git
cd financeai
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

4. Push the database schema

```bash
npx prisma db push
```

5. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and fill in your keys:

```env
# Database
DATABASE_URL=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Google Gemini
GEMINI_API_KEY=

# Resend (Email Alerts)
RESEND_API_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
financeai/
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable UI components (Shadcn + custom)
├── lib/                  # Utility functions and helpers
├── hooks/                # Custom React hooks
├── actions/              # Server actions
├── prisma/               # Database schema & migrations
└── public/               # Static assets
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.