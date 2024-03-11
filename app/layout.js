import { Syne } from "next/font/google";
import "./globals.scss";
import Header from "./sections/Header";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Trote Solidário UFV | 2024",
  description: "O projeto Trote Solidário UFV reúne doações de cabelos para instituições de apoio a pessoas com câncer e arrecada insumos para unidades de desenvolvimento social. O evento anual ocorre em Viçosa - Minas Gerais, em colaboração com a Universidade Federal de Viçosa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}
