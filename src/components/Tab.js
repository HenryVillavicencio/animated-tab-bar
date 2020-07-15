import React, { useRef } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Easing
} from "react-native";

export default props => {
  const { title, icon, isFocused, onPress } = props;

  const animatedItemValues = useRef(new Animated.Value(0)).current;

  const animatedItemStyle = {
    transform: [{ translateY: animatedItemValues }]
  };

  const animatedBubbleValues = useRef(new Animated.Value(0)).current;

  const animatedBubbleScaleValues = animatedBubbleValues.interpolate({
    inputRange: [0, 0.25, 0.4, 0.525, 0.8, 1],
    outputRange: [0.01, 3, 1.65, 1.65, 3.2, 3]
  });

  const animatedBubbleStyle = {
    transform: [{ scale: animatedBubbleScaleValues }]
  };

  const animatedMiniBubbleValues = useRef(new Animated.Value(0)).current;

  const animatedMiniBubbleHeightValues = animatedMiniBubbleValues.interpolate({
    inputRange: [0, 0.01, 1],
    outputRange: [0, 1, 1]
  });

  const animatedMiniBubbleTranslateValues = animatedMiniBubbleValues.interpolate(
    {
      inputRange: [0, 1],
      outputRange: [13, 0]
    }
  );

  const animatedMiniBubbleStyle = {
    opacity: animatedMiniBubbleHeightValues,
    transform: [{ translateY: animatedMiniBubbleTranslateValues }]
  };

  const animatedTitleValues = animatedBubbleValues.interpolate({
    inputRange: [0, 1],
    outputRange: [60, 60]
  });

  const animatedTitleStyle = {
    transform: [{ translateY: animatedTitleValues }]
  };

  const animatedIconValues = useRef(new Animated.Value(0)).current;

  const animatedIconColorValues = animatedIconValues.interpolate({
    inputRange: [0, 1],
    outputRange: ["#4C53DD", "#FFF"]
  });

  const animatedIconStyles = {
    tintColor: animatedIconColorValues
  };

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animatedItemValues, {
        toValue: -30,
        duration: 500,
        delay: 300,
        easing: Easing.in(Easing.elastic(1.5)),
        useNativeDriver: true
      }),
      Animated.timing(animatedBubbleValues, {
        toValue: 1,
        duration: 800,
        easing: Easing.inOut(Easing.out(Easing.ease)),
        useNativeDriver: true
      }),
      Animated.timing(animatedMiniBubbleValues, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        useNativeDriver: true
      }),

      Animated.timing(animatedIconValues, {
        toValue: 1,
        duration: 800
      })
    ]).start();
  };

  const endAnimation = () => {
    Animated.parallel([
      Animated.timing(animatedItemValues, {
        toValue: 0,
        duration: 400,
        delay: 350,
        useNativeDriver: true
      }),
      Animated.timing(animatedBubbleValues, {
        toValue: 0,
        duration: 750,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(animatedMiniBubbleValues, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(animatedIconValues, {
        toValue: 0,
        duration: 400,
        delay: 350
      })
    ]).start();
  };

  React.useEffect(() => {
    if (isFocused) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, animatedItemStyle]}>
        <Animated.View style={[styles.bubble, animatedBubbleStyle]} />
        <Animated.View style={[styles.miniBubble, animatedMiniBubbleStyle]} />

        <Animated.Image source={icon} style={animatedIconStyles} />
        <Animated.View style={[styles.titleContainer, animatedTitleStyle]}>
          <Animated.Text
            numberOfLines={1}
            adjustsFontSizeToFit={true}
            style={{
              color: isFocused ? "#4C53DD" : "#fff"
            }}
          >
            {title}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  bubble: {
    position: "absolute",
    height: 17,
    width: 17,
    borderRadius: 8.5,
    backgroundColor: "#4C53DD"
  },
  miniBubble: {
    position: "absolute",
    alignSelf: "center",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#4C53DD"
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
