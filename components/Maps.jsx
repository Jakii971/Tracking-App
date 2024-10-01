import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { images } from "../constants";

export default function Maps() {
	const [location, setLocation] = useState(null);
	const [routeCoordinates, setRouteCoordinates] = useState([]);

	useEffect(() => {
		(async () => {
			// Meminta izin lokasi
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				Alert.alert(
					"Permission Denied",
					"Location permission is required to show your position on the map."
				);
				return;
			}

			// Mendapatkan lokasi awal dan memulai tracking posisi secara real-time
			Location.watchPositionAsync(
				{
					accuracy: Location.Accuracy.High,
					timeInterval: 1000, // Update posisi setiap 1 detik
					distanceInterval: 1, // Update posisi setiap 1 meter
				},
				(newLocation) => {
					const { latitude, longitude } = newLocation.coords;
					const newCoordinate = { latitude, longitude };

					setLocation(newCoordinate);
					setRouteCoordinates((prevCoords) => [...prevCoords, newCoordinate]);
				}
			);
		})();
	}, []);

	return (
		<>
			<MapView
        className="flex-1"
				initialRegion={{
					latitude: location?.latitude || -6.2,
					longitude: location?.longitude || 106.816666,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
				region={
					location && {
						latitude: location.latitude,
						longitude: location.longitude,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}
				}
			>
			{location && (
				<Marker coordinate={location} title="Current Location">
					<Image
						source={images.marker}
						style={{ width: 40, height: 40 }}
					/>
				</Marker>
			)}

			{routeCoordinates.length > 0 && (
				<Polyline
					coordinates={routeCoordinates}
					strokeColor="#4965ff"
					strokeWidth={3} 
				/>
			)}
			</MapView>
		</>
	);
}
