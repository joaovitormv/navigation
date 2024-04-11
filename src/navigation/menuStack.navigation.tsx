import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { Tela1 } from "../screens/tela1"
import { Tela2 } from "../screens/tela2"

type MenuStackParam = {
    Tela1: undefined;
    Tela2: undefined;
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Tela1">

export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{ animationEnabled: true, gestureEnabled: true }}>
            <Stack.Screen name="Tela1" component={Tela1} />
            <Stack.Screen name="Tela2" component={Tela2} />
        </Stack.Navigator>
    );
}