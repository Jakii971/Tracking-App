import {
	View,
	Text,
	Dimensions,
	Image,
	FlatList,
	StyleSheet,
} from "react-native";
import React from "react";
import { images, icons } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

const ListRank = ({ item }) => {
	const { rank, name, username, point } = item;

	return (
		<>
			{name === "Tom" ? (
				<LinearGradient
					className="flex-row w-[90vw] items-center justify-between space-x-4 p-3"
					colors={["#fff6d6", "#FCD12A"]}
					start={{ x: 1, y: 1 }}
					end={{ x: 0, y: 1 }}
				>
					<View className="flex-row items-center gap-2">
						<Text className="text-white font-pbold text-base px-3">{rank}</Text>
						<Image source={images.ppBlank} className="w-[60px] h-[60px] p-5" />
						<View className="px-3">
							<Text className="font-pbold">{name}</Text>
							<Text className="font-preguler">{username}</Text>
						</View>
					</View>
					<Text className="font-pbold">{point} Point</Text>
				</LinearGradient>
			) : (
				<View className="flex-row w-[90vw] items-center justify-between space-x-4 p-3">
					<View className="flex-row items-center gap-2">
						<Text className="font-pbold text-base px-3">{rank}</Text>
						<Image source={images.ppBlank} className="w-[60px] h-[60px] p-5" />
						<View className="px-3">
							<Text className="font-pbold">{name}</Text>
							<Text className="font-preguler">{username}</Text>
						</View>
					</View>
					<Text className="text-primary">{point} Point</Text>
				</View>
			)}
		</>
	);
};

const TabRank = () => {
	const ranks = [
		{ id: 1, rank: "1", name: "Tomi", username: "@lala", point: 2000 },
		{ id: 2, rank: "2", name: "Tom second", username: "@lala", point: 2000 },
		{ id: 3, rank: "3", name: "Tom third", username: "@lala", point: 2000 },
		{ id: 4, rank: "4", name: "Toman", username: "@lala", point: 2000 },
		{ id: 5, rank: "5", name: "Tom", username: "@lala", point: 2000 },
		{ id: 6, rank: "6", name: "Tom Tikus", username: "@lala", point: 2000 },
		{ id: 7, rank: "7", name: "Tom Tikus", username: "@lala", point: 2000 },
		{ id: 8, rank: "8", name: "Tom Tikus", username: "@lala", point: 2000 },
		{ id: 9, rank: "9", name: "Tom Tikus", username: "@lala", point: 2000 },
		{ id: 10, rank: "10", name: "Tom Tikus", username: "@lala", point: 2000 },
	];

	const firstRank = ranks[0];
	const secondRank = ranks[1];
	const thirdRank = ranks[2];

	return (
		<View
			className="bg-white items-center pt-24 pb-14"
			style={{ width: windowWidth }}
		>
			<View className="justify-center items-center p-3">
				<View
					className="w-[90vw] flex-row bg-white justify-between items-center p-3 rounded-3xl"
					style={style.boxShadow}
				>
					<View className="items-center justify-center w-28">
						<Image source={images.ppBlank} className="w-[60px] h-[60px] p-5" />
						<Text className="font-pbold text-sm flex-wrap text-center">
							{secondRank.name}
						</Text>
						<Text className="font-pbold text-xs">{secondRank.point} Point</Text>
						<Text className="font-pmedium text-xs">{secondRank.username}</Text>
					</View>

					<LinearGradient
						className="items-center absolute left-[50%] -translate-x-12 bottom-0 h-56 w-[30vw] rounded-t-full p-3 pt-10"
						colors={["#fff", "#FCD12A"]}
						start={{ x: 0, y: 0.2 }}
						end={{ x: 0, y: 1 }}
						style={style.boxShadow}
					>
						<Image
							source={images.crown}
							className="w-[60px] h-[60px] absolute z-10"
						/>
						<Image source={images.ppBlank} className="w-[60px] h-[60px] p-5" />
						<Text className="font-pbold text-sm flex-wrap text-center">
							{firstRank.name}
						</Text>
						<Text className="font-pbold text-xs">{firstRank.point} Point</Text>
						<Text className="font-pmedium text-xs">{firstRank.username}</Text>
					</LinearGradient>


					<View className="items-center justify-center w-28">
						<Image source={images.ppBlank} className="w-[60px] h-[60px] p-5" />
						<Text className="font-pbold text-sm flex-wrap text-center">
							{thirdRank.name}
						</Text>
						<Text className="font-pbold text-xs">{thirdRank.point} Point</Text>
						<Text className="font-pmedium text-xs">{thirdRank.username}</Text>
					</View>
				</View>
			</View>

			<View
				className="p-2 rounded-3xl bg-white mb-4 pb-5"
				style={style.boxShadow}
			>
				<FlatList
					data={ranks.slice(3)}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <ListRank item={item} />}
				/>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	boxShadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
});

export default TabRank;
