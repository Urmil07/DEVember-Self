import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeOut, ZoomIn } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);
  return (
    <Animated.View
      exiting={FadeOut.duration(3000)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <AnimatedLottieView
        exiting={ZoomIn}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        loop={false}
        ref={animation}
        style={{
          width: "80%",
          maxWidth: 400,
          flex: 1,
        }}
        source={require("@assets/lottie/netflix.json")}
      />
    </Animated.View>
  );
};

export default AnimatedSplashScreen;
