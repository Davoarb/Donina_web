# 🌿 Donina — Holistic Therapy & Wellness Center

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployed-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Workers-Serverless-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)

> Complete redesign and custom frontend development for the local wellness center **Donina** (Gijón, Spain). This project replaces a legacy website builder template with a modern, high-performance Single Page Application (SPA) optimized for client acquisition, direct booking, and strict GDPR compliance.

🔗 **Live Demo:** [donina.es](https://www.donina.es/)

---

## 📽️ Case Study: Redesign & Modernization (Before vs. After)

https://github.com/user-attachments/assets/b136669a-f596-4e45-ba5a-139a6a2ea2f5

---

## 🎯 Challenges & Key Solutions

- **Legacy Template Migration to Custom Architecture:** Replaced an outdated, rigid IONOS site builder with a component-driven frontend using **React 18 + Vite**, delivering instant load speeds, responsive layouts, and granular UI control.
- **Enhanced Visual Identity & UX:** Designed an aesthetic centered on wellness, featuring smooth micro-interactions powered by **Framer Motion** and lazy-trigger animations via `IntersectionObserver`.
- **Serverless Architecture & Direct Booking:** Replaced third-party data-storing form services (like Formspree) with a custom backend using **Cloudflare Workers** and the **Resend API**. Submissions are injected directly into the client's inbox without being stored in external databases.
- **Security & Strict GDPR Compliance:** Integrated **Cloudflare Turnstile (Invisible mode)** for robust, cookie-free spam protection without degrading UX. The entire infrastructure complies with European data protection standards and the Data Privacy Framework. Frontend keys and backend secrets (`TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`) are strictly decoupled and encrypted via secure environment variables.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 18, TypeScript, Vite |
| **UI & Styling** | Tailwind CSS, shadcn/ui, Lucide Icons |
| **Animations** | Framer Motion, React Intersection Observer |
| **Backend & Email** | Cloudflare Workers, Resend API |
| **Security & Forms** | Cloudflare Turnstile, Sonner / Radix UI Toasts |
| **Hosting & CI/CD** | Cloudflare Pages (Edge CDN, Automated SSL & DDoS Mitigation) |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository
git clone https://github.com/Davoarb/donina-web.git
cd donina-web

### 2. Install dependencies
npm install

### 3. Configure environment variables
Duplicate the template file to create your local .env:
cp .env.example .env

Ensure the following variables are defined in .env:
VITE_CONTACT_PHONE="+34 600 00 00 00"
VITE_CONTACT_EMAIL="contact@example.com"
VITE_CONTACT_ADDRESS="Business Address, Gijón"

### 4. Start the development server
npm run dev

### 5. Build for production
npm run build

---

## 👤 Author

* **David Rivadeneira Bolaños** — [GitHub](https://github.com/Davoarb)
