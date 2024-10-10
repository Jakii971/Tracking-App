import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, Image, Pressable, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";

export default function Index() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push("/home");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  //ini sementara
  const handlePress = () => {
    setIsLoading(false);
    router.push("/home");
  };

  return (
    <Pressable onPress={handlePress} className="flex-1">
      <SafeAreaView className="items-center justify-center flex-1 relative">
        <Image source={images.first} resizeMode="contain" className="h-full" />
        <ActivityIndicator size="20" color='#fff' className="absolute bottom-14 justify-center" />
        <StatusBar style="dark" />
      </SafeAreaView>
    </Pressable>
  );
}


