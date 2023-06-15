import Provider from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Connecting People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
