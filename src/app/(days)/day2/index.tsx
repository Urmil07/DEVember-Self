import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import RNButton from "@/components/RNButton";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onbording" }} />
      <Text>DayDetailsScreen</Text>

      <Link href={"/day2/onboarding"} asChild>
        <RNButton name="Go to onboarding" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
