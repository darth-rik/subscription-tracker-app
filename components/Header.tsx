import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsButton from "./SettingsButton";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.headerContent}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View>
						<Text style={styles.textSmall}>Good Afternoon,</Text>
						<Text style={styles.textLarge}>Rik</Text>
					</View>
					<SettingsButton />
				</View>
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
		backgroundColor: "#20806e",
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
		color: "#20806e",
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
		marginTop: 30,
		width: "90%",
		alignSelf: "center",
		alignItems: "center",
	},
});
