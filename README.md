# Student Dashboard

A modern Student Dashboard built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Supabase**, and **Framer Motion**. The application displays student courses, learning progress, and activity in a clean and responsive dashboard.

---

## Features

* Responsive dashboard UI
* Course data fetched from Supabase
* Dynamic course progress
* Activity heatmap
* Framer Motion animations
* Reusable React components
* Loading state
* Error handling
* Responsive layout

---

## Tech Stack

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

---

## Architecture

The application follows a component-based architecture.

### Components

* HeroCard
* Sidebar
* CourseCard
* ActivityCard
* ProgressBar
* SkeletonCard

Each UI section is separated into reusable components to keep the code clean and maintainable.

---

## Server and Client Component Split

### Server Components

Server Components are used for:

* Fetching course data from Supabase
* Rendering the main dashboard page

Example:

* `app/page.tsx`

Using a Server Component allows data to be fetched securely before rendering the page.

### Client Components

Client Components are used wherever interactivity or animations are required.

Examples:

* CourseCard
* HeroCard
* ActivityCard
* Sidebar

These components use Framer Motion for hover and entry animations.

---

## Folder Structure

```
app/
components/
lib/
types/
public/
```

---

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

A sample configuration is available in `.env.example`.

---

## Installation

```bash
npm install
npm run dev
```

---

## Challenges Faced

During development I faced a few challenges:

* Configuring Supabase API keys correctly
* Understanding the Server Component and Client Component separation in Next.js App Router
* Implementing Framer Motion only inside Client Components
* Creating reusable UI components while keeping the project structure clean

These challenges helped me gain a better understanding of modern Next.js development.

---

## Future Improvements

* User Authentication
* Course Details Page
* Real-time Progress Updates
* Dark/Light Theme Toggle
* User Profile

---
## Author

**Sonu Kumar**

Bachelor of Computer Applications (BCA)
Chandigarh University
