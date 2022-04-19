import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles as styleContainer } from "../screens/HomeScreen";
import ExpensesCard from "./ExpensesCard";

const ExpensesList = () => {
	return (
		<View
			style={[
				styleContainer.container,
				{
					borderTopRightRadius: 25,
					borderTopLeftRadius: 25,
					backgroundColor: "#fff",
					marginTop: -30,
					elevation: 5,
					padding: 20,
				},
			]}>
			<View
				style={{
					backgroundColor: "#8d8f8e",
					height: 3,
					width: 20,
					alignSelf: "center",
					elevation: 2,
					borderRadius: 20,
				}}></View>
			<ScrollView>
				<Text
					style={{
						marginTop: 15,
						fontSize: 20,
						fontWeight: "bold",
						color: "#bbbfbe",
					}}>
					3 Expenses
				</Text>
				<ExpensesCard />
				<ExpensesCard />
				<ExpensesCard />
			</ScrollView>
		</View>
	);
};

export default ExpensesList;
