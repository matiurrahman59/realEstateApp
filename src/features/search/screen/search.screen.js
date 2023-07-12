import Ionicons from '@expo/vector-icons/Ionicons'
import { debounce } from 'lodash'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Searchbar } from 'react-native-paper'

import CardInfo from '../../../components/cardinfo-component'
import DefaultText from '../../../components/defaulttext-componet'
import HorizontalCardInfo from '../../../components/horizontalcardinfo-component'
import Icon from '../../../components/icon-component'
import { topLocations } from '../../../constants'
import NotFound from '../components/notfound-component'
import { errIcon } from '../../../constants'

const SearchScreen = ({ navigation }) => {
	const featuredEstateList = useMemo(
		() => topLocations.flatMap(item => item.estates),
		[topLocations],
	)
	const inputRef = useRef()
	const [selectedTab, setSelectedTab] = useState('vertical')
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredItems, setFilteredItems] = useState([])

	//  Setting header right icon
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Icon
					iconName="menu-outline"
					bgColor="#DFDFDF"
					color="#252B5C"
					boxSize={50}
					size={20}
					style="mr-5"
					// onPress={() => console.log('search screen')}
				/>
			),
		})
	}, [navigation])

	// Focus on the first input when the component mounts
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	// function will call sort duration on time
	const debouncedSearch = debounce(query => {
		if (query === '') {
			setFilteredItems([])
		} else {
			const filtered = featuredEstateList.filter(item =>
				item.name.toLowerCase().includes(query.toLowerCase()),
			)
			setFilteredItems(filtered)
		}
	}, 300)

	// handler for every key stroke on textInput
	const handleSearchInputChange = query => {
		setSearchQuery(query)
		debouncedSearch(query)
	}

	// dandler for change item view style
	const handleTabPress = index => {
		setSelectedTab(index)
	}

	return (
		<View className="flex-1 bg-white px-5 pt-5">
			{/* Search text input */}
			<Searchbar
				ref={inputRef}
				autoFocus
				placeholder="Search"
				value={searchQuery}
				onChangeText={handleSearchInputChange}
				iconColor="#252B5C"
				className="bg-gray--3 text-red-500 placeholder:text-red-500"
				style={{
					borderRadius: 20,
				}}
			/>

			<View className="flex-row justify-between items-center py-5">
				{/* search result quantity */}
				<DefaultText className="font-medium font-lato leading-[22px] text-lg">
					{filteredItems.length === 0
						? 'Found 0 estates'
						: `Found ${filteredItems.length || 0} estates`}
				</DefaultText>

				{/* selected tabbed icon */}
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

			{/* Estate list */}
			{filteredItems.length ? (
				<>
					<ScrollView showsVerticalScrollIndicator={false}>
						{selectedTab === 'vertical' ? (
							<View className="pb-5 flex-row justify-between flex-wrap">
								{filteredItems?.map(item => (
									<CardInfo item={item} key={item.id} />
								))}
							</View>
						) : (
							<View className="pb-5 items-center">
								{filteredItems?.map(item => (
									<View key={item.id} className="mb-3">
										<HorizontalCardInfo item={item} style="w-full" />
									</View>
								))}
							</View>
						)}
					</ScrollView>
				</>
			) : (
				<NotFound>
					<View className="items-center">
						<TouchableOpacity>
							<Image source={errIcon} width={142} height={142} />
						</TouchableOpacity>
						<View className="flex-row justify-center pt-3 pb-5 space-x-1 items-center">
							<DefaultText className="font-lato text-2xl leading-40 font-medium">
								Search
							</DefaultText>
							<DefaultText className="font-lato text-2xl leading-40 font-extrabold text-secondary">
								not found
							</DefaultText>
						</View>
						<DefaultText
							line={true}
							className="max-w-[297px] text-xs text-bodyText"
						>
							Sorry, we can't find the real estates you are looking for. Maybe,
							a little spelling mistake?
						</DefaultText>
					</View>
				</NotFound>
			)}
		</View>
	)
}

export default SearchScreen
