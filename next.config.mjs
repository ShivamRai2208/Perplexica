/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 's2.googleusercontent.com',
      },
    ],
  },
  serverExternalPackages: ['pdf-parse'],
};


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.brainplexai.com', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAA2klEQVR4AWJwL/ABNFsHFhTDQACG3wTdpKA7dJAuc1ME3gwZpkNkgoN7d1zpOxHR9K7FD059om2SZvT9AFc45FJlnnRWOLBzWw9Gpnya58ocRkDkyHaaUyXsAS20cdRo0qjR1gMKNnM0CmpzDwg3gvAuUDG8EUSL2v+JtFHQlv5A+7ADKE1ncA4Al+dWqGh2BLN9hylghUksu425gdom4B4I7gJSIEgClkCwCAiBIBxfaXEGUYz4vdSAqyO4Pg8qig4gtg7gxeEAXnpubat26Zp4PP+Ki3D4Vf8HLKicMDwr0GcAAAAASUVORK5CYII='], //
    },
};

export default nextConfig;
