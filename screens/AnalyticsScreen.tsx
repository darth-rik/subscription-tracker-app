import {
	View,
	Text,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory-native";

const AnalyticsScreen = () => {
	const width = Dimensions.get("window").width;
	const [labelName, setLabelName] = useState("");
	const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];
	const wantedGraphicData = [
		{ x: "Spotify", y: 10, image: require("../assets/spotify-logo.png") },
		{
			x: "Prime Video",
			y: 6,
			image: require("../assets/prime-video-logo.png"),
		},
		{ x: "Netflix", y: 40, image: require("../assets/netflix-logo.png") },
	];

	const colorScale = ["crimson", "orange", "blue"];

	const [graphicData, setGraphicData] = useState(defaultGraphicData);

	useEffect(() => {
		setGraphicData(wantedGraphicData); // Setting the data that we want to display
	}, []);
	return (
		<ScrollView
			style={{ backgroundColor: "#edeefa", flex: 1, padding: 10 }}>
			<View
				style={{
					marginTop: 10,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 20,
					backgroundColor: "#edeefa",

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
						Top Expenses
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
					padAngle={3}
					cornerRadius={10}
					animate={{
						duration: 400,
						easing: "circle",
					}}
					radius={({ datum }) =>
						datum.x === labelName ? width * 0.4 : width * 0.4 - 10
					}
					labels={() => null}
					innerRadius={120}
					colorScale={colorScale}
					style={{
						parent: {},
					}}
					height={width * 0.8}
					width={width * 0.8}
					events={[
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
						left: "35%",
						top: "45%",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
							color: "#8d8f8e",
						}}>
						Total Expenditure
					</Text>
					<Text style={{ fontSize: 50, fontWeight: "bold" }}>
						$ 200
					</Text>
				</View>
			</View>
			{/* <View
				style={{
					flex: 1,
					backgroundColor: "blue",
				}}> */}
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{/* <TouchableOpacity
					onPress={() => setLabelName("Cats")}
					style={{
						backgroundColor: "orangered",
						marginTop: 10,
						borderRadius: 5,
						padding: 5,
						elevation: 5,
						width: width - 50,
						marginRight: 10,
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							padding: 5,
							marginBottom: 5,
						}}>
						<View
							style={{
								height: 15,
								width: 15,
								borderRadius: 35,
								backgroundColor: "#ffff",
								marginRight: 10,
							}}></View>

						<Text
							style={{
								fontWeight: "bold",
								fontSize: 15,
								color: "#fff",
							}}>
							{" "}
							Cats{" "}
						</Text>
						<View
							style={{
								flexDirection: "row",
								marginLeft: "auto",
							}}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									color: "#fff",
								}}>
								{" "}
								20 USD
							</Text>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									color: "#fff",
								}}>
								{" "}
								- 11%
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setLabelName("Dogs")}
					style={{
						backgroundColor: "#fff",
						marginTop: 10,
						borderRadius: 5,
						padding: 5,
						elevation: 5,
						width: width - 50,
						marginRight: 10,
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							padding: 5,
							marginBottom: 5,
						}}>
						<View
							style={{
								height: 15,
								width: 15,
								borderRadius: 35,
								backgroundColor: "blue",
								marginRight: 10,
							}}></View>

						<Text
							style={{
								fontWeight: "bold",
								fontSize: 15,
								color: "#000",
							}}>
							{" "}
							Dogs{" "}
						</Text>
						<View
							style={{
								flexDirection: "row",
								marginLeft: "auto",
							}}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									color: "#000",
								}}>
								{" "}
								20 USD
							</Text>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									color: "#000",
								}}>
								{" "}
								- 11%
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setLabelName("Birds")}
					style={{
						backgroundColor: "#fff",
						marginTop: 10,
						borderRadius: 5,
						padding: 5,
						elevation: 5,
						width: width - 50,
						marginRight: 10,
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							padding: 5,
							marginBottom: 5,
						}}>
						<View
							style={{
								height: 15,
								width: 15,
								borderRadius: 35,
								backgroundColor: "yellow",
								marginRight: 10,
							}}></View>

						<Text
							style={{
								fontWeight: "bold",
								fontSize: 15,
								color: "#000",
							}}>
							{" "}
							Birds{" "}
						</Text>
						<View
							style={{
								flexDirection: "row",
								marginLeft: "auto",
							}}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									color: "#000",
								}}>
								{" "}
								20 USD
							</Text>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									color: "#000",
								}}>
								{" "}
								- 11%
							</Text>
						</View>
					</View>
				</TouchableOpacity> */}
				{wantedGraphicData.map((data, ind) => (
					<TouchableOpacity
						onPress={() => setLabelName(data.x)}
						style={{
							backgroundColor:
								labelName === data.x
									? colorScale[ind]
									: "#ffff",
							marginTop: 10,
							borderRadius: 15,
							overflow: "hidden",
							padding: 5,
							elevation: 5,
							width: 140,
							height: 140,
							marginRight: 25,
							alignItems: "center",
							justifyContent: "center",
						}}>
						<View
							style={{
								height: 60,
								width: 60,
								borderRadius: 35,
								backgroundColor: "#Fff",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: 10,
							}}>
							<Image
								style={{ width: 45, height: 45 }}
								source={data.image}
							/>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",

								marginBottom: 5,
							}}>
							<Text
								style={{
									fontSize: 14,
									color:
										labelName === data.x ? "#FFF" : "#000",

									textTransform: "uppercase",
								}}>
								{" "}
								{data.x}{" "}
							</Text>
							<View
								style={{
									height: 12,
									width: 12,
									borderRadius: 35,
									backgroundColor: colorScale[ind],
								}}></View>
						</View>
						<View
							style={{
								flexDirection: "row",
							}}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 16,
									color:
										labelName === data.x ? "#FFF" : "#000",
								}}>
								{" "}
								$ 20000
							</Text>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 16,
									color:
										labelName === data.x ? "#FFF" : "#000",
								}}>
								{" "}
								- 99%
							</Text>
						</View>
					</TouchableOpacity>
				))}
				{/*  */}
			</ScrollView>
			{/* </View> */}
		</ScrollView>
	);
};

export default AnalyticsScreen;
