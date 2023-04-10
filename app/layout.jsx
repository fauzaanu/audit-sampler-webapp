import "./globals.css";

export const metadata = {
  title: "Audit Sampler App",
  description:
    "A simple application to get random samples from a list of numbers for auditing purposes.",
  robots: "index, follow",

  // Open Graph data (https://ogp.me/)
  ogTitle: "Audit Sampler App",
  ogDescription:
    "A simple application to get random samples from a list of numbers for auditing purposes.",
  ogImage: "https://example.com/og-image.jpg",
  ogUrl: "https://example.com/",

  // Twitter Card data (https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
  twitterTitle: "Audit Sampler App",
  twitterDescription:
    "A simple application to get random samples from a list of numbers for auditing purposes.",
  twitterImage: "https://example.com/twitter-image.jpg",
  twitterCard: "summary_large_image",

  // Manifest
  themeColor: "#ffffff",
  backgroundColor: "#ffffff",
  favicon: "favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
