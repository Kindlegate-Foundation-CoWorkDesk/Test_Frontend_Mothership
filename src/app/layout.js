import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./components/Footer";
// _app.js
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <>
          <Header />
          {children}
          <Footer/>
        </>
      </body>
    </html>
  );
}
