import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FloatingButton = ({ offsetValue }: any) => {
	const [buttonAppear] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.spring(buttonAppear, {
			toValue: offsetValue <= 45 ? 1 : 0,
			tension: 25,
			friction: 2,
			useNativeDriver: true,
		}).start();
	}, [offsetValue, buttonAppear]);

	return (
		<Animated.View
			style={{
				position: "absolute",
				bottom: 10,
				right: 40,
				zIndex: 100,
				transform: [
					{
						scale: buttonAppear,
					},
				],
			}}>
			<TouchableOpacity
				onPress={() => console.log("pressed!")}
				style={{
					height: 70,
					width: 70,
					elevation: 10,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#006B3C",
					borderRadius: 100,
				}}>
				<MaterialCommunityIcons name='plus' color={"#fff"} size={35} />
			</TouchableOpacity>
		</Animated.View>
	);
};

export default FloatingButton;
