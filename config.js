module.exports = {
  moniepointAPIKey: process.env.MONIEPOINT_API_KEY,
  moniepointSecret: process.env.MONIEPOINT_SECRET,
  usdToNGN: Number(process.env.USD_TO_NGN) || 460,
  davCoinValueUSD: Number(process.env.DAVCOIN_VALUE_USD) || 10000
};
