import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string(),
  VERSION: Joi.string().default('NotSet').required(),
  GRAPHQL_PATH: Joi.string().default('/graphql').required(),
  GRAPHQL_PLAYGROUND: Joi.boolean().default(false),
  GRAPHQL_DEBUG: Joi.boolean().default(false),
  LOCAL_USERNAME: Joi.string().default('admin').required(),
  LOCAL_PASSWORD: Joi.string().default('admin123').required(),
});
