import {
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { icons, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const windowWidth = Dimensions.get("window").width;

const aspectRatio = 780 / 597;
const height = windowWidth / aspectRatio;

const UpdateProfileScreen = () => {
	const [modalSaveVisible, setModalSaveVisible] = useState(false);
	const userId = auth().currentUser.uid;
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		nrp: "",
		company: "",
		divisi: "",
		contact: "",
	});

	useEffect(() => {
		const fetchData = async () => {
				try {
						const userDoc = await firestore().collection("users").doc(userId).get();
						if (userDoc.exists) {
								setFormData(userDoc.data());
						}
				} catch (error) {
						console.error("Error fetching user data: ", error);
				}
		};

		fetchData();
}, [userId]);

	const handleSave = async () => {
		try {
			await firestore().collection("users").doc(userId).update(formData);
			console.log("User data successfully saved!");
			setModalSaveVisible(true);
			setTimeout(() => {
				router.back();
			}, 1500);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView className="flex-1 bg-primary">
			<Image
				source={images.texture}
				resizeMode="contain"
				className="absolute"
				style={{ width: "100%", height }}
			/>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalSaveVisible}
				onRequestClose={() => setModalSaveVisible(false)}
			>
				<View
					className="flex-1 justify-center items-center"
					style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
				>
					<View className="w-80 bg-white shadow-lg p-5 items-center rounded-3xl">
						<Text className="text-2xl font-pbold">Saved</Text>
						<View className="flex-row justify-center items-center space-x-5 mb-9 mt-5">
							<Image
								source={images.complete}
								className="w-32 h-32"
								resizeMode="contain"
							/>
						</View>
					</View>
				</View>
			</Modal>

			<ScrollView>
				<View className="bg-white rounded-t-[60px] mt-32 mb-16">
					<View className="p-2 items-center -top-16">
						<Image
							source={images.ppBlank}
							resizeMode="contain"
							className="w-28 h-28 left-28"
						/>
						<View className="w-[100vw] items-center bg-white">
							<View className="w-[85vw] m-6 h-[100%]">
								<View className="mt-3 ">
									<View>
										<Text className="text-base font-preguler">Nama</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.name}
											onChangeText={(text) =>
												setFormData({ ...formData, name: text })
											}
										/>
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<View className="mt-3 ">
									<View>
										<Text className="text-base font-preguler">Username</Text>
									</View>
									<View className="flex-row items-center border-2 border-yellow-200 p-2 mt-1 rounded-xl">
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.username}
											onChangeText={(text) =>
												setFormData({ ...formData, username: text })
											}
										/>
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>

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
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.email}
											onChangeText={(text) =>
												setFormData({ ...formData, email: text })
											}
										/>
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
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.nrp}
											onChangeText={(text) =>
												setFormData({ ...formData, nrp: text })
											}
										/>
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
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.company}
											onChangeText={(text) =>
												setFormData({ ...formData, company: text })
											}
										/>
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
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.divisi}
											onChangeText={(text) =>
												setFormData({ ...formData, divisi: text })
											}
										/>
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
										<TextInput
											className="flex-1"
											placeholder="Masukkan disini..."
											value={formData.contact}
											onChangeText={(text) =>
												setFormData({ ...formData, contact: text })
											}
										/>
										<Image source={icons.edit} className="w-6 h-6 ml-2" />
									</View>
								</View>
								<TouchableOpacity
									className="bg-primary rounded-3xl px-3 py-2 mt-5 items-center"
									onPress={handleSave}
								>
									<Text className="text-white font-pbold">Save</Text>
								</TouchableOpacity>
								<TouchableOpacity
									className="border-2 border-red-500  bg-red-100 rounded-3xl px-3 py-2 mt-2 items-center"
									onPress={() => router.back()}
								>
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

export default UpdateProfileScreen;
