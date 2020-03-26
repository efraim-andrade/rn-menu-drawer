import React from 'react';
import { ViewStyle } from 'react-native';
import { Button, Text } from 'expo-ui-kit';
import { Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard, Contact, Messages } from '../pages';
import { INavigation } from '../interfaces/general';

const Stack = createStackNavigator();

interface IStyle extends ViewStyle {
  borderRadius: Animated.Node<number>;
  transform: { scale: Animated.Node<number> }[];
}

interface IProps {
  style: IStyle;
  navigation: INavigation;
}

const Screens: React.FC<IProps> = ({ navigation, style }) => {
  const options = {
    headerTransparent: true,
    headerTitle: null,
    headerLeft: () => (
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
    ),
  };

  return (
    <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default Screens;
