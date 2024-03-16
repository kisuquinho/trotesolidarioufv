import { Syne } from "next/font/google";
import "./globals.scss";
import Header from "./sections/Header";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Trote Solidário UFV | 2024",
    template: "Trote Solidário UFV | %s"
  },
  description: "O projeto Trote Solidário UFV reúne doações de cabelos para instituições de apoio a pessoas com câncer e arrecada insumos para unidades de desenvolvimento social. O evento anual ocorre em Viçosa - Minas Gerais, em colaboração com a Universidade Federal de Viçosa (UFV)",
  keywords: ['Trote', 'Solidário', 'UFV', 'Universidade Federal de Viçosa', 'Viçosa', 'Minas Gerais'],
  openGraph: {
    title: 'Trote Solidário UFV',
    description: 'O projeto Trote Solidário UFV reúne doações de cabelos para instituições de apoio a pessoas com câncer e arrecada insumos para unidades de desenvolvimento social. O evento anual ocorre em Viçosa - Minas Gerais, em colaboração com a Universidade Federal de Viçosa (UFV)',
    url: 'https://trotesolidarioufv.vercel.app',
    siteName: 'Trote Solidário UFV',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trote Solidário UFV',
    description: 'O projeto Trote Solidário UFV reúne doações de cabelos para instituições de apoio a pessoas com câncer e arrecada insumos para unidades de desenvolvimento social. O evento anual ocorre em Viçosa - Minas Gerais, em colaboração com a Universidade Federal de Viçosa (UFV)',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
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
