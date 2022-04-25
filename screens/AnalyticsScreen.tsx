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
import ProgressCircle from "react-native-progress-circle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
			showsVerticalScrollIndicator={false}
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

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{wantedGraphicData.map((data, ind) => (
					<TouchableOpacity
						key={ind}
						onPress={() => setLabelName(data.x)}
						style={{
							backgroundColor:
								labelName === data.x
									? colorScale[ind]
									: "#ffff",

							borderRadius: 15,
							margin: 10,
							padding: 5,
							elevation: 5,
							width: 140,
							height: 140,
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
								marginBottom: 5,
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
			<View
				style={{
					backgroundColor: "#edeefa",
					marginTop: 20,
					marginBottom: 10,
				}}>
				<View
					style={{
						backgroundColor: "#ffff",
						borderRadius: 10,
						elevation: 3,

						padding: 10,
					}}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}>
						<View
							style={{
								marginRight: 15,
							}}>
							<MaterialCommunityIcons
								name='chart-arc'
								size={30}
								color={"#20806e"}
							/>
						</View>
						<View>
							<Text
								style={{
									fontSize: 20,
									letterSpacing: 1,
									fontWeight: "bold",
								}}>
								Budget
							</Text>
							<Text style={{ letterSpacing: 1 }}>
								Set your budget goal
							</Text>
						</View>
						<TouchableOpacity
							style={{
								marginLeft: "auto",
							}}>
							<MaterialCommunityIcons name='plus' size={25} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View
				style={{
					backgroundColor: "#edeefa",
					marginTop: 20,
					marginBottom: 30,
				}}>
				<View
					style={{
						backgroundColor: "#ffff",
						borderRadius: 10,
						elevation: 5,
						padding: 10,
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View style={{ flex: 2, marginBottom: 10 }}>
							<Text style={{ fontSize: 18, letterSpacing: 1 }}>
								Your current monthly budget is{" "}
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 20,
									}}>
									$2000{" "}
								</Text>
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 5,
								}}>
								<TouchableOpacity
									style={{
										backgroundColor: "#20806e",
										alignSelf: "flex-start",
										paddingHorizontal: 20,
										paddingVertical: 2,
										borderRadius: 8,
										marginRight: 20,
									}}>
									<Text
										style={{
											textTransform: "uppercase",
											fontSize: 12,
											fontWeight: "bold",
											letterSpacing: 1.1,
											color: "#ffff",
										}}>
										edit
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<ProgressCircle
							percent={30}
							radius={width * 0.1}
							borderWidth={10}
							shadowColor='#edeefa'
							color='#20806e'
							bgColor='#ffff'
							containerStyle={{}}>
							<Text
								style={{
									fontSize: 20,
									fontWeight: "bold",
								}}>
								30%
							</Text>
						</ProgressCircle>
					</View>

					<Text
						style={{
							marginTop: 5,
							fontWeight: "100",
							color: "#bbbfbe",
							letterSpacing: 1,
						}}>
						You are doing really well! You are currently spending
						within your budget limit
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default AnalyticsScreen;
