import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'

import DefaultText from './defaulttext-componet'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../store/favoriteSlice'

const CardInfo = ({ item }) => {
	const navigation = useNavigation()

	const dispatch = useDispatch()
	const favorite = useSelector(state => state.favorite.favorites)
	const isFavorite = favorite.find(i => i.id === item.id)

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('EstateDetails', item)}
			className="p-2 rounded-3xl space-y-3 max-w-[200px] bg-gray--3 mb-3"
		>
			<View className="relative ">
				{/* Image */}
				<Image
					source={{ uri: item.imageUrl }}
					className="h-[180px] w-[150px] rounded-3xl opacity-95"
				/>

				{/* Price */}
				<View className="absolute bottom-2 right-3 bg-secondary py-2 px-3 rounded-lg">
					<View className="flex-row items-end">
						<DefaultText className="text-xs text-white font-montserrat font-semibold leading-4 ">
							$ {item.price}
						</DefaultText>
						<DefaultText className="text-[8px] text-white leading-[10px] font-medium">
							/month
						</DefaultText>
					</View>
				</View>

				{/* Favourite button */}
				<TouchableOpacity
					className="absolute top-2 right-2"
					onPress={() =>
						!isFavorite
							? dispatch(addToFavorites(item))
							: dispatch(removeFromFavorites(item.id))
					}
				>
					<Avatar.Icon
						size={30}
						icon={isFavorite ? 'heart' : 'heart-outline'}
						style={{
							backgroundColor: isFavorite
								? '#8BC83F'
								: 'rgba(255, 255, 255, 0.78)',
						}}
						color={isFavorite ? 'white' : '#FD5F4A'}
					/>
				</TouchableOpacity>
			</View>

			{/* item name */}
			<DefaultText className="text-xs  max-w-[130px] font-bold">
				{item.name}
			</DefaultText>

			{/* rating */}
			<View className="flex-row items-start space-x-2">
				<View className="flex-row items-center space-x-1">
					<Ionicons name="star" size={9} color="#FFC42D" />
					<DefaultText className="font-bold leading-[10px] text-[10px] text-[#53587A]">
						{item.rating}
					</DefaultText>
				</View>

				{/* Address */}
				<View>
					<View className="flex-row items-start gap-1">
						<Ionicons name="location" size={9} color="#252B5C" />
						<DefaultText className="font-bold max-w-[100px] leading-[10px] opacity-80 text-[10px]  text-[#53587A]">
							{item.address}
						</DefaultText>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default CardInfo
