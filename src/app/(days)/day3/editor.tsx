import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Markdown from "react-native-markdown-display";
import { SafeAreaView } from "react-native-safe-area-context";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Stack } from "expo-router";

const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

## 🌈 Advanced Fun

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)

Visit a fun site: [Fun Site](https://example.com)

### 🎶 Code Block Party

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉
`;

const EditorScreen = () => {
  const [Content, setContent] = useState(template);
  const [Tab, setTab] = useState("edit");
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "Edit/Preview MarkDown" }} />

      <View style={styles.tabContainer}>
        <Pressable
          style={[
            styles.tab,
            { borderColor: Tab == "edit" ? "mediumorchid" : "gray" },
          ]}
          onPress={() => setTab("edit")}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          style={[
            styles.tab,
            { borderColor: Tab == "preview" ? "mediumorchid" : "gray" },
          ]}
          onPress={() => setTab("preview")}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>
      {Tab == "edit" ? (
        <TextInput
          value={Content}
          onChangeText={setContent}
          multiline
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{Content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    // fontFamily: "Inter",
    lineHeight: 24,
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});
