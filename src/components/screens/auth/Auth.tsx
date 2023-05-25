import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import { IEmailPassword } from '../../../store/user/user.interface'
import Button from '../../ui/button/Button'
import Heading from '../../ui/heading/Heading'
import Field from '../../ui/input/Field'
import Loader from '../../ui/loader/Loader'
import Meta from '../../ui/meta/Meta'

import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register } = useActions()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading className='capitalize text-center mb-4'>{type}</Heading>
					{isLoading ? <Loader /> : <></>}
					<Field
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please, enter the correct email address'
							}
						})}
						placeholder='Email'
						error={errors.email?.message}
					/>

					<Field
						{...formRegister('password', {
							required: 'password is required',
							minLength: {
								value: 6,
								message: 'Minimal length should more 5 symbols'
							}
						})}
						type='password'
						placeholder='password'
						error={errors.password?.message}
					/>
					<Button type='submit' variant='orange'>
						Go!
					</Button>
					<div>
						<button
							type='button'
							className='inline-block opacity-20 mt-3 text-sm'
							onClick={() => setType(type === 'login' ? 'register' : 'login')}
						>
							{type === 'login' ? 'Register' : 'Login'}
						</button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
