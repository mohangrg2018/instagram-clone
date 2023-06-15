import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Connecting People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
