import Navbar from "@/components/Navbar";
import "./globals.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bonus buy",
  description: "bb nsense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mt-4 ">{children}</div>
      </body>
    </html>
  );
}
