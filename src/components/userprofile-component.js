import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import DefaultText from './defaulttext-componet'
import { useSelector } from 'react-redux'

const UserProfile = ({ user, reverse, badge, topRank, remoteUrl }) => {
	const authUser = useSelector(state => state.user.user)
	const { fullName: name, email } = authUser

	return (
		<View
			className={`pt-5 items-center ${
				reverse ? 'flex-col-reverse' : 'space-y-3'
			}`}
		>
			<View className={`relative ${reverse && 'pt-2'}`}>
				{/* {remoteUrl ? (
					<Avatar.Image size={100} source={{ uri: user.imageUrl }} />
				) : (
					<Avatar.Image size={100} source={user.imageUrl} />
				)} */}
				<Avatar.Icon
					size={100}
					icon="account"
					style={{ backgroundColor: '#cccccc' }}
				/>

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
			</View>
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
