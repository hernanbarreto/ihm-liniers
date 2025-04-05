import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DatabaseProvider } from './components/DatabaseContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ATS-LINIERS",
  description: "TRENES ARGENTINOS",
};

export default function RootLayout({ children }) {
  return (
    <DatabaseProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
        </body>
      </html>
    </DatabaseProvider>
  );
}
