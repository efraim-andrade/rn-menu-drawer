import React from "react";
import { Button, Text } from "expo-ui-kit";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard, Contact, Messages } from "../pages";

const Stack = createStackNavigator();

const Screens: React.FC<any> = ({ navigation, style }) => {
  const options = {
    headerTransparent: true,
    headerTitle: null,
    headerLeft: ({}) => (
      <Button
        padding
        transparent
        marginHorizontal
        onPress={() => navigation.openDrawer()}
      >
        <Text white small>
          <Feather name="menu" size={24} color="#333" />
        </Text>
      </Button>
    )
  };

  return (
    <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default Screens;
