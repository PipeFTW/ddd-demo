export const configuration = () => ({
  nodeEnv: process.env.NODE_ENV,
  version: process.env.VERSION,
  graphql: {
    path: process.env.GRAPHQL_PATH,
    debug: process.env.GRAPHQL_DEBUG,
    playground: process.env.GRAPHQL_PLAYGROUND,
  },
  auth: {
    localUsername: process.env.LOCAL_USERNAME,
    localPassword: process.env.LOCAL_PASSWORD,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
});
