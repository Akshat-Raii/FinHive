import React from "react";

// Checkmark Icon Component for reusability
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-5 w-5 text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

function Upgrade() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Flexible Plans for Your Needs
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choose a plan that works for you and unlock powerful features to
            manage your finances like never before.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          {/* Starter Plan */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Starter</h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  $9
                </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> Unlimited Budgets </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> Unlimited Expenses </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> Email Support </span>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block rounded-lg border border-blue-600 bg-white px-12 py-3 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="relative rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-lg lg:p-8">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Pro</h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  $20
                </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> Everything in Starter </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> AI-Powered Suggestions </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> Detailed Analytics </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-gray-700"> Priority Phone Support </span>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;

