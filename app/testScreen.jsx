import {
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from "react-native";
import React from "react";
import { icons, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

const aspectRatio = 780 / 597;
const height = windowWidth / aspectRatio;

const testScreen = () => {
	return (
		<SafeAreaView className="flex-1 bg-primary">
			<Image
				source={images.texture}
				resizeMode="contain"
				className="absolute"
				style={{ width: "100%", height }}
			/>
			<ScrollView>
				<View className="bg-white rounded-t-[60px] mt-32 mb-16">
					<View className="p-2 items-center -top-16">
						<Image
							source={images.ppBlank}
							resizeMode="contain"
							className="w-28 h-28"
						/>
						<Text className="text-2xl font-pbold mt-3">Tom</Text>
						<View className="rounded-full bg-slate-100 h-1 w-[90%] self-center mt-8" />
						<View className="w-[100vw] items-center bg-white">
							<View className="w-[85vw] m-6 h-[100%]">
								<Text className="text-xl font-pbold mb-3">Biodata</Text>
								<View className="mt-3 ">
									<View className="flex-row items-center gap-2">
										<Image
											source={icons.email}
											resizeMode="contain"
											className="w-7 h-7"
										/>
										<Text className="text-base font-preguler">Email</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput className="flex-1" placeholder="Masukkan disini..." />
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<View className="mt-3 ">
									<View className="flex-row items-center gap-2">
										<Image
											source={icons.nrp}
											resizeMode="contain"
											className="w-7 h-7"
										/>
										<Text className="text-base font-preguler">NRP</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput className="flex-1" placeholder="Masukkan disini..."/>
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<View className="mt-3 ">
									<View className="flex-row items-center gap-2">
										<Image
											source={icons.company}
											resizeMode="contain"
											className="w-7 h-7"
										/>
										<Text className="text-base font-preguler">Company</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput className="flex-1" placeholder="Masukkan disini..." />
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<View className="mt-3 ">
									<View className="flex-row items-center gap-2">
										<Image
											source={icons.divisi}
											resizeMode="contain"
											className="w-7 h-7"
										/>
										<Text className="text-base font-preguler">Divison</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput className="flex-1" placeholder="Masukkan disini..." />
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<View className="my-3 ">
									<View className="flex-row items-center gap-2">
										<Image
											source={icons.contact}
											resizeMode="contain"
											className="w-7 h-7"
										/>
										<Text className="text-base font-preguler">Contact</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput className="flex-1" placeholder="Masukkan disini..." />
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<TouchableOpacity className="bg-primary rounded-3xl px-3 py-2 mt-5 items-center">
									<Text className="text-white font-pbold">Save</Text>
								</TouchableOpacity>
								<TouchableOpacity className="border-2 border-red-500  bg-red-100 rounded-3xl px-3 py-2 mt-2 items-center">
									<Text className="text-red-500 border-red-500 font-pbold">
										Cancel
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default testScreen;
