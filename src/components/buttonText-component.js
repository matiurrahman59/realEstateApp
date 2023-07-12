import { Text } from 'react-native'
import React from 'react'

const ButtonText = ({ type, children }) => {
	const baseClassName =
		'text-white font-lato text-base font-bold tracking-[0.48px]'

	const styles = {
		primary: baseClassName + '',
		small:
			'font-montserrat text-black text-xs leading-[22px] tracking-[0.36px]',
	}

	return <Text className={styles[type]}>{children}</Text>
}

export default ButtonText
