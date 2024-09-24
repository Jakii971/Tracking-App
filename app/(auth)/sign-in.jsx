import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { CustomButton, FormField } from "../../components";
import { Link, router } from "expo-router";
import { images } from "../../constants";

const SignIn = () => {
	return (
		<SafeAreaView className="flex-1 justify-center items-center bg-primary relative">
			<Image
				source={images.signIn}
				className="w-[100%] absolute -top-[110px] left-0 right-0"
				resizeMode="contain"
			/>

			<View className="bg-white justify-center items-center h-2/4 w-full rounded-t-[50] absolute bottom-0 left-0 right-0">
				<View className="w-full px-10">
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
						title={"Sign In"}
						handlePress={() => {router.push("/home")}}
					/>
				</View>
				<View className="bg-input w-[80%] h-0.5" />
				<View className="flex-row items-center pt-5 justify-center gap-2">
					<Text className="text-md text-gray-500 font-pregular">
						Don't have an account?
					</Text>
					<Link
						href={"/sign-up"}
						className="text-md text-secondary font-psemibold"
					>
						Sign Up
					</Link>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignIn;
