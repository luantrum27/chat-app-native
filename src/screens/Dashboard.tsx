import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import ChatsRoute from "../components/modules/ChatsRoute";
import NotificationsRoute from "../components/modules/NotificationsRoute";
import SearchUserRoute from "../components/modules/SearchUserRoute";
import ProfileRoute from "../components/modules/ProfileRoute";
import SettingsRoute from "../components/modules/SettingsRoute";
import { ChatScreenNavigationProp } from "../../App";
import { socket } from "../context/socket/config";
import { ESocketEvent } from "../models/socket";
import { useAppSelector } from "../hooks";
import { selectUserProfile } from "../store/userSlice";

const Dashboard = ({
  navigation,
}: {
  navigation: ChatScreenNavigationProp;
}) => {
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
      key: "search",
      title: "Search",
      focusedIcon: "account-search-outline",
      unfocusedIcon: "account-search-outline",
    },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell-outline",
      unfocusedIcon: "bell-outline",
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
    chats: () => <ChatsRoute navigation={navigation} />,
    search: SearchUserRoute,
    notifications: NotificationsRoute,
    settings: SettingsRoute,
  });
  const userProfileStore = useAppSelector(selectUserProfile)
  React.useEffect(() => {
    socket.connect();
    socket.on(ESocketEvent.CONNECT, () => {
      console.log('connected');
    });


    socket.on(ESocketEvent.DISCONNECT, () => {
      console.log('disconnected');
    });

    return () => {
      socket.close();
      socket.removeAllListeners();
    };
  }, []);

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
