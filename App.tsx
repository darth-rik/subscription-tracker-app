import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/HomeScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarShowLabel: false,
					headerShown: false,
					tabBarStyle: {
						justifyContent: "space-around",
					},
				})}>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<MaterialCommunityIcons
								name='home-variant'
								size={30}
								color={`${focused ? "#006B3C" : "#8d8f8e"}`}
							/>
						),
					}}
				/>
				<Tab.Screen
					name='AddExpense'
					component={AddExpenseScreen}
					options={({ navigation }) => ({
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name='plus'
								size={30}
								color='#fff'
							/>
						),
						tabBarButton: ({ onPress, children }) => (
							<TouchableOpacity
								style={{
									display: `${
										navigation.getState().index > 0
											? "none"
											: "flex"
									}`,

									top: -30,
									elevation: 8,
									width: 60,
									height: 60,
									borderRadius: 50,
									backgroundColor: "#006B3C",
								}}
								onPress={onPress}>
								{children}
							</TouchableOpacity>
						),
					})}
				/>
				<Tab.Screen
					name='Analytics'
					component={AnalyticsScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<MaterialCommunityIcons
								name='chart-pie'
								size={30}
								color={`${focused ? "#006B3C" : "#8d8f8e"}`}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
