import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
// import DayListItem from "../components/core/DayListItem";
import DayListItem from "@components/core/DayListItem";
import { Stack } from "expo-router";

export default function HomeScreen() {
  const days = Array.from(Array(24).keys());
  // .map((day, index) => index);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "DEVmeber" }} />
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
