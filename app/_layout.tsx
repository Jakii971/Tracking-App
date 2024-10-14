import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Provider } from "react-redux";
import { store } from "../redux/store";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
	const router = useRouter();
	const segments = useSegments();

	const [fontsLoaded, error] = useFonts({
		"Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
	});

	const handleOnAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
		console.log("onAuthStateChange", user);
		setUser(user);
		if (initializing) setInitializing(false);
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(handleOnAuthStateChanged);
		return subscriber;
	}, []);

	useEffect(() => {
		if (initializing || !fontsLoaded) return;

		const inAuthGroup = segments[0] === "(auth)";

		if (user && inAuthGroup) {
			// User is logged in, but on an auth screen, redirect to home
			router.replace("/(tabs)/home");
		} else if (!user && !inAuthGroup) {
			// User is not logged in, redirect to login screen
			router.replace("/(auth)/sign-in");
		}
	}, [initializing, fontsLoaded, user, segments]);

	useEffect(() => {
		if (error) throw error;

		if (fontsLoaded) SplashScreen.hideAsync(); 
	}, [fontsLoaded, error]);


	if (!fontsLoaded || initializing) return null;

	return (
		<Provider store={store}>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen
					name="notificationScreen"
					options={{ title: "Notification" }}
				/>
				<Stack.Screen name="searchScreen" options={{ title: "Search" }} />
				<Stack.Screen
					name="updateProfileScreen"
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="testScreen" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			</Stack>
		</Provider>
	);
};

export default RootLayout;
