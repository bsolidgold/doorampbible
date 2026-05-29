import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/rules.html", destination: "/rules", permanent: true },
      { source: "/history.html", destination: "/history", permanent: true },
      { source: "/stats.html", destination: "/stats", permanent: true },
      { source: "/standings.html", destination: "/standings", permanent: true },
      { source: "/feedback.html", destination: "/feedback", permanent: true },
      {
        source: "/news/bret-gold-challenge.html",
        destination: "/news/bret-gold-challenge",
        permanent: true,
      },
      {
        source: "/news/owen-buckwalter-retires.html",
        destination: "/news/owen-buckwalter-retires",
        permanent: true,
      },
      {
        source: "/news/ndl-launches.html",
        destination: "/news/ndl-launches",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
