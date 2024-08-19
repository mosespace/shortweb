export default async function sitemap() {
  const baseUrl = "https://shortweb.mosespace.com";
  // Step 1: Finding required params to fetch

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
