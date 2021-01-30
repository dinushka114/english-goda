import { ADMIN_PROVIDER, DB_PROVIDER } from './../../config/constants/constants';
import { Connection } from 'mongoose';
import { AdminSchema } from 'src/schemas/admin.schema';


export const adminsProvider = [
  {
    provide: ADMIN_PROVIDER,
    useFactory: (connection: Connection) => connection.model('Admin', AdminSchema),
    inject: [DB_PROVIDER],
  },
];