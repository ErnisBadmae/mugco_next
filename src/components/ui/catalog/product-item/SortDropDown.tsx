import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { EnumProductSort } from '../../../../types/product.interface'

interface SortDropDownProps {
	sortType: EnumProductSort
	setSortype: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropDown: FC<SortDropDownProps> = ({ sortType, setSortype }) => {
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortype(e.target.value as EnumProductSort)
	}

	return (
		<div>
			<select
				className='appearance-none  py-1 px-2 bg-white'
				value={sortType}
				onChange={handleChange}
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option key={EnumProductSort[key]} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropDown
