import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'

import TouchableButton from '../../../components/button-component'
import DefaultText from '../../../components/defaulttext-componet'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../../../store/userSlice'
import ButtonText from '../../../components/buttonText-component'

const userIMage = require('../../../assets/images/user-2.png')
const googleIcon = require('../../../assets/images/Login/Google.png')
const facebookIcon = require('../../../assets/images/Login/Facebook.png')

const SettingScreen = ({ route }) => {
	const { fullName, email, imageUrl, phone } = route.params
	const dispatch = useDispatch()

	const inputClassName =
		'flex-row justify-between items-center bg-gray--3 py-5 px-4 rounded-[20px]'

	return (
		<View className="flex-1 bg-white px-5 relative">
			<View className="absolute bottom-5 left-0 right-0 items-center">
				<TouchableButton onPress={() => dispatch(logOutUser())}>
					<ButtonText type="primary">Logout</ButtonText>
				</TouchableButton>
			</View>

			{/* User Image */}
			<View className="py-5 items-center">
				{/* <Avatar.Image size={100} source={userIMage} /> */}
				<Avatar.Icon
					size={100}
					icon="account"
					style={{ backgroundColor: '#cccccc' }}
				/>
			</View>

			{/* User details */}
			<View className="space-y-3">
				{/* Name */}
				<View className={inputClassName}>
					<DefaultText className="font-lato">{fullName}</DefaultText>
					<Ionicons name="person-outline" size={20} color="#252B5C" />
				</View>

				{/* Phone */}
				<View className={inputClassName}>
					<DefaultText className="font-lato">{+8801768835559}</DefaultText>
					<Ionicons name="call-outline" size={20} color="#252B5C" />
				</View>

				{/* Eemail */}
				<View className={inputClassName}>
					<DefaultText className="font-lato">{email}</DefaultText>
					<Ionicons name="mail-outline" size={20} color="#252B5C" />
				</View>

				{/* Social media link */}
				<View className="flex-row justify-between space-x-3">
					<TouchableOpacity className="bg-secondary flex-grow p-4 flex-row items-center justify-center rounded-3xl space-x-3">
						<Image
							source={googleIcon}
							className="h-[25px] w-[25px] rounded-full"
						/>
						<DefaultText className="font-lato font-semibold text-sm text-white leading-[14px]">
							UnLink
						</DefaultText>
					</TouchableOpacity>

					<TouchableOpacity className="bg-gray--3 p-4 flex-grow flex-row items-center justify-center rounded-3xl space-x-3">
						<Image
							source={facebookIcon}
							className="h-[25px] w-[25px] rounded-full"
						/>
						<DefaultText className="font-lato font-semibold text-sm leading-[14px]">
							Link
						</DefaultText>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default SettingScreen
