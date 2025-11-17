import type { Metadata } from "next";
import "./globals.css";
import Nav from  "./components/์Nav"



export const metadata: Metadata = {
  title: "Seven Knight Rebirth ",
  description: "Sven Knight Gacha Simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{fontSize:"65.5%"}}>
      <body>
          <Nav/>
          <div className="div-layout overflow-x-hidden">
            {children}
          </div>


      </body>
    </html>
  );
}
