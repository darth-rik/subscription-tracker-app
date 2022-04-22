import { View, StyleSheet, Animated, Text } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../components/Header";

import ExpensesCard from "../components/ExpensesCard";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingButton";

const HomeScreen = () => {
	const deviceHeight = Dimensions.get("window").height;

	const [animatedValue] = useState(new Animated.Value(0));

	const [offsetValue, setOffsetValue] = useState(0);
	//

	let opacity = animatedValue.interpolate({
		inputRange: [0, 600],
		outputRange: [1, 0],
	});

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#006B3C",
			}}>
			<FloatingButton offsetValue={offsetValue} />
			<Animated.ScrollView
				onScroll={(e) => (
					Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: { y: animatedValue },
								},
							},
						],
						{ useNativeDriver: true }
					),
					setOffsetValue(e.nativeEvent.contentOffset.y)
				)}>
				<Animated.View
					style={{
						transform: [
							{
								translateY: Animated.multiply(
									animatedValue,
									0.8
								),
							},
						],
						opacity: opacity,
					}}>
					<Header />
				</Animated.View>
				<View
					style={{
						borderTopRightRadius: 25,
						borderTopLeftRadius: 25,
						backgroundColor: "#fff",
						marginTop: -30,
						elevation: 30,
						padding: 20,
						minHeight: deviceHeight - 380,
					}}>
					<Text
						style={{
							marginTop: 15,
							marginBottom: 30,
							fontSize: 20,
							fontWeight: "bold",
							color: "#bbbfbe",
						}}>
						3 Expenses
					</Text>
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
					<ExpensesCard />
				</View>
			</Animated.ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
