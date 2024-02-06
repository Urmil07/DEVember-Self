import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const RNButton = React.forwardRef(
  (props: PressableProps & { name: string }, ref) => {
    const { style, name, onPress, disabled, ...restProps } = props;

    return (
      <Pressable
        style={{
          padding: 15,
          borderRadius: 12,
          backgroundColor: "#000000",
          alignSelf: "center",
        }}
        onPress={onPress}
        {...restProps}
      >
        <Text style={{ color: "#FFFFFF", fontFamily: "InterBlack" }}>
          {name}
        </Text>
      </Pressable>
    );
  }
);

export default RNButton;

const styles = StyleSheet.create({});
