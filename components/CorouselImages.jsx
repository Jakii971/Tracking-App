import * as React from "react";
import { ActivityIndicator, Dimensions, Text, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const CorouselImages = ({images}) => {
	const width = Dimensions.get("window").width;

	// const images = [
	// 	'https://i.pinimg.com/originals/fe/b6/b6/feb6b68d5ffc34b5f5f03f72b035f04e.gif',
	// 	'https://i.pinimg.com/originals/5a/71/b2/5a71b2e7586d4235d290ef86167a7357.gif',
	// 	'https://i.pinimg.com/originals/54/2e/bd/542ebd87e0a1b30129d9eef3ce1cc405.gif',
	// ]

	return (
		<View className="flex-1">
			<Carousel
				loop
				width={width}
				height={width / 2}
				autoPlay={true}
				data={images}
				mode="parallax"
				scrollAnimationDuration={1000}
				// onSnapToItem={(index) => console.log("current index:", index)}
				panGestureHandlerProps={{
					activeOffsetX: [-10, 10],
				}}
				renderItem={({ index }) => (
					<View className="flex-1 justify-center">
						<Image source={{ uri: images[index] }} resizeMode="contain" className="w-full h-full"/>
					</View>
				)}
			/>
		</View>
	);
};

export default CorouselImages;
