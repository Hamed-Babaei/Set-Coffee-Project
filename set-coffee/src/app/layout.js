import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "صفحه اصلی - SET Coffee | فروشگاه اینترنتی قهوه ست",
  description: "Hamed coffeeShop project with NextJs",

  icons: {
    icon: "https://set-coffee.com/wp-content/uploads/2024/03/COLOMBIA-Red-Honey-125.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
