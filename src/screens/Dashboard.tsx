import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import ChatsRoute from "../components/modules/ChatsRoute";
import ContactsRoute from "../components/modules/ContactsRoute";
import GroupsRoute from "../components/modules/GroupsRoute";
import ProfileRoute from "../components/modules/ProfileRoute";
import SettingsRoute from "../components/modules/SettingsRoute";

const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account-outline",
      unfocusedIcon: "account-outline",
    },
    {
      key: "chats",
      title: "Chats",
      focusedIcon: "chat-processing-outline",
      unfocusedIcon: "chat-processing-outline",
    },
    {
      key: "groups",
      title: "Groups",
      focusedIcon: "account-multiple-outline",
      unfocusedIcon: "account-multiple-outline",
    },
    {
      key: "contacts",
      title: "Contacts",
      focusedIcon: "contacts-outline",
      unfocusedIcon: "contacts-outline",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog-outline",
      unfocusedIcon: "cog-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    chats: ChatsRoute,
    groups: GroupsRoute,
    contacts: ContactsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: "white",
        height: 58,
        justifyContent: "center",
      }}
      activeColor="#7269ef"
      inactiveColor="#495057"
      sceneAnimationEnabled={true}
      sceneAnimationType="opacity"
    />
  );
};

export default Dashboard;
