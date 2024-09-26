import { View, Text, Image } from "react-native";
import React from "react";
import { CustomButton, FormField } from "../../components";
import { Link } from "expo-router";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";


const SignUp = () => {
	return (
		<SafeAreaView className="flex-1 justify-center items-center bg-primary relative">
			<Image
				source={images.signUp}
				className="w-[100%] absolute -top-[110px] left-0 right-0"
				resizeMode="contain"
			/>

			<View className="bg-white justify-center items-center h-3/5 w-full rounded-t-[50] absolute bottom-0 left-0 right-0">
				<View className="w-full px-10">
					<FormField
						placeholder={"Username"}
						inputStyle={"h-16 rounded-full mb-4"}
					/>
					<FormField
						placeholder={"Email"}
						inputStyle={"h-16 rounded-full mb-4"}
					/>
					<FormField
						placeholder={"Password"}
						inputStyle={"h-16 rounded-full mb-5"}
					/>
					<CustomButton
						containerStyles={"bg-black rounded-full mb-4"}
						textStyle={"text-white"}
						title={"Sign Up"}
					/>
				</View>
				<View className="bg-input w-[80%] h-0.5" />
				<View className="flex-row items-center pt-5 justify-center gap-2">
					<Text className="text-md text-gray-500 font-pregular">
						Already an have account?
					</Text>
					<Link
						href={"/sign-in"}
						className="text-md text-secondary font-psemibold"
					>
						Sign In
					</Link>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignUp;
