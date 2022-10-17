// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Article, JavaScript } = initSchema(schema);

export {
  Article,
  JavaScript
};