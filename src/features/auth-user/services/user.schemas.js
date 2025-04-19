import { schemaBuilder } from '@/lib/schemaBuilder';

export const loginSchema = schemaBuilder(t => ({
	UsernameOrEmail: t.string(),
	Password: t.string().min(8),
	RememberMe: t.boolean().optional()
}))


export const onLoginSuccessSchema = schemaBuilder(z => ({
	accessToken: z.string(),
	user: z.object({
		id: z.string(),
		username: z.string(),
		email: z.string(),
		name: z.string(),
		surname: z.string(),
		profilePicture: z.string().nullable()
	})
}));



export const registerSchema = schemaBuilder(t => ({
	Name: t.string().min(3),
	Surname: t.string().min(3),
	Username: t.string().min(3),
	Email: t?.string(),
	Password: t.string()
		.min(8, { message: 'passwordMin' })
		.regex(/[A-Z]/, 'passwordUppercase')
		.regex(/[0-9]/, 'passwordNumber'),
	ConfirmPassword: t.string()
		
}))
