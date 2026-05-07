import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt A/B Cost Calculator',
  description: 'Calculate cost per conversion for prompt variants. Run A/B tests on AI prompts and find the most cost-effective version.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05b3bfb3-fe80-481a-a6ce-28033412b364"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
