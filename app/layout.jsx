import "./globals.css";

export const metadata = {
  title: "Aura | Presenca e Essencia",
  description: "Landing page imersiva da Aura com narrativa editorial, manifesto e produtos em 3D."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
