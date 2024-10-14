import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { CustomButton, FormField } from "../../components";
import { Link } from "expo-router";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, selectError, selectLoading } from "../../redux/slice/userSlice";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

	const getUser = async () => {
		try {
			const userDoc = await firestore()
				.collection("users")
				.doc(auth().currentUser.uid)
				.get();
			if (userDoc.exists) {
				const userData = userDoc.data();
				dispatch(fetchUserData());

				console.log("Data pengguna ditemukan:", userData);
			} else {
				console.log("Dokumen tidak ditemukan!");
				return null;
			}
		} catch (err) {
			console.error("Error mendapatkan data pengguna: ", err);
		}
	};

	const handleSignIn = async () => {
		try {
			await auth().signInWithEmailAndPassword(email, password);
			getUser();
			console.log("User logged in!");
		} catch (err) {
			alert("Login gagal", err);
			console.error(err);
		}
	};

	if (loading) {
		return (
			<SafeAreaView className="items-center justify-center flex-1 relative">
				<Image source={images.first} resizeMode="contain" className="h-full" />
				<ActivityIndicator
					size="20"
					color="#fff"
					className="absolute bottom-14 justify-center"
				/>
				<StatusBar style="dark" />
			</SafeAreaView>
		);
	}

	if (error) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Error: {error}</Text>
			</View>
		);
	}

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
						handleChange={(text) => setEmail(text)}
						value={email}
					/>
					<FormField
						placeholder={"Password"}
						inputStyle={"h-16 rounded-full mb-5"}
						handleChange={(text) => setPassword(text)}
						value={password}
					/>
					<CustomButton
						containerStyles={"bg-black rounded-full mb-4"}
						textStyle={"text-white"}
						title={"Sign In"}
						handlePress={handleSignIn}
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
