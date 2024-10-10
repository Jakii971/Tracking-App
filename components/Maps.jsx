import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { images } from "../constants";

export default function Maps({onDistanceUpdate}) {
	const [location, setLocation] = useState(null);
	const [routeCoordinates, setRouteCoordinates] = useState([]);
	const [totalDistance, setTotalDistance] = useState(0);

	const haversineDistance = (coords1, coords2) => {
		const toRad = (x) => (x * Math.PI) / 180;
		const R = 6371; // Radius Bumi dalam kilometer
		const dLat = toRad(coords2.latitude - coords1.latitude);
		const dLon = toRad(coords2.longitude - coords1.longitude);
		const lat1 = toRad(coords1.latitude);
		const lat2 = toRad(coords2.latitude);
	
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c;
		return distance; // Jarak dalam kilometer
	};
	

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

					if (routeCoordinates.length > 0) {
            const lastCoordinate = routeCoordinates[routeCoordinates.length - 1];
            const distance = haversineDistance(lastCoordinate, newCoordinate);
            setTotalDistance((prevDistance) => prevDistance + distance);
            onDistanceUpdate(totalDistance + distance); // Kirim jarak ke parent
          }

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
