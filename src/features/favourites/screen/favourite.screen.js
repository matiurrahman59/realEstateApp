import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, Image, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import CardInfo from '../../../components/cardinfo-component'
import DefaultText from '../../../components/defaulttext-componet'
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component'
import Icon from '../../../components/icon-component'
import ScrollViewWrapper from '../../../components/scrollview-component'
import { DEVICE, plusIcon } from '../../../constants'
import NotFound from '../../search/components/notfound-component'

import {
	getFavorites,
	removeAllFromFavorites,
} from '../../../store/favoriteSlice'

const FavouriteScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const favorite = useSelector(state => state.favorite.favorites)
	const [selectedTab, setSelectedTab] = useState('vertical')

	const handleTabPress = index => {
		setSelectedTab(index)
	}

	const handleDeleteAll = () => {
		if (favorite.length === 0) {
			Alert.alert('No Favorites', 'You have no favorites to delete.')
		} else {
			Alert.alert(
				'Delete all',
				'Are you sure you want to delete all of your favorites?',
				[
					{
						text: 'Cancel',
						onPress: () => {},
						style: 'cancel',
					},
					{ text: 'OK', onPress: () => dispatch(removeAllFromFavorites()) },
				],
			)
		}
	}

	return (
		<View style={{ paddingTop: DEVICE.statusBar }} className="flex-1 bg-white">
			{/* Header top */}
			<View className="justify-center items-center relative h-[50px]">
				<DefaultText className="font-lato font-bold text-lg">
					My favorite
				</DefaultText>
				<View className="absolute right-0">
					<Icon
						onPress={handleDeleteAll}
						iconName="trash-outline"
						bgColor="#DFDFDF"
						color="#252B5C"
						boxSize={50}
						size={20}
						style="mr-5"
					/>
				</View>
			</View>

			<ScrollViewWrapper style="pt-5">
				<View className="flex-row justify-between items-center">
					<DefaultText className="font-medium font-lato leading-[22px] text-lg">
						{`${favorite.length} estates`}
					</DefaultText>
					<View className="flex-row items-center justify-between bg-gray--3 rounded-full p-2">
						<TouchableOpacity
							onPress={() => handleTabPress('vertical')}
							className={`py-[6px]  px-3 ${
								selectedTab === 'vertical'
									? 'bg-white rounded-full'
									: 'text-gray--4'
							}`}
						>
							<Ionicons
								name="grid"
								size={12}
								color={selectedTab === 'vertical' ? '#252B5C' : '#A1A5C1'}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => handleTabPress('horizontal')}
							className={`py-[6px]  px-3 ${
								selectedTab === 'horizontal'
									? 'bg-white rounded-full'
									: 'text-gray--4'
							}`}
						>
							<Ionicons
								name="menu"
								size={16}
								color={selectedTab === 'horizontal' ? '#252B5C' : '#A1A5C1'}
							/>
						</TouchableOpacity>
					</View>
				</View>

				{selectedTab === 'vertical' ? (
					<View className="py-4 pb-10 flex-row justify-between flex-wrap">
						{favorite?.map(item => (
							<CardInfo item={item} key={item.id} />
						))}
					</View>
				) : (
					<View className="pt-4 pb-12 space-y-3">
						{favorite?.map(item => (
							<View key={item.id}>
								<HorizontalCardInfo item={item} />
							</View>
						))}
					</View>
				)}

				{!favorite.length && (
					<NotFound>
						<View className="items-center">
							<TouchableOpacity>
								<Image source={plusIcon} width={142} height={142} />
							</TouchableOpacity>
							<View className="justify-center pt-3 pb-5 space-x-1 items-center">
								<DefaultText className="font-lato text-2xl leading-40 font-medium">
									Your favorite page is
								</DefaultText>
								<DefaultText className="font-lato text-2xl leading-40 font-extrabold text-secondary">
									empty
								</DefaultText>
							</View>
							<DefaultText
								line={true}
								className="max-w-[297px] text-xs text-bodyText text-center"
							>
								Click add button above to start exploring and choose your
								favorite estates.
							</DefaultText>
						</View>
					</NotFound>
				)}
			</ScrollViewWrapper>
		</View>
	)
}

export default FavouriteScreen
