 import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

eslint:{
  ignoreDuringBuilds:true,

},
    reactStrictMode:true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {

    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Important: return the modified config
    return config
  },
};

export default nextConfig;
