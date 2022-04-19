import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import ExpensesList from "../components/ExpensesList";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Header />
			<ExpensesList />
		</View>
	);
};

export default HomeScreen;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
