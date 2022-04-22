import { StatusBar } from 'expo-status-bar';
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/HomeScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='light' />
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarShowLabel: true,
					// headerShown: false,
					tabBarActiveTintColor: "#20806e",
				})}>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name='home-variant'
								size={size}
								color={color}
							/>
						),
						headerShown: false,
					}}
				/>
				{/* <Tab.Screen
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
						tabBarButton: (props) => <FloatingButton {...props} />,
						tabBarItemStyle: {
							zIndex: 5000,
						},
					})}
				/> */}
				<Tab.Screen
					name='Analytics'
					component={AnalyticsScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name='chart-pie'
								size={size}
								color={color}
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
