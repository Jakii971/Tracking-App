import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	Dimensions,
	ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const MyLineChart = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<LineChart
					className="my-1"
					data={{
						labels: [
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
							"August",
							"September",
							"October",
							"November",
							"December",
						],
						datasets: [
							{
								data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
								strokeWidth: 2,
							},
						],
					}}
					width={screenWidth * 2}
					height={220}
					chartConfig={{
						backgroundGradientFrom: "#efefef",
						backgroundGradientTo: "#efefef",
						decimalPlaces: 1,
						color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MyLineChart;
