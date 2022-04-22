import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FloatingButton = ({ offsetValue }: any) => {
	const [buttonAppear] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.spring(buttonAppear, {
			toValue: offsetValue <= 45 ? 1 : 0,
			tension: 25,
			friction: offsetValue <= 45 ? 2 : 7,
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
				style={{
					height: 70,
					width: 70,
					elevation: 10,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#20806e",
					borderRadius: 100,
				}}>
				<MaterialCommunityIcons name='plus' color={"#fff"} size={35} />
			</TouchableOpacity>
		</Animated.View>
	);
};

export default FloatingButton;
