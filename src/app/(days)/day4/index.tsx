import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import RNButton from "@/components/RNButton";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Animated splash screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      edges={["bottom"]}
    >
      <Stack.Screen options={{ title: "Day 4: Splashscreen" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day4/animation"} asChild>
        <RNButton name="Go to Animation" />
      </Link>

      <Link href={"/day4/splash"} asChild>
        <RNButton name="Splash Screen Animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
