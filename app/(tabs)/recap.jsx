import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
	{
		id: 1,
		title: "Walk",
		image: require("../../assets/images/walk.png"),
		distance: 25,
		duration: 3,
	},
	{
		id: 2,
		title: "Run",
		image: require("../../assets/images/run.png"),
		distance: 25,
		duration: 3,
	},
	{
		id: 3,
		title: "Bicycle",
		image: require("../../assets/images/bicycle.png"),
		distance: 25,
		duration: 3,
	},
];

const Recap = () => {
	const renderItem = ({ item }) => {
		return (
			<SafeAreaView className="flex-1 items-center justify-center px-5">
				<Text className="text-3xl font-pbold">{item.title}</Text>
				<Image
					source={item.image}
					className="w-[350px] h-[350px]"
					resizeMode="contain"
				/>
				<View className="w-full space-y-3">
					<View className="bg-primary p-5 rounded-lg">
						<Text className="text-lg font-pbold self-start">Distance</Text>
						<Text className="text-5xl font-pbold text-white self-end pt-2">
							{item.distance} <Text className="text-black">KM</Text>
						</Text>
					</View>
					<View className="bg-primary p-5 rounded-lg">
						<Text className="text-lg font-pbold self-start">Distance</Text>
						<Text className="text-5xl font-pbold text-white self-end pt-2">
							{item.distance} <Text className="text-black">H</Text>
						</Text>
					</View>
				</View>
			</SafeAreaView>
		);
	};

	return (
		<AppIntroSlider
			data={slides}
			renderItem={renderItem}
			activeDotStyle={{ backgroundColor: "#FBBA18", width:30 }}
			showNextButton={false}
			showDoneButton={false}
		/>
	);
};

export default Recap;
