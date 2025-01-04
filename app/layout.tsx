import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components import
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Elnur Portfolio",
  description: "Generated by create next app",
};

/* In TypeScript, ReadOnly is a utility type that ensures the properties of an object cannot be reassigned after the object is created. 
When applied to a type like { children: React.ReactNode }, it ensures that the children prop passed to the 
RootLayout component is immutable — i.e., its value cannot be changed within the component.
In this case, you can use Readonly to ensure that you don't accidentally modify the children prop within your component.

React.ReactNode is a TypeScript type that represents anything that can be rendered in React. It can include elements like:

JSX elements
Strings
Numbers
Arrays of JSX elements
null, undefined, false (which means nothing is rendered)

Using React.ReactNode ensures that the children prop can accept any valid React child element.

*/
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>

      </body>
    </html>
  );
}
