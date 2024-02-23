import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import RNButton from "@/components/RNButton";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Local First app
With WatermelonDB`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      edges={["bottom"]}
    >
      <Stack.Screen options={{ title: "Day 22: Local first" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day22/local"} asChild>
        <RNButton name="Go to Local App" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
