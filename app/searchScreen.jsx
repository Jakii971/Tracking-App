import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useRef } from "react";
import { SearchInput, ListFriend } from "../components";

const SearchScreen = () => {
	const friendsData = [
		{ name: "Alice", username: "alice123" },
		{ name: "Bob", username: "bob456" },
		{ name: "Charlie", username: "charlie789" },
	];

	const searchInputRef = useRef(null);

	useEffect(() => {
		if (searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="px-5 space-y-6">
				<SearchInput
					ref={searchInputRef}
					otherStyles={"bg-input border-input mt-6"}
					editable={true}
					placeholder={"Search"}
				/>
				<View>
					{friendsData.map((friend, index) => (
						<ListFriend
							key={index}
							name={friend.name}
							username={friend.username}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SearchScreen;
