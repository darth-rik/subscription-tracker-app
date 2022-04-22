import { Pressable } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsButton = () => {
	return (
		<Pressable style={{ marginRight: 20 }}>
			<MaterialCommunityIcons name='cog' size={25} color={"#fff"} />
		</Pressable>
	);
};

export default SettingsButton;
