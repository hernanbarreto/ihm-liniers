import "./globals.css";
import "./fonts.css";
import { DatabaseProvider } from './components/DatabaseContext';

export const metadata = {
  title: "ATS-LINIERS",
  description: "TRENES ARGENTINOS",
};

export default function RootLayout({ children }) {
  return (
    <DatabaseProvider>
      <html lang="en">
        <body style={{ fontFamily: 'var(--font-geist-sans)' }}>
            {children}
        </body>
      </html>
    </DatabaseProvider>
  );
}
