const withFont = require("next-fonts")

module.exports = withFont({
  env: { BASE_URL: process.env.BASE_URL },
})