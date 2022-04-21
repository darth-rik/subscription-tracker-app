import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
	return (
		<View
			onLayout={(e) => console.log(e.nativeEvent.layout)}
			style={styles.headerContainer}>
			<View style={styles.headerContent}>
				<Text style={styles.textSmall}>Good Afternoon,</Text>
				<Text style={styles.textLarge}>Rik</Text>
				<View style={styles.toggleButtonContainer}>
					<TouchableOpacity
						style={[
							styles.button,
							{ backgroundColor: "rgba(255,255,255,.3)" },
						]}>
						<Text
							style={[styles.textExtraSmall, { color: "#ffff" }]}>
							Monthly
						</Text>
					</TouchableOpacity>
					<TouchableOpacity disabled={true} style={styles.button}>
						<Text style={styles.textExtraSmall}>Yearly</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.expensesContainer}>
					<Text style={styles.textLarge}>Expenses</Text>
					<Text style={styles.textExtraLarge}>200 $</Text>
				</View>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: "#006B3C",
		height: 380,
	},
	headerContent: {
		margin: 15,
	},
	textLarge: {
		color: "#ffff",
		fontSize: 30,
		letterSpacing: 1.4,
	},
	textExtraLarge: {
		color: "#ffff",
		fontSize: 60,
		fontWeight: "bold",
		letterSpacing: 1.2,
	},
	textSmall: {
		color: "#ffff",
		fontSize: 20,
	},
	textExtraSmall: {
		fontSize: 15,
		color: "#3EB489",
	},

	toggleButtonContainer: {
		marginTop: 30,
		width: "90%",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		paddingHorizontal: 5,
		paddingVertical: 10,
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: "#fff",
		borderRadius: 20,
		alignItems: "center",
	},
	expensesContainer: {
		marginTop: 40,
		width: "90%",
		alignSelf: "center",
		alignItems: "center",
	},
});
