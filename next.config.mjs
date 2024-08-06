/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Explicitly specify protocol for security
          hostname: '100k-faces.glitch.me',
        },
      ],
    },
  };
  
  export default nextConfig;