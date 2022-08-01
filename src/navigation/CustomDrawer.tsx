import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Settings, View } from "react-native";
import { Home, Notification } from "../screens";
import { tw } from "../utils";
import CustomDrawerContent from "./CustomDrawerContent";
import MainLayoutTabs from "./MainLayoutTabs";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Drawer.Navigator
        // for animation @todo find a better way(check reanimated 2 implementation??)
        useLegacyImplementation
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          // for removing shadown
          overlayColor: "transparent",
          drawerStyle: tw`w-4/6 pr-5 flex-1 bg-transparent`,
          sceneContainerStyle: tw`bg-transparent`,
        }}
        // drawerContent={(prop) => <CustomDrawerContent {...prop} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
