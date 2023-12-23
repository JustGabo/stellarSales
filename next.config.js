/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "fakestoreapi.com"
        ]
      },
      
}

module.exports = nextConfig


// remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'fakestoreapi.com',
//       port: '',
//       pathname: '*',
//     },
//   ],