import { Html, Head, Main, NextScript } from "next/document";
import FloatingWhatsApp from "../components/FloatingWhatsapp";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-gray-200">
        <Main />
        <NextScript />
        <FloatingWhatsApp />
      </body>
    </Html>
  );
}
