import { View, Text, Image, TouchableOpacity } from "react-native";
import { images } from "../constants";
import React from "react";

const ListFriend = ({ name, username }) => {
	return (
		<View className="flex-1 justify-between items-center flex-row p-2 border-b-[1px] border-slate-200">
			<View className="flex-row items-center gap-4">
				<Image source={images.ppBlank} className="w-[50px] h-[50px] px-5" />
				<Text>
					{`${name || "John Doe"}\n`}
					<Text>@{username || "johndoe"}</Text>
				</Text>
			</View>
			<View>
				<TouchableOpacity className="border-2 border-primary rounded-lg px-3 py-1">
					<Text className="text-primary">Follow</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ListFriend;
