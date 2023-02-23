export const env = {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/url-shortener',
  baseUrl: process.env.BASE_URL_PREFIX ?? 'http://localhost:3333',
  port: process.env.PORT ?? '3333',
  urlExpiresAtInHours: process.env.URL_EXPIRES_AT_IN_HOURS ?? '24'
}