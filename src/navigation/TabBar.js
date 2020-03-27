import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "../screens/Screen";
import Screen2 from "../screens/Screen2";
import MyTabBar from "../components/MyTabBar";
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue"
      }}
    >
      <Tab.Screen
        name="News"
        component={Screen}
        options={{
          title: "News",
          icon: require("../assets/icon/news.png")
        }}
      />
      <Tab.Screen
        name="Tab1"
        component={Screen2}
        options={{
          title: "Requests",
          icon: require("../assets/icon/requests.png")
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Screen2}
        options={{
          title: "Events",
          icon: require("../assets/icon/events.png")
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Screen2}
        options={{
          title: "Members",
          icon: require("../assets/icon/members.png")
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={Screen2}
        options={{
          title: "Account",
          icon: require("../assets/icon/account.png")
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
