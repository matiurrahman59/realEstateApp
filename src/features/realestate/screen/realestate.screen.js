import Ionicons from '@expo/vector-icons/Ionicons'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge } from 'react-native-paper'
import { useSelector } from 'react-redux'

// internal imports
import {
	DEVICE,
	categoryList,
	topAgents as agentList,
	topLocations,
} from '../../../constants'
import BottomModal from '../../../components/bottommodal-component'
import DefaultText from '../../../components/defaulttext-componet'
import SectionHeader from '../../../components/seactionheader-component'
import BottomSheetContent from '../components/bottomsheetcontent'
import CategoryList from '../components/categorylist-component'
import FeaturedEstates from '../components/featureditem-component'
import Location from '../components/location-component'
import NearbyEstates from '../components/nearbyestates-component'
import TopAgents from '../components/topagents-component'
import TopLocations from '../components/toplocations-component'

const sortedAgentList = agentList.sort((a, b) => {
	// Compare by rating first
	if (a.rating > b.rating) {
		return -1
	} else if (a.rating < b.rating) {
		return 1
	}

	// If rating is the same, compare by sold quantity
	if (a.sold > b.sold) {
		return -1
	} else if (a.sold < b.sold) {
		return 1
	}
	return 0
})

const RealEstateScreen = ({ navigation }) => {
	const { imageUrl } = useSelector(state => state.user.user)
	const featuredEstateList = useMemo(
		() => topLocations.flatMap(item => item.estates),
		[topLocations],
	)
	const bottomSheetModalRef = useRef(null)

	// callbacks
	const handlePresentModalPress = useCallback(() => {
		bottomSheetModalRef.current?.present()
	}, [])

	return (
		<BottomSheetModalProvider>
			<ScrollView className="flex-1 bg-white relative">
				<BottomModal
					bottomSheetModalRef={bottomSheetModalRef}
					content={<BottomSheetContent />}
				/>
				<View className="absolute h-96 w-96 rounded-full bg-secondary/20 -top-28 -left-28 z-10" />
				<View
					className="z-20"
					style={{
						paddingTop: DEVICE.statusBar,
					}}
				>
					<View className="px-5 pt-2">
						{/* Top header */}
						<View className="h-[50px]">
							<View className="flex-row items-center justify-between">
								<Location onPress={handlePresentModalPress} />
								<View className="flex-row space-x-2">
									<TouchableOpacity
										onPress={() => navigation.navigate('Notification')}
										className="w-[50px] h-[50px] flex items-center justify-center rounded-full border-primary border-2 bg-white"
									>
										<View className="relative">
											<Ionicons
												name="notifications-outline"
												size={20}
												color="#252B5C"
											/>
											<View className="h-3 w-3 bg-white absolute -top-1 -right-1 flex justify-center items-center">
												<Badge size={6} />
											</View>
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => navigation.navigate('User')}
										className="w-[50px] border-gray--1 border-2 rounded-full flex items-center justify-center"
									>
										{imageUrl ? (
											<Avatar.Image size={44} source={{ uri: imageUrl }} />
										) : (
											<Avatar.Icon
												size={44}
												icon="account"
												style={{ backgroundColor: '#cccccc' }}
											/>
										)}
									</TouchableOpacity>
								</View>
							</View>
						</View>

						{/* Heading text */}
						<View className="mt-[35px] mb-5">
							<View className="flex-row items-center space-x-1">
								<DefaultText className="text-2xl font-lato leading-10 font-medium">
									Hey,
								</DefaultText>
								<DefaultText className="text-2xl leading-10 font-lato font-extrabold text-secondary">
									Jonathan!
								</DefaultText>
							</View>
							<DefaultText className="text-2xl font-lato leading-10 font-medium">
								Let's start exploring
							</DefaultText>
						</View>

						{/* Search Bar */}
						<TouchableOpacity
							onPress={() => navigation.navigate('Search')}
							className="px-4 py-6 bg-gray--3 rounded-xl flex-row items-center space-x-3"
						>
							<Ionicons name="search" size={20} color="#252B5C" />
							<DefaultText className="font-raleway flex-grow text-gray--4">
								Search House, Apartment, etc
							</DefaultText>
							<View className="border-l-2 border-gray--4 px-4">
								<Ionicons name="mic-outline" size={20} color="#A1A5C1" />
							</View>
						</TouchableOpacity>
					</View>

					<CategoryList category={categoryList} />

					{/* Featured Estates */}
					<View className="pt-9">
						<SectionHeader
							leftTitle="Featured Estates"
							rightTitle="view all"
							containerStyle="pl-5"
							onPress={() => navigation.navigate('FeatureList')}
						/>
						<FeaturedEstates featuredList={featuredEstateList} />
					</View>

					{/* Top locations */}
					<View className="pt-9">
						<SectionHeader
							leftTitle="Top Locations"
							rightTitle="explore"
							containerStyle="pl-5"
							onPress={() => navigation.navigate('TopLocation')}
						/>
						<TopLocations topLocations={topLocations} />
					</View>

					{/* Top agents */}
					<View className="pt-9">
						<SectionHeader
							leftTitle="Top Estate Agent"
							rightTitle="explore"
							containerStyle="pl-5"
							onPress={() => navigation.navigate('TopAgent')}
						/>
						<TopAgents topAgents={sortedAgentList} />
					</View>

					{/* Nearby estates */}
					<View className="px-5 pt-9">
						<View>
							<SectionHeader leftTitle="Explore Nearby" />
							<NearbyEstates featuredList={featuredEstateList} />
						</View>
					</View>
				</View>
			</ScrollView>
		</BottomSheetModalProvider>
	)
}

export default RealEstateScreen
