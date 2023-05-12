import { FC } from 'react'

import Button from '../../ui/button/Button'
import Meta from '../../ui/meta/Meta'

const Auth: FC = () => {
	console.log('test')
	return (
		<Meta title='Auth'>
			<Button variant='orange'>Auth</Button>
		</Meta>
	)
}

export default Auth
