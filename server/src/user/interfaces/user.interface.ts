import { user_role } from '@prisma/client';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: user_role;
  university_id: string;
  enterprise_id: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
}
