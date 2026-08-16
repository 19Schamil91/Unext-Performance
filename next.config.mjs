/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/leistungen/unfallgutachten",
        destination: "/gutachtenarten/unfallgutachten",
        permanent: true,
      },
      {
        source: "/leistungen/fahrzeugbewertung",
        destination: "/gutachtenarten/fahrzeugbewertung",
        permanent: true,
      },
      {
        source: "/leistungen/schadendokumentation",
        destination: "/gutachtenarten/schadendokumentation",
        permanent: true,
      },
      {
        source: "/en/leistungen/unfallgutachten",
        destination: "/en/gutachtenarten/unfallgutachten",
        permanent: true,
      },
      {
        source: "/ru/leistungen/unfallgutachten",
        destination: "/ru/gutachtenarten/unfallgutachten",
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
