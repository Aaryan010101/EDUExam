# Staff Attendance & Salary Calculator — Implementation Plan

A full-stack SaaS web app for small Indian businesses (restaurants, salons, kirana stores, clinics) to manage staff, attendance, advances, and salary. Built with **Next.js 14 App Router**, **Clerk**, **Supabase**, **Razorpay**, and **Resend**, deployed on **Vercel**.

---

## Execution Strategy

The user requested **Phase 1 first**, then subsequent phases. This plan covers all 4 phases with Phase 1 in full detail.

> [!IMPORTANT]
> **Before code generation begins, you will need to supply credentials for:**
> - Clerk (publishable key + secret key)
> - Supabase (project URL + anon key + service role key)
> - Razorpay (key ID + key secret)
> - Resend (API key)
>
> Code will be scaffolded with `.env.example` placeholders. Real keys go in `.env.local`.

---

## Phase 1 — Scaffold + Auth + Staff CRUD + Attendance (Week 1–2)

### Proposed Changes

---

### Project Bootstrap

#### [NEW] `package.json` / Next.js project root
- `npx create-next-app@14` with TypeScript, Tailwind CSS, ESLint, App Router
- Extra deps: `@clerk/nextjs`, `@supabase/supabase-js`, `@supabase/ssr`, `lucide-react`, `date-fns`, `react-hot-toast`, `clsx`, `tailwind-merge`

---

### Environment & Config

#### [NEW] `.env.example`
Documents all required environment variables (Clerk, Supabase, Razorpay, Resend, app URL).

#### [NEW] `next.config.js`
Image domains (Supabase storage), Clerk middleware config.

---

### Authentication Layer (Clerk)

#### [NEW] `middleware.ts` (project root)
Clerk `authMiddleware` protecting all routes except `/sign-in`, `/sign-up`, `/api/webhooks/*`.

#### [NEW] `app/sign-in/[[...sign-in]]/page.tsx`
Clerk `<SignIn />` component with custom branding (Primary Blue `#1A56A0`).

#### [NEW] `app/sign-up/[[...sign-up]]/page.tsx`
Clerk `<SignUp />` component.

#### [NEW] `app/layout.tsx`
Root layout with `<ClerkProvider>`, Inter font, Toaster, global CSS.

---

### Supabase Layer

#### [NEW] `lib/supabase/client.ts`
Browser client using `@supabase/ssr` `createBrowserClient`.

#### [NEW] `lib/supabase/server.ts`
Server client using `@supabase/ssr` `createServerClient` (reads cookies from Next.js headers).

#### [NEW] `lib/supabase/types.ts`
Full TypeScript types generated from DB schema (Business, Staff, Attendance, Advance, SalaryRecord).

#### [NEW] `supabase/schema.sql`
Complete SQL: all 5 tables + RLS policies + indexes. Ready to copy-paste into Supabase SQL Editor.

#### [NEW] `docs/supabase-setup.md`
Step-by-step guide: create project, run schema.sql, enable RLS, create storage bucket `logos`.

---

### Business Onboarding

#### [NEW] `app/(app)/onboarding/page.tsx`
After first login, if no `businesses` row exists for the Clerk user, redirect here.
- Form: Business name, optional logo upload
- On submit: insert into `businesses`, redirect to `/`

#### [NEW] `app/(app)/layout.tsx`
App shell layout: sidebar nav (desktop), bottom tab bar (mobile), checks business exists.

---

### Dashboard (`/`)

#### [NEW] `app/(app)/page.tsx` (Dashboard)
- Today's attendance summary card (present / absent / unmarked)
- Monthly payroll estimate card
- Pending payments list (staff not paid this month)
- Quick action buttons: Mark Attendance → `/attendance`, Add Staff → `/staff/new`, Calculate Salary → `/salary`

---

### Staff Management

#### [NEW] `app/(app)/staff/page.tsx`
- Grid of staff cards with name, role, salary type badge, joining date, active/inactive badge
- Search input filter (client-side)
- FAB "Add Staff" button

#### [NEW] `app/(app)/staff/new/page.tsx`
Add Staff form:
- Name, phone, role (Cashier / Cook / Helper / Manager / custom)
- Salary type toggle: Monthly ↔ Daily
- Monthly salary OR daily wage (conditional)
- Joining date picker
- Validation with inline errors
- On submit: insert `staff` row with `business_id`

#### [NEW] `app/(app)/staff/[id]/page.tsx`
Staff profile:
- Header (name, role, phone, joining date, status badge)
- Monthly attendance calendar (color-coded tiles)
- Advance history table
- Salary history list
- Edit / Deactivate buttons

#### [NEW] `app/(app)/staff/[id]/edit/page.tsx`
Edit Staff form (same fields as new, pre-filled). Includes Deactivate button (sets `is_active = false`).

---

### Daily Attendance

