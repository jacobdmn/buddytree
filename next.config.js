/** @type {import('next').NextConfig} */

const { FILE_SERVER, FILE_SERVER_2 } = require('./secret')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [FILE_SERVER, FILE_SERVER_2],
  },
}
