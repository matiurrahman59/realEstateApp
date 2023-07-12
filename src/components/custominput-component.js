import { TextInput, View } from 'react-native'
import { Controller } from 'react-hook-form'

import DefaultText from './defaulttext-componet'

const CustomInput = ({
	control,
	name,
	placeHolder,
	secureTextEntry,
	keyboardType,
	rules = {},
	children,
}) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View>
					<TextInput
						value={value}
						placeholder={placeHolder}
						onChangeText={onChange}
						secureTextEntry={secureTextEntry}
						className={`py-3 placeholder:text-xs rounded-xl px-3 placeholder:text-gray--4 flex-grow bg-gray--3 font-lato text-sm leading-4 tracking-wide text-defaultColor border border-gray--3 ${
							error && 'border-red-500'
						} `}
					/>

					{/* Icon as a children */}
					{children}

					{error && (
						<DefaultText className="text-red-500 pt-2">
							{error.message}
						</DefaultText>
					)}
				</View>
			)}
		/>
	)
}

export default CustomInput
