/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        // “incremental”值允许您为特定路由采用 PPR。
        ppr: 'incremental',
      },
};

export default nextConfig;
