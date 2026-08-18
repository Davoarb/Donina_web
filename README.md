# 🌿 Donina — Holistic Therapy & Wellness Center

> Complete redesign and custom frontend development for the local wellness center **Donina** (Gijón, Spain). This project replaces a legacy website builder template with a modern, high-performance Single Page Application (SPA) optimized for client acquisition and direct booking.

🔗 **Live Demo:** [donina-web.vercel.app](https://donina-web.vercel.app)

---

## 📽️ Case Study: Redesign & Modernization (Before vs. After)


https://github.com/user-attachments/assets/b136669a-f596-4e45-ba5a-139a6a2ea2f5


---

## 🎯 Challenges & Key Solutions

* **Legacy Template Migration to Custom Architecture:** Replaced an outdated, rigid IONOS site builder with a component-driven frontend using **React 18 + Vite**, delivering instant load speeds, responsive layouts, and granular UI control.
* **Enhanced Visual Identity & UX:** Designed an aesthetic centered on wellness, featuring smooth micro-interactions powered by **Framer Motion** and lazy-trigger animations via `IntersectionObserver`.
* **Direct Booking & Conversion:** Built a sanitization layer for direct **WhatsApp API** chat routing and a working client intake form integrated with **Formspree**.
* **Security & Environment Sanitization:** Contact endpoints and business secrets are decoupled via secure environment variables (`.env`), documented transparently using `.env.example`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 18, TypeScript, Vite |
| **UI & Styling** | Tailwind CSS, shadcn/ui, Lucide Icons |
| **Animations** | Framer Motion, React Intersection Observer |
| **Forms & Feedback** | Formspree, Sonner / Radix UI Toasts |
| **Hosting & CI/CD** | Vercel (Edge CDN, Automated SSL & DDoS Mitigation) |

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
