# 🛒 Next.js & MongoDB E-Commerce Platform

A modern, high-performance full-stack e-commerce application built using **Next.js (Pages Router)**, **MongoDB**, and styled seamlessly with **Tailwind CSS**.

---

## 🚀 Features

*   **Server-Side Rendering (SSR)** & SEO Optimized 
*   **MongoDB Integration** via Mongoose models
*   **Custom Context API** for managing global state (Cart, User, etc.)
*   **Dynamic UI Components** with fluid layout transitions
*   **Custom API Routes** mapping `/api/*` architecture directly inside Next.js
*   **Tailwind CSS Custom Styling** with a modern utility-first approach

---

## 📂 Repository Structure

The project directory is structured as follows:

```text
├── components/          # Reusable UI elements (Navbar, Product Cards, Footer)
├── context/             # React Context files for managing global state (Cart, Auth)
├── middleware/          # Authentication & API protection middleware
├── models/              # MongoDB/Mongoose database schemas (User, Product, Order)
├── pages/               # Application views & API routes mapping
│   └── api/             # Next.js backend API routes (/api/hello, etc.)
├── public/              # Static assets (images, icons, logos)
├── styles/              # Global stylesheets and Tailwind configurations
└── utils/               # Utility helper functions (Database connection, formatters)
```

---

## 🛠️ Tech Stack

*   **Frontend Framework:** [Next.js](https://nextjs.org/) (Pages Router)
*   **Styling & Design:** [Tailwind CSS](https://tailwindcss.com) with PostCSS
*   **Database:** [MongoDB](https://mongodb.com) via Mongoose Object Modeling
*   **State Management:** React Context API
*   **Code Quality:** ESLint

---

## ⚙️ Getting Started

Follow these instructions to set up the project locally on your machine.

### 1. Prerequisites

Make sure you have **Node.js** (v18 or higher recommended) and **npm** or **yarn** installed.

### 2. Clone the Repository

```bash
git clone https://github.com
cd nextjs_ecommerce
```

### 3. Install Dependencies

Install all the required package dependencies using `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

### 4. Environment Configuration

Create a `.env.local` file in the root of your project directory to safely link your database credentials:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_custom_jwt_secret_key
```

### 5. Run the Development Server

Start the local server environment:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the live application.

---

## 🏗️ Production Build & Deployment

To generate a fully optimized build layer ready for production, execute:

```bash
npm run build
# or
yarn build
```

### Deploying on Vercel
The easiest method for launching your Next.js deployment layer is to use the [Vercel Platform](https://vercel.com):

1. Connect your GitHub repository to Vercel.
2. Set up your production Environment Variables (`MONGODB_URI`, etc.).
3. Click **Deploy**. Vercel handles framework-optimized hosting automatically.

---

## 📄 License

This project is open-source. Feel free to use and modify it for your personal or commercial applications!


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
