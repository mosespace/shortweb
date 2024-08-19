export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://shortweb.mosespace.com/sitemap.xml",
  };
}
