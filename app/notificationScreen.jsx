import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import { ListNotification } from "../components";

const Notification = () => {
	const notifications = [
		{ title: "Halo", message: "John started following you John started following you" },
		{ title: "Hai", message: "John started following you John started following you" },
		{ title: "Hello", message: "John started following you John started following you" },
		{ title: "Haaa", message: "John started following you John started following you" },
	];

	return (
		<SafeAreaView className="flex-1 bg-white">
			{notifications.length > 0 ? (
				<ScrollView className="px-5 space-y-6">
					{notifications.map((notif, index) => (
						<ListNotification
							key={index}
							title={notif.title}
							message={notif.message}
						/>
					))}
				</ScrollView>
			) : (
				<View className="flex-1 items-center justify-center">
					<Image
						source={images.blank}
						resizeMode="contain"
						className="w-[400px] h-[400px]"
					/>
					<Text className="text-lg font-pbold text-black">
						There is no Notification
					</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Notification;
