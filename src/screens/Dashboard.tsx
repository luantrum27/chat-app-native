import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import ChatsRoute from "../components/modules/ChatsRoute";
import ContactsRoute from "../components/modules/ContactsRoute";
import GroupsRoute from "../components/modules/GroupsRoute";
import ProfileRoute from "../components/modules/ProfileRoute";
import SettingsRoute from "../components/modules/SettingsRoute";

const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    // {
    //   key: "profile",
    //   title: "Profile",
    //   focusedIcon: "account",
    //   unfocusedIcon: "account-outline",
    // },
    {
      key: "chats",
      title: "Chats",
      focusedIcon: "chat-processing",
      unfocusedIcon: "chat-processing-outline",
    },
    {
      key: "groups",
      title: "Groups",
      focusedIcon: "account-multiple",
      unfocusedIcon: "account-multiple-outline",
    },
    {
      key: "contacts",
      title: "Contacts",
      focusedIcon: "contacts",
      unfocusedIcon: "contacts-outline",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
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
    />
  );
};

export default Dashboard;
