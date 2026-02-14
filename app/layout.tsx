import "./globals.css";

export const metadata = {
  title: "Caleb Udeibom — Machine Learning Engineer",
  description:
    "Personal portfolio of Caleb Udeibom, showcasing software, AI, and machine learning projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
