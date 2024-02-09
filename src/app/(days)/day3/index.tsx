import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import RNButton from "@/components/RNButton";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      edges={["bottom"]}
    >
      <Stack.Screen options={{ title: "Day 3: MarkDown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day3/editor"} asChild>
        <RNButton name="Go to editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
