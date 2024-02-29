import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Heart, House, User } from 'phosphor-react-native';
import { Text, View } from 'react-native';
import { MainHeader } from '../components';
import { Routes, ScreenStrings } from '../constants';
import { HomePage, ProfileTab } from '../modules';
import { Colors, appStyle, moderateScale } from '../themes';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.purple,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={Routes.HomePage}
        component={HomePage}
        options={{
          header: () => <MainHeader />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <House
                  color={focused ? Colors.dark : Colors.lightGray}
                  weight={focused ? 'fill' : 'regular'}
                  size={moderateScale(22)}
                />
                <Text
                  style={focused ? appStyle.focusedText : appStyle.normalText}>
                  {ScreenStrings.home}
                </Text>
              </View>
            );
          },
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name={Routes.Signin}
        component={HomePage}
        options={{
          header: () => <MainHeader />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <Heart
                  color={focused ? Colors.dark : Colors.lightGray}
                  weight={focused ? 'fill' : 'regular'}
                  size={moderateScale(22)}
                />
                <Text
                  style={focused ? appStyle.focusedText : appStyle.normalText}>
                  {ScreenStrings.wishlist}
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Routes.ProfileTab}
        component={ProfileTab}
        options={{
          header: () => <MainHeader />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <User
                  color={focused ? Colors.dark : Colors.lightGray}
                  weight={focused ? 'fill' : 'regular'}
                  size={moderateScale(22)}
                />
                <Text
                  style={focused ? appStyle.focusedText : appStyle.normalText}>
                  {ScreenStrings.profile}
                </Text>
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
