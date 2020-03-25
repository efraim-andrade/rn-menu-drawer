import React, { useState } from "react";
import { Image } from "react-native";
import Animated from "react-native-reanimated";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";

import { Dashboard, Contact, Messages } from "../pages";

const Drawer = createDrawerNavigator();
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

const DrawerContent = ({ navigation, ...rest }) => {
  return (
    <DrawerContentScrollView {...rest}>
      <Block>
        <Block flex={0.4} margin={20} marginTop="4x" bottom center>
          <Image
            source={{
              uri:
                "https://avatars1.githubusercontent.com/u/28229600?s=460&u=091aba50d4e61541054ff4b6c9d4e7927a3619c5&v=4",
              height: 60,
              width: 60
            }}
            resizeMode="center"
            style={{ borderRadius: 30 }}
          />

          <Text title marginTop>
            Efraim Andrade
          </Text>
          <Text size={10}>Mobile and Front-End Developer</Text>
        </Block>

        <Block>
          <DrawerItem
            label="Dashboard"
            onPress={() => navigation.navigate("Dashboard")}
            labelStyle={{ marginLeft: -16 }}
            icon={() => <AntDesign name="dashboard" size={16} />}
          />

          <DrawerItem
            label="Messages"
            onPress={() => navigation.navigate("Messages")}
            labelStyle={{ marginLeft: -16 }}
            icon={() => <AntDesign name="message1" size={16} />}
          />

          <DrawerItem
            label="Contact"
            onPress={() => navigation.navigate("Contact")}
            labelStyle={{ marginLeft: -16 }}
            icon={() => <AntDesign name="phone" size={16} />}
          />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

const DrawerContainer: React.FC = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 12]
  });

  const screensStyles = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#fff", "#fff"]}>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{ width: "50%", backgroundColor: "transparent" }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "green",
          inactiveTintColor: "green"
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={props => {
          setProgress(props.progress);

          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={screensStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

export default DrawerContainer;
