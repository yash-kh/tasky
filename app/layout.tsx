import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { ReduxProvider } from "./redux-provider";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tasky",
  description: "Todo App for productive days",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
