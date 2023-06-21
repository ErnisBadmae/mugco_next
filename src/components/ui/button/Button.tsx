import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
	size?: 'sma' | 'md' | 'lg'
}
const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'btn',
				{
					'btn-white': variant === 'orange',
					'btn-orange': variant === 'white',
					'px-5 py-1 text-sm': size === 'sma',
					'btn-large': size === 'lg'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
