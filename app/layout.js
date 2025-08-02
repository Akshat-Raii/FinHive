import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FinHive",
  description: "An App to manage your financial expenses .",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
       afterSignInUrl="/dashboard"
        afterSignUpUrl="/dashboard"
    >
      <html lang="en">
        <body className={outfit.className}>
          
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
