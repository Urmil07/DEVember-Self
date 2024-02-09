import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import RNButton from "@/components/RNButton";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/lottie/netflix.json")}
      />

      <View style={{ gap: 10, flexDirection: "row" }}>
        <RNButton name="Play" onPress={() => animation.current?.play()} />
        <RNButton name="Pause" onPress={() => animation.current?.pause()} />
        <RNButton name="Reset" onPress={() => animation.current?.reset()} />
      </View>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
