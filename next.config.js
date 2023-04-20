/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env : {
    BACKEND_URL: "https://jsonplaceholder.typicode.com",
    FRONTEND_URL: "http://localhost:3000",
  },
}

module.exports = nextConfig
