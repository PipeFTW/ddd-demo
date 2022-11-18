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
  }
});
