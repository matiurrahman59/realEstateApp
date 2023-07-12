import { Pressable, View } from 'react-native'

const TouchableButton = ({
	contentContainerStyle,
	onPress,
	disabled,
	children,
	isLoading,
}) => {
	return (
		<Pressable
			className={`bg-primary rounded-lg items-center justify-center w-[80vw] h-[60px] ${contentContainerStyle} ${
				isLoading && 'bg-primary/80'
			}`}
			disabled={disabled}
			onPress={onPress}
			android_ripple={{ color: '#6fa032' }}
			style={({ pressed }) =>
				pressed && {
					backgroundColor: '#6fa032',
				}
			}
		>
			<View className="items-center justify-center flex-row">{children}</View>
		</Pressable>
	)
}

export default TouchableButton
