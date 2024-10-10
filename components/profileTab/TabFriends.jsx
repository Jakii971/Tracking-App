import { View, Text, FlatList } from "react-native";
import React from "react";
import {ListFriend} from "../../components";

const TabFriends = () => {
	const renderItem = () => {
		return (
			<View className="w-[100vw] px-3 bg-white">
				<ListFriend />
			</View>
		);
	};
	
	return (
		<View className="">
			<FlatList
				renderItem={renderItem}
				data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
				scrollEnabled={false}
			/>
		</View>
	);};

export default TabFriends;