#### [NEW] `app/(app)/attendance/page.tsx`
- Date picker (default today, allows backdating)
- Scrollable list of active staff
- Each row: name + role + **P / H / A** toggle buttons (44px tap targets)
- Bulk "Mark All Present" button
- Save button → upsert `attendance` rows → success toast

---

### API Routes (Server Actions / Route Handlers)

#### [NEW] `app/api/business/route.ts`
GET (fetch own business) / POST (create business).

#### [NEW] `app/api/staff/route.ts`
GET (list staff for business) / POST (add staff).

#### [NEW] `app/api/staff/[id]/route.ts`
GET / PATCH / soft-delete (is_active=false).

#### [NEW] `app/api/attendance/route.ts`
GET (by date + business) / POST (upsert list of attendance records).

---

### Shared Components

#### [NEW] `components/ui/` — Button, Input, Select, Toggle, Badge, Card, Modal
#### [NEW] `components/layout/Sidebar.tsx` — desktop nav
#### [NEW] `components/layout/BottomNav.tsx` — mobile bottom tab bar
#### [NEW] `components/attendance/AttendanceRow.tsx` — P/H/A toggle row
#### [NEW] `components/staff/StaffCard.tsx` — staff list card
#### [NEW] `components/staff/StaffForm.tsx` — reusable add/edit form

---

### Styling

#### [NEW] `tailwind.config.ts`
Custom color tokens: `primary` (#1A56A0), `success` (#1D9E75), `danger` (#E24B4A), `warning` (#EF9F27). Inter font. Safe-list tap-target classes.

#### [NEW] `app/globals.css`
Base resets, scrollbar styles, calendar tile styles.

---

## Phase 2 — Advances + Salary Engine (Week 3–4)

### Advance Management (`/advances`)
- Add advance form (staff, amount, date, month_to_deduct)
- List all advances with pending/deducted badge
- API route: GET/POST advances

### Salary Screen (`/salary`)
- Month selector
- Table: base salary | present days | advance | overtime | bonus | final | status
- **Calculate All** button runs:
  ```
  Final = (BaseSalary ÷ WorkingDays) × DaysPresent + Overtime + Bonus − Advance
  WorkingDays = CalendarDays − Sundays − Holidays
  HalfDay = 0.5
  Daily: DailyWage × DaysPresent
  ```
- Manual override per staff
- Mark as Paid + date picker
- API routes: GET/POST/PATCH salary_records

---

## Phase 3 — PDF + WhatsApp + Razorpay (Week 5–6)

### PDF Salary Slip
- `@react-pdf/renderer` component: business logo + name, staff info, attendance breakdown, earnings table, deductions, net payable, signature line
- Download button
- Save PDF → Supabase Storage `slips/` bucket → update `slip_url`
- WhatsApp share: `https://wa.me/91{phone}?text=...{slip_url}`

### Settings (`/settings`)
- Business name + logo upload
- Plan & billing section

### Razorpay Subscriptions
- Plan cards (Free / Basic ₹599 / Pro ₹1,299)
- Subscribe button → Razorpay Checkout
- Webhook handler: `app/api/webhooks/razorpay/route.ts`
  - Events: `payment.captured`, `payment.failed`, `subscription.cancelled`, `subscription.activated`
  - Updates `businesses.plan`
- Plan gate HOC: checks `plan` before PDF / WhatsApp / export features

---

## Phase 4 — Reports + Polish + Deploy (Week 7–8)

### Reports (`/reports`)
- Monthly attendance table (all staff, selected month)
- Export `.xlsx` using `xlsx` npm package (Pro plan gate)
- Individual staff 3–6 month history

### Email (Resend)
- Welcome email on signup
- Salary slip delivery email

### Vercel Deploy
- `vercel.json` config
- Environment variables setup guide
- Production Clerk + Supabase settings

---

## Open Questions

> [!IMPORTANT]
> **Do you have Clerk, Supabase, Razorpay, and Resend accounts already set up?**
> If yes, please share the API keys/URLs. If not, I'll scaffold everything with `.env.example` placeholders and provide setup guides for each service.

> [!WARNING]
> **Hindi/English toggle** — Full i18n requires `next-intl` or `react-i18next`. For Phase 1, I'll build English-first. Should I add the Hindi toggle in Phase 1 or defer to Phase 4 polish?

> [!IMPORTANT]
> **Razorpay Test Mode** — For development I'll use Razorpay test keys and test webhooks. Do you want test mode or live mode from the start?

---

## Verification Plan

### Automated (Phase 1)
- `npm run build` — zero TypeScript errors
- `npm run lint` — ESLint clean

### Manual (Phase 1)
1. Sign up / sign in via Clerk (Google + Email)
2. Business onboarding form creates `businesses` row
3. Add 3 staff (monthly + daily wage types)
4. Mark attendance for today — P / H / A per staff
5. View staff profile with calendar
6. Edit staff, deactivate one

### Browser Preview
- Launch dev server, open browser subagent to validate all screens render correctly on mobile viewport (375px)
