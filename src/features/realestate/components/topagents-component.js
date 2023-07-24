import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import DefaultText from '../../../components/defaulttext-componet'
import { useNavigation } from '@react-navigation/native'

const TopAgents = ({ topAgents }) => {
	const navigation = useNavigation()
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}
			data={topAgents}
			renderItem={({ item, index }) => {
				return (
					<TouchableOpacity
						className="mr-3"
						onPress={() =>
							navigation.navigate('AgentProfile', {
								item,
								rankNum: index + 1,
							})
						}
					>
						<View className="justify-center items-center">
							<View className="border-4 border-gray--3 rounded-full">
								<Avatar.Image size={70} source={{ uri: item.imageUrl }} />
							</View>
						</View>
						<DefaultText className="font-medium text-center text-xs mt-2">
							{item.name}
						</DefaultText>
					</TouchableOpacity>
				)
			}}
			keyExtractor={item => item.id}
		/>
	)
}

export default TopAgents
