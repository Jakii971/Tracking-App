import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	RefreshControl,
} from "react-native";
import React from "react";
import { icons, images } from "../../constants";
import { SearchInput, CorouselImages, MyLineChart } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const Home = () => {
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 5000);
	}, []);

	const pinterest = [
		"https://i.pinimg.com/564x/b0/01/bd/b001bd62485e326a3d5a9b299dd803c4.jpg",
		"https://i.pinimg.com/564x/28/c1/df/28c1df0b7ee4d2cf5142369a0c1e0f64.jpg",
		"https://i.pinimg.com/564x/46/c3/60/46c3603f35aa1dbe7624037d35d427e3.jpg",
	];

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView
				className="mt-6 px-5 space-y-6"
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={["#D2FF72", "#73EC8B", "#347928"]}
						progressBackgroundColor="white"
					/>
				}
			>
				<View className="justify-between items-start flex-row mb-6">
					<View>
						<Text className="text-2xl font-pbold text-black">Hi Tom</Text>
						<Text className="text-sm font-psemibold text-slate-400">
							Welcome to Tracking App
						</Text>
					</View>

					<TouchableOpacity
						className="mt-1.5"
						onPress={() => {
							router.push("/notificationScreen");
						}}
					>
						<Image
							source={icons.notification}
							className="w-9 h-10"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				</View>
				<SearchInput
					placeholder={"Search"}
					handlePress={() => {
						router.push("/searchScreen");
					}}
					otherStyles={"bg-input border-input"}
					editable={false}
				/>
				<CorouselImages images={pinterest} />

				<View className="rounded-lg bg-[#efefef]">
					<MyLineChart />
				</View>

				<View className="w-full flex-row justify-end items-center relative h-72 my-5">
					<Image
						source={images.walkRecap}
						resizeMode="contain"
						className="z-10 h-full w-full absolute right-14"
					/>
					<View className="bg-[#ff735c] shadow-xl shadow-[#ff735c] -500/50 w-1/3 h-[90%] rounded-xl p-3">
						<Text className="text-white font-psemibold text-3xl">
							{`Your \n`}
							<Text>Recap</Text>
						</Text>
						<Text className="font-psemibold pb-5">This month:</Text>
						<View className="space-y-3">
							<Text className="text-white font-psemibold text-4xl pt-4">
								25
								<Text className="text-black font-psemibold text-xl">KM</Text>
							</Text>
							<Text className="text-white font-psemibold text-4xl pt-4">
								5
								<Text className="text-black font-psemibold text-xl">hours</Text>
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<StatusBar style="dark" />
		</SafeAreaView>
	);
};

export default Home;
