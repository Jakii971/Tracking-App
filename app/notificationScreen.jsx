import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";

const Notification = () => {
	return (
		<View className="flex-1 items-center justify-center">
			<View className="items-center justify-center">
				<Image
					source={images.blank}
					resizeMode="contain"
          className="w-[400px] h-[400px]"
				/>
				<Text className="text-lg font-pbold text-black">
					There is no Notification
				</Text>
			</View>
		</View>
	);
};

export default Notification;
