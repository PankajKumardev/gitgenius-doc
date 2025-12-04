import type { Metadata } from 'next';
import { Instrument_Serif, Manrope, JetBrains_Mono } from 'next/font/google';
import '../index.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GitGenius | The Developer Editorial',
  description: 'Transform your repository into an intelligent knowledge base. Zero config. Local-first. AI-powered.',
  keywords: ['git', 'ai', 'developer tools', 'repository', 'changelog', 'commit analysis', 'gitgenius'],
  authors: [{ name: 'Pankaj Kumar', url: 'https://github.com/pankajkumardev' }],
  openGraph: {
    title: 'GitGenius | The Developer Editorial',
    description: 'Transform your repository into an intelligent knowledge base. Zero config. Local-first. AI-powered.',
    url: 'https://gitgenius.dev',
    siteName: 'GitGenius',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitGenius | The Developer Editorial',
    description: 'Transform your repository into an intelligent knowledge base. Zero config. Local-first. AI-powered.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-ink font-sans selection:bg-indigo selection:text-white">
        {children}
      </body>
    </html>
  );
}
