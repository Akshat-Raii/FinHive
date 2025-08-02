# FinHive ![Logo](logo.png)

An AI-powered platform to take control of your finances. Track expenses, manage budgets, and receive intelligent insights to achieve your financial goals.

### Live Demo 🚀

**[FinHive](https://finhive.vercel.app/)**

---

## 📋 Table of Contents

- [About The Project](#about-the-project-)
- [Key Features](#key-features-)
- [Built With](#built-with-)
- [Getting Started](#getting-started-)
- [Usage](#usage-)
- [Contributing](#contributing-)

---

## About The Project 📝

Managing personal finances can be overwhelming. FinHive simplifies this by providing an intuitive platform to track income and expenses, set budgets, and receive personalized financial advice powered by AI. Instead of generic tips, FinHive analyzes your unique financial data to offer actionable insights, helping you build smarter financial habits and reach your goals faster.

This project is perfect for those looking to learn how to integrate AI-driven insights and financial management into a modern web application using Next.js.

---

## Key Features ✨

* **💸 Track Income & Expenses:** Easily log all your transactions to get a clear picture of where your money is going.
* **🎯 Smart Budgeting:** Set monthly or category-specific budgets and monitor your spending to stay on track.
* **🧠 AI-Powered Advice:** Receive personalized financial advice and insights based on your spending patterns, powered by the Gemini API.
* **📊 Visualize Your Finances:** Understand your financial health at a glance with interactive charts and dashboards.
* **📱 Responsive Design:** Access and manage your finances seamlessly on any device, whether it's your desktop, tablet, or phone.

---

## Built With 💻

This project was built using the following major technologies:

-   **Frontend:** Next.js, TypeScript, Tailwind CSS
-   **AI:** Gemini API
-   **Authentication:** Clerk
-   **Database:** PostgreSQL 
-   **Deployment:** Vercel

---

## Getting Started 🚀

Follow these steps to get a local copy of FinHive up and running on your machine.

### Prerequisites

Make sure you have the following software installed on your machine:
* Node.js
    ```sh
    npm install npm@latest -g
    ```
* Git

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Akshat-Raii/FinHive.git](https://github.com/Akshat-Raii/FinHive.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd FinHive
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary API keys and configuration variables. You can obtain the API keys from their respective websites (Clerk, OpenAI).
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='YOUR_CLERK_PUBLISHABLE_KEY'
    CLERK_SECRET_KEY='YOUR_CLERK_SECRET_KEY'
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    
    NEXT_PUBLIC_OPENAI_API_KEY='YOUR_OPENAI_API_KEY'
    NEXT_PUBLIC_DATABASE_URL='YOUR_DATABASE_CONNECTION_STRING'
    ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## Usage 💡

1.  Sign up to create your user account.
2.  Start by adding your income sources and logging your daily expenses.
3.  Create budgets for different spending categories (e.g., Groceries, Entertainment, Bills).
4.  Navigate to the AI Advisor section to ask for financial advice and receive personalized tips based on your data.

---

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
