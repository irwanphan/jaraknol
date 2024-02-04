import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "000",
  description: "Ruang dan waktu adalah angka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          
          <Container p={16}>
            {children}
          </Container>

        </MantineProvider>
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
