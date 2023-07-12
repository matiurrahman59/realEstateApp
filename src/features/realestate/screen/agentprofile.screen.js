import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useLayoutEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import TouchableButton from '../../../components/button-component'
import CardInfo from '../../../components/cardinfo-component'
import DefaultText from '../../../components/defaulttext-componet'
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component'
import Icon from '../../../components/icon-component'
import InformationBox from '../../../components/informationbox-component'
import RatingStars from '../../../components/ratingstar-component'
import ScrollViewWrapper from '../../../components/scrollview-component'
import UserProfile from '../../../components/userprofile-component'
import { topLocations } from '../../../constants'
import CustomTab from '../../profile/components/customtab-component'
import ButtonText from '../../../components/buttonText-component'

const AgentProfile = ({ navigation, route }) => {
	const { user, rankNum } = route.params
	const [selectedTabNum, setSelectedTabNum] = useState(0)
	const [selectedTab, setSelectedTab] = useState('vertical')
	const [isButtonVisible, setIsButtonVisible] = useState(true)

	const [listData, setListData] = useState(function () {
		return topLocations.flatMap(item => item.estates)
	})

	const onScroll = event => {
		const currentOffset = event.nativeEvent.contentOffset.y

		if (currentOffset > 0) {
			setIsButtonVisible(false)
		} else {
			setIsButtonVisible(true)
		}
	}

	const viewCardInfoHandler = index => {
		setSelectedTab(index)
	}

	// Setting headerRight
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Icon
					iconName="cloud-upload-outline"
					bgColor="#DFDFDF"
					color="#252B5C"
					boxSize={50}
					size={20}
					style="mr-5"
				/>
			),
		})
	}, [navigation])

	const handleTabSelect = index => {
		setSelectedTabNum(index)
	}

	return (
		<View className="flex-1">
			{/* Start chat button */}
			{isButtonVisible && (
				<View className="w-full bg-white py-5 items-center absolute z-50 bottom-0">
					<TouchableButton>
						<ButtonText type="primary">Start Chat</ButtonText>
					</TouchableButton>
				</View>
			)}

			<ScrollViewWrapper onScroll={onScroll}>
				{/* User profile */}
				<UserProfile
					user={user}
					reverse={true}
					topRank={rankNum}
					remoteUrl={true}
				/>

				{/* User activity details */}
				<View
					className="flex-row justify-between items-center pt-5"
					style={{ gap: 10 }}
				>
					<InformationBox
						icon=<RatingStars rating={user.rating} />
						value={user.rating}
						// active={true}
					/>
					<InformationBox title="Reviews" value={user.review} />
					<InformationBox title="Sold" value={user.sold} />
				</View>

				{/* Tab component */}
				<View className="pt-5 space-y-5 pb-6">
					<CustomTab
						titles={['Listings', 'Sold']}
						onSelectTab={handleTabSelect}
					/>
					{selectedTabNum === 0 && (
						<View>
							{/* Section header */}
							<View className="flex-row justify-between items-center">
								{/* Left content */}
								<DefaultText className="font-medium font-lato leading-[22px] text-lg">
									{`${listData.length} listings`}
								</DefaultText>
								{/* Right content */}
								<View className="flex-row items-center justify-between bg-gray--3 rounded-full p-2">
									<TouchableOpacity
										onPress={() => viewCardInfoHandler('vertical')}
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
										onPress={() => viewCardInfoHandler('horizontal')}
										className={`py-[6px]  px-3 ${
											selectedTab === 'horizontal'
												? 'bg-white rounded-full'
												: 'text-gray--4'
										}`}
									>
										<Ionicons
											name="menu"
											size={16}
											color={
												selectedTab === 'horizontal' ? '#252B5C' : '#A1A5C1'
											}
										/>
									</TouchableOpacity>
								</View>
							</View>

							{selectedTab === 'vertical' ? (
								<View className="pt-4 flex-row justify-between flex-wrap">
									{listData?.map(item => (
										<CardInfo item={item} key={item.id} />
									))}
								</View>
							) : (
								<View className="pt-4 space-y-3">
									{listData?.map(item => (
										<View key={item.id}>
											<HorizontalCardInfo item={item} />
										</View>
									))}
								</View>
							)}
						</View>
					)}

					{selectedTabNum === 1 && (
						<Text className="text-center opacity-50 pt-10">
							No content found!
						</Text>
					)}
				</View>
			</ScrollViewWrapper>
		</View>
	)
}

export default AgentProfile
