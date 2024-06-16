/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/expensify",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
