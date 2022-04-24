import {
	View,
	Text,
	ScrollView,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory-native";

const AnalyticsScreen = () => {
	const width = Dimensions.get("window").width;
	const [labelName, setLabelName] = useState("");
	const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];
	const wantedGraphicData = [
		{ x: "Cats", y: 10 },
		{ x: "Birds", y: 50 },
		{ x: "Dog", y: 40 },
	];

	const [graphicData, setGraphicData] = useState(defaultGraphicData);

	useEffect(() => {
		setGraphicData(wantedGraphicData); // Setting the data that we want to display
	}, []);
	return (
		<ScrollView
			style={{ backgroundColor: "#20806e", flex: 1, padding: 10 }}>
			<View
				style={{
					marginTop: 10,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 20,
					backgroundColor: "#ebebeb",
					elevation: 8,
					padding: 10,
				}}>
				<View
					style={{
						marginBottom: 10,
						flexDirection: "row",
						justifyContent: "space-between",
						width: "100%",
						alignItems: "center",
					}}>
					<Text
						style={{
							fontSize: 18,
							color: "#000",
							fontWeight: "bold",
						}}>
						Top 5 Expenses
					</Text>
					<Text
						style={{
							fontSize: 15,
							color: "#000",
							fontWeight: "bold",
						}}>
						{" "}
						This Month
					</Text>
				</View>
				<VictoryPie
					data={graphicData}
					animate={{
						duration: 400,
						easing: "exp",
					}}
					radius={({ datum }) =>
						datum.x === labelName ? width * 0.4 : width * 0.4 - 10
					}
					innerRadius={70}
					labelRadius={(width * 0.4 + 70) / 2.5}
					colorScale={["crimson", "orange", "blue"]}
					style={{
						labels: {
							fontWeight: "bold",
							fontSize: 15,
							fill: "rgba(255,255,255, .9)",
						},
						parent: {
							boxShadow: "4px 4px 4px rgba(0,0,0,.4)",
						},
					}}
					height={width * 0.8}
					width={width * 0.8}
					events={[
						{
							target: "data",
							eventHandlers: {
								onPressIn: () => {
									return [
										{
											target: "labels",
											mutation: (props) => {
												setLabelName(props.text);
											},
										},
									];
								},
							},
						},

						{
							target: "parent",
							eventHandlers: {
								onPressIn: () => {
									return [
										{
											mutation: () => {
												setLabelName("");
											},
										},
									];
								},
							},
						},
					]}
				/>
				<View
					style={{
						position: "absolute",
						left: "42%",
						top: "48%",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							color: "#8d8f8e",
						}}>
						Total
					</Text>
					<Text style={{ fontSize: 30, fontWeight: "bold" }}>
						200 $
					</Text>
				</View>
			</View>
			<View
				style={{
					backgroundColor: "#ebebeb",
					marginTop: 10,
					borderRadius: 20,
					padding: 10,
				}}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						padding: 5,
						marginBottom: 5,
					}}>
					<TouchableOpacity onPress={() => setLabelName("Cats")}>
						<View
							style={{
								height: 30,
								width: 30,
								borderRadius: 35,
								backgroundColor: "crimson",
								marginRight: 10,
							}}></View>
					</TouchableOpacity>
					<Text style={{ fontWeight: "bold", fontSize: 15 }}>
						{" "}
						Cats{" "}
					</Text>
					<View style={{ flexDirection: "row", marginLeft: "auto" }}>
						<Text style={{ fontWeight: "bold", fontSize: 15 }}>
							{" "}
							20 USD
						</Text>
						<Text style={{ fontWeight: "bold", fontSize: 15 }}>
							{" "}
							- 11%
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default AnalyticsScreen;
