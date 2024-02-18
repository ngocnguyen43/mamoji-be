const config = {
    PORT: 4001,
    REDIS_PORT: process.env.REDIS_PORT_DEV || 1051,
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL_DEV || 'amqp://127.0.0.1:5672',
    CONSUL_URL: process.env.CONSUL_HOST || '127.0.0.1',
    HOST_PORT: process.env.HOST_PORT || 6001,
    ORIGIN: process.env.ORIGIN_URL || '',
    ORIGIN_API: process.env.ORIGIN_API || '',
    COOKIES_DOMAIN: process.env.COOKIES_DOMAIN || "",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "",
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || "",
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || "",
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || ""
};
export type configType = typeof config
export default config