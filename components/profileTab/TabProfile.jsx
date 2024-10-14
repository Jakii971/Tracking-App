import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { icons } from "../../constants";
import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { selectUser } from "../../redux/slice/userSlice";
import { useSelector } from "react-redux";

const TabProfile = () => {
	const userData = useSelector(selectUser);

	const konsol = () => {
		console.log(userData);
	};

	const handleLogout = async () => {
		try {
			await auth().signOut();
			console.log("User logged out!");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View className="w-[100vw] items-center bg-white">
			<View className="w-[85vw] m-6 h-[100%]">
				<Text className="text-xl font-pbold mb-3 pt-14">Biodata</Text>
				<View className="mt-3 ">
					<View className="flex-row items-center gap-2">
						<Image
							source={icons.email}
							resizeMode="contain"
							className="w-7 h-7"
						/>
						<Text className="text-base font-preguler">Email</Text>
					</View>
					<View className="bg-yellow-100 p-2 mt-1 rounded-xl">
						<Text className="text-sm font-preguler">{userData?.email || 'null'}</Text>
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
					<View className="bg-yellow-100 p-2 mt-1 rounded-xl">
						<Text className="text-sm font-preguler">{userData?.nrp || 'null'}</Text>
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
					<View className="bg-yellow-100 p-2 mt-1 rounded-xl">
						<Text className="text-sm font-preguler">
							{userData?.company || 'null'}
						</Text>
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
					<View className="bg-yellow-100 p-2 mt-1 rounded-xl">
						<Text className="text-sm font-preguler">
							{userData?.divisi || 'null'}
						</Text>
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
					<View className="bg-yellow-100 p-2 mt-1 rounded-xl">
						<Text className="text-sm font-preguler">{userData?.contact || 'null'}</Text>
					</View>
				</View>
				<TouchableOpacity
					className="border-2 border-primary rounded-3xl px-3 py-1 mt-5 items-center"
					onPress={() => {
						router.push("/updateProfileScreen");
					}}
				>
					<Text className="text-primary font-pbold">Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="border-2 border-red-500 bg-red-100 rounded-3xl px-3 py-1 mt-2 items-center"
					onPress={handleLogout}
				>
					<Text className="text-red-500 border-red-500 font-pbold">Logout</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TabProfile;
