import { Text } from 'react-native'

const DefaultText = ({ children, className, line, ...rest }) => {
	const defaultStyles = 'font-raleway tracking-wide text-defaultColor text-xs'
	const mergedStyles = `${defaultStyles} ${className}`

	return (
		<Text className={mergedStyles} {...rest} numberOfLines={line ? 2 : 1}>
			{children}
		</Text>
	)
}

export default DefaultText
