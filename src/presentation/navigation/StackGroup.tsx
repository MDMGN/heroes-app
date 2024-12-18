import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BottomTabs from "./BottomTabs";
import HeroeScreen from "../screens/HeroeScreen";

export type StackProps = {
  HOME: undefined;
  HEROE: { id: number; title: string };
};

const Stack = createStackNavigator<StackProps>();

export default function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="HEROE" component={HeroeScreen} />
    </Stack.Navigator>
  );
}
