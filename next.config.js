/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          'C:\\DumpStack.log.tmp',
          'C:\\System Volume Information\\**',
          'C:\\hiberfil.sys',
          'C:\\pagefile.sys',
          'C:\\swapfile.sys'
        ]
      }
    }
    return config
  }
}

module.exports = nextConfig
