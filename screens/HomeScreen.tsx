import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
