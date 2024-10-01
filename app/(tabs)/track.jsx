import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Alert,
	Modal,
	Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	CircleCollapse,
	MyMaps,
	ButtonTrack,
	ButtonActionTrack,
} from "../../components";
import React, { useEffect, useRef, useState } from "react";

const Track = () => {
	const [isStart, setIsStart] = useState(false);
	const [isPause, setIsPause] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalCompleteVisible, setModalCompleteVisible] = useState(false);

	const intervalRef = useRef(null);

	const startTimer = () => {
		if (!isStart) {
			intervalRef.current = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}, 1000);
			setIsStart(true);
		}
	};

	const handleStart = () => {
		startTimer();
	};

	const handleFinish = () => {
		clearInterval(intervalRef.current);
		setSeconds(0);
		setIsStart(false);
		setModalVisible(true); // Menampilkan modal
	};

	const handleComplete = () => {
		setModalVisible(false); // Tutup modal pertama
		setModalCompleteVisible(true); // Tampilkan modal kedua
	};

	return (
		<SafeAreaView className="flex-1 relative">
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View className="flex-1 justify-center items-center">
					<View className="w-80 h-60 bg-white rounded-lg shadow-lg p-5 items-center">
						<Text className="text-lg font-bold mb-5">Finish Tracking</Text>
						<Text className="text-center mb-5">Congratulations! You have finished your tracking session.</Text>
						<Button title="Next" onPress={() => handleComplete()} />
					</View>
				</View>
			</Modal>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalCompleteVisible}
				onRequestClose={() => setModalCompleteVisible(false)}
			>
				<View className="flex-1 justify-center items-center">
					<View className="w-80 h-60 bg-white rounded-lg shadow-lg p-5 items-center">
						<Text className="text-lg font-bold mb-5">Complete</Text>
						<Text className="text-center mb-5">Your session is complete! Well done!</Text>
						<Button title="Close" onPress={() => setModalCompleteVisible(false)} />
					</View>
				</View>
			</Modal>

			{isStart ? (
				<LinearGradient
					colors={["rgba(0,0,0,9)", "transparent"]}
					className="absolute top-0 w-full h-64 z-10 flex-row items-center justify-center space-x-5"
				>
					<View className="rounded-2xl bg-white px-6 py-3 items-center">
						<Text className="font-psemibold text-lg">Duration</Text>
						<Text className="font-pbold text-xl text-primary">00:{seconds}</Text>
					</View>
					<View
						style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
						className="rounded-2xl px-6 py-3 items-center"
					>
						<Text className="font-psemibold text-lg">Distance</Text>
						<Text className="font-pbold text-xl text-secondary">25KM</Text>
					</View>
				</LinearGradient>
			) : null}
			
			<MyMaps />

			<View className="py-5 mb-8 w-full absolute bottom-0 flex-row items-center justify-center space-x-8">
				{isStart ? (
					<ButtonActionTrack
						selectedIcon={isPause ? "pause" : "play"}
						onPress={() => setIsPause(!isPause)}
					/>
				) : null}
				{isStart ? (
					<ButtonTrack title="Finish" onPress={handleFinish} />
				) : (
					<ButtonTrack title="Start" onPress={handleStart} />
				)}

				<View>
					<CircleCollapse />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Track;
