import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import DayListItem from "../components/core/DayListItem";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const days = Array.from(Array(24).keys());
  // .map((day, index) => index);

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList
        data={days}
        renderItem={({ item, index }) => <DayListItem day={item} />}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: { gap: 10 },
});
