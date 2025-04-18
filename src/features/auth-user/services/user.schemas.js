import { z } from 'zod';

export const loginSchema = z.object({
	UsernameOrEmail: z.string(),
	Password: z.string().min(8),
	RememberMe: z.boolean().optional()
})