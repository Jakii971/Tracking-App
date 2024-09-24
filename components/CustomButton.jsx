import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, textStyle }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			className={`min-h-[62px] justify-center items-center p-3 ${containerStyles}`}
			activeOpacity={0.7}
		>
			<Text className={`text-white font-psemibold text-lg ${textStyle}`}>{title || "Default Title"}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
