import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//paper material ui
import { PaperProvider } from "react-native-paper";

//Views components
import { Home, About, Settings } from "./src/index";

export default function App() {
	const Stack = createNativeStackNavigator();

	//List of routes available in the app
	const routes = [
		{ component: Home, name: "Home" },
		{ component: Settings, name: "Settings" },
		{ component: About, name: "About" },
	];

	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator>
					{routes.map(({ name, component }) => (
						<Stack.Screen
							key={"key" + name}
							name={name}
							component={component}
						/>
					))}
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
