import Header from "@/components/layout/Header";
import "../styles/main.scss";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata = {
  title: "Sixteen 8",
  description: "Chinese Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
