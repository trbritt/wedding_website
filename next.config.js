/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Set the correct base path to work with static hosting
  basePath: '/wedding_website',
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Compress images on-the-fly
  compress: true,
  // Enable experimental features
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Modern JS features
    esmExternals: true,
    // Webpack builder
    webpackBuildWorker: true
  },
  images: {
    loader: "custom",
    imageSizes: [96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  // Webpack config for handling any special loaders
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|ico|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files/',
            outputPath: 'static/files/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
