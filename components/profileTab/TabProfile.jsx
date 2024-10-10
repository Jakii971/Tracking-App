import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { router } from "expo-router";

const TabProfile = () => {
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
					<View className='bg-yellow-100 p-2 mt-1 rounded-xl'>
						<Text className="text-sm font-preguler">email.com</Text>
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
					<View className='bg-yellow-100 p-2 mt-1 rounded-xl'>
						<Text className="text-sm font-preguler">80224011</Text>
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
					<View className='bg-yellow-100 p-2 mt-1 rounded-xl'>
						<Text className="text-sm font-preguler">PT United Tractors Tbk.</Text>
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
					<View className='bg-yellow-100 p-2 mt-1 rounded-xl'>
						<Text className="text-sm font-preguler">Differentiation and Digitalization</Text>
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
					<View className='bg-yellow-100 p-2 mt-1 rounded-xl'>
						<Text className="text-sm font-preguler">0881819328342</Text>
					</View>
				</View>
        <TouchableOpacity className='border-2 border-primary rounded-3xl px-3 py-1 mt-5 items-center' onPress={() => {router.push('/updateProfileScreen')}}>
          <Text className='text-primary font-pbold'>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className='border-2 border-red-500  bg-red-100 rounded-3xl px-3 py-1 mt-2 items-center'>
          <Text className='text-red-500 border-red-500 font-pbold'>Logout</Text>
        </TouchableOpacity>
			</View>

		</View>
	);
};

export default TabProfile;
