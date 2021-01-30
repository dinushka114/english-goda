import { DB_PROVIDER } from './../config/constants/constants';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_URI, {
      useNewUrlParser:true,
      useUnifiedTopology:true
      }),
  },
];
