import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string(),
  VERSION: Joi.string().default('NotSet').required(),
  GRAPHQL_PATH: Joi.string().default('/graphql').required(),
  GRAPHQL_PLAYGROUND: Joi.boolean().default(false),
  GRAPHQL_DEBUG: Joi.boolean().default(false),
  LOCAL_USERNAME: Joi.string().default('admin').required(),
  LOCAL_PASSWORD: Joi.string().default('admin123').required(),
  MONGODB_URI: Joi.string().required(),
  DB_TYPE: Joi.string().default('mariadb').required(),
  DB_HOST: Joi.string().default('localhost').required(),
  DB_PORT: Joi.number().default(3306).required(),
  DB_USERNAME: Joi.string().default('root').required(),
  DB_PASSWORD: Joi.string().default('toor').required(),
  DB_DATABASE: Joi.string().default('ddd-demo').required(),
});
