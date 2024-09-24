import { useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/sign-in");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <Image source={images.first} resizeMode="contain" className='h-full'/>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
