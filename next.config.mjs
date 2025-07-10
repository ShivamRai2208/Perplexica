/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'cdn.brainplexai.com',    
      's2.googleusercontent.com' 
     
    ],
    remotePatterns: [
      {
        hostname: 's2.googleusercontent.com', 
      },
    ],
  },
  serverExternalPackages: ['pdf-parse'],
};

export default nextConfig;
