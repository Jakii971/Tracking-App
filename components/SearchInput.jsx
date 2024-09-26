import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const SearchInput = ({ placeholder, handlePress }) => {
	return (
		<TouchableOpacity className="w-full h-14 border border-input bg-input rounded-lg items-center flex-row p-1" onPress={handlePress} activeOpacity={0.9} nextFocusDown={3}>
			<TextInput
				placeholder={placeholder}
				editable={false}
				className="px-4 flex-1 text-base font-pregular"
			/>
			<TouchableOpacity
				className="w-12 h-full items-center justify-center bg-secondary rounded-md"
				onPress={handlePress}
			>
				<Image source={icons.search} className="w-7 h-7" resizeMode="contain" />
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default SearchInput;
