import { View, Text, Image } from "react-native";
import React from "react";

const ExpensesCard = () => {
	return (
		<View
			style={{
				marginTop: 30,
				paddingBottom: 10,
				borderBottomColor: "#bbbfbe",
				borderBottomWidth: 0.8,
				flexDirection: "row",
				alignItems: "center",
			}}>
			<Image
				style={{ width: 50, height: 50 }}
				source={require("../assets/netflix-logo.png")}
			/>
			<View style={{ marginLeft: 20, flexDirection: "column" }}>
				<Text style={{ fontSize: 20 }}>Netflix</Text>
				<Text style={{ fontSize: 15, color: "#bbbfbe" }}>
					Due in 4 weeks
				</Text>
			</View>
			<Text
				style={{
					marginLeft: "auto",
					fontSize: 20,
					fontWeight: "bold",
				}}>
				120 $
			</Text>
		</View>
	);
};

export default ExpensesCard;
