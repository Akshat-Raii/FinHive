"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:h-[calc(100vh-80px)] lg:items-center lg:px-8">
        <motion.div
          className="w-full text-center lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Manage your money with
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              AI-Powered Insight
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600 lg:max-w-none">
            Stop guessing, start knowing. FinHive provides clear, actionable
            advice to help you budget smarter, save more, and achieve your
            financial goals with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/learn-more"
              className="rounded-lg bg-gray-100 px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <div className="relative mt-12 w-full lg:mt-0 lg:w-1/2">
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
            >
              <h3 className="flex items-center text-sm font-bold text-gray-800">
                <span className="mr-2 rounded-full bg-orange-100 p-1">💡</span>
                FinHive AI
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                It is advised to invest or save a significant portion of your
                income...
              </p>
            </motion.div>

            <motion.div
              className="absolute top-32 right-0 flex w-48 items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.8, x: 50 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
            >
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <CardIcon />
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Spend</p>
                <p className="text-lg font-bold text-gray-900">Rs.220</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-48 left-10 flex w-56 items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.8, x: -50 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
            >
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <ChartIcon />
              </div>
              <div>
                <p className="text-xs text-gray-500">Activity</p>
                <p className="text-lg font-bold text-gray-900">This Week</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;