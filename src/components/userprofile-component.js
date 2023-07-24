import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import DefaultText from './defaulttext-componet'
import { useDispatch, useSelector } from 'react-redux'
import {
	PermissionStatus,
	launchCameraAsync,
	useCameraPermissions,
} from 'expo-image-picker'

import { setUserData } from '../store/userSlice'

const UserProfile = ({ reverse, badge, topRank }) => {
	const currUser = useSelector(state => state.user.user)
	const { fullName: name, email, imageUrl } = currUser
	const dispatch = useDispatch()

	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions()

	const verifyPermissions = async () => {
		if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission()

			return permissionResponse.granted
		}

		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permissions!',
				'You need to grant camera access to use this app',
			)
			return false
		}

		return true
	}

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions()

		if (!hasPermission) {
			return
		}

		let image = await launchCameraAsync({
			allowsEditing: true,
			quality: 0.5,
		})

		if (image.assets) {
			dispatch(setUserData({ ...currUser, imageUrl: image.assets[0].uri }))
		}
	}

	return (
		<View
			className={`pt-5 items-center ${
				reverse ? 'flex-col-reverse' : 'space-y-3'
			}`}
		>
			<TouchableOpacity
				className={`relative ${reverse && 'pt-2'}`}
				onPress={takeImageHandler}
			>
				{/* {remoteUrl ? (
					<Avatar.Image size={100} source={{ uri: user.imageUrl }} />
				) : (
					<Avatar.Icon
						size={100}
						icon="account"
						style={{ backgroundColor: '#cccccc' }}
					/>
				)} */}
				{/* <Avatar.Image size={100} source={user.imageUrl} /> */}
				{imageUrl ? (
					<Avatar.Image size={100} source={{ uri: imageUrl }} />
				) : (
					<Avatar.Icon
						size={100}
						icon="account"
						style={{ backgroundColor: '#cccccc' }}
					/>
				)}

				{/* </TouchableOpacity> */}

				{badge && (
					<Avatar.Icon
						size={32}
						icon="pencil-outline"
						className="absolute right-0 bottom-0 bg-secondary"
					/>
				)}

				{topRank && (
					<View className="absolute right-0 bottom-0 bg-primary rounded-lg">
						<View className="flex-row py-[5px] px-2 items-baseline">
							<Text className="text-white font-montserrat font-semibold text-[10px] items-baseline">
								&#35;
							</Text>
							<Text className="text-white font-montserrat font-semibold tracking-wide text-sm">
								{topRank}
							</Text>
						</View>
					</View>
				)}
			</TouchableOpacity>
			<View className="items-center space-y-1">
				<DefaultText className="text-[14px] font-bold leading-4 font-lato">
					{name}
				</DefaultText>
				<DefaultText className="text-xs text-bodyText leading-3 font-semibold font-lato">
					{email}
				</DefaultText>
			</View>
		</View>
	)
}

export default UserProfile
