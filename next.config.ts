import type { NextConfig } from "next";
import os from "os";

/** LAN IPs so phones/tablets can load /_next assets when using the Network URL */
function getLocalNetworkOrigins(): string[] {
  try {
    const origins = new Set<string>();

    for (const iface of Object.values(os.networkInterfaces() ?? {})) {
      if (!iface) continue;
      for (const config of iface) {
        const isIPv4 = config.family === "IPv4" || config.family === 4;
        if (isIPv4 && !config.internal) {
          origins.add(config.address);
        }
      }
    }

    return [...origins];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getLocalNetworkOrigins(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
};

export default nextConfig;
