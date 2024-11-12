import {z} from 'zod';

export const AuthScheme = z.object({
  email: z.string().min(1, 'Requerido'),
  password: z.string().min(1, 'Requerido'),
});

export type AuthType = z.infer<typeof AuthScheme>;
