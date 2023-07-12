import { TextInput } from 'react-native'

// const Input = ({ onFocus, onBlur, placeholder, isFocused }) => {
const Input = ({ focusedInput, id, error, isFocused, ...restProps }) => {
	return (
		<TextInput
			{...restProps}
			className={`py-3 placeholder:text-xs rounded-xl px-3 placeholder:text-gray--4 flex-grow bg-gray--3 font-lato text-sm leading-4 tracking-wide text-defaultColor border-gray--3 ${
				error && 'border border-red-500'
			}`}
		/>
	)
}

export default Input
