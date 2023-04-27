import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import {
  Avatar,
  Menu,
  Provider,
  Text,
  Button,
  Divider,
  Switch,
} from "react-native-paper";
import Entype from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { IUserInfo } from "./ProfileRoute";
import { useAppSelector } from "../../hooks";
import { selectUserProfile } from "../../store/userSlice";

const privacy = [
  "Profile photo",
  "Last seen",
  "Status",
  "Read receipts",
  "Groups",
];

export default function SettingsRoute() {
  const [visibleStatusMenu, setVisibleStatusMenu] = React.useState(false);
  const [visibleAbout, setVisibleAbout] = React.useState(false);
  const [visibleSecurity, setVisibleSecurity] = React.useState(false);
  const [visibleHelp, setVisibleHelp] = React.useState(false);
  const [visiblePrivacy, setVisiblePrivacy] = React.useState(false);
  const openStatusMenu = () => setVisibleStatusMenu(true);
  const closeStatusMenu = () => setVisibleStatusMenu(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserInfo[]>([])

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const userProfileStore = useAppSelector(selectUserProfile);
  useEffect(() => {
    setUserInfo([
      {
        title: "Name",
        desc: userProfileStore?.username || '',
      },
      { title: "Email", desc: userProfileStore?.email || '' },
      {
        title: "Time",
        desc: "11:40 AM",
      },
      { title: "Location", desc: userProfileStore?.location || "California USA" },
    ])
  }, [userProfileStore])

  return (
    <View style={[styles.container]}>
      <View style={[styles.heading]}>
        <Text style={[styles.title]}>Settings</Text>
      </View>
      <View style={[styles.userInfo]}>
        <View style={[styles.avatarWrapper]}>
          <Avatar.Image
            size={86}
            source={require("../../assets/images/avatar.jpg")}
          />
          <Button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              zIndex: 100,
              backgroundColor: "#e6ebf5",
              minWidth: 35,
              width: 35,
              height: 35,
              borderRadius: 999,
            }}
          >
            <AntDesign
              style={{
                color: "#212529",
                fontSize: 12,
              }}
              name="edit"
            />
          </Button>
        </View>
        <Text style={[styles.userInfoName]}>{userProfileStore?.username}</Text>
        <View style={[styles.userInfoStatus]}>
          <Provider>
            <View style={{ flexDirection: "row-reverse" }}>
              <Button
                compact={true}
                labelStyle={{ margin: 0 }}
                onPress={openStatusMenu}
              >
                <Text style={[styles.statusText]}>Available</Text>
                <AntDesign name="down" />
              </Button>
              <Menu
                visible={visibleStatusMenu}
                onDismiss={closeStatusMenu}
                anchorPosition="top"
                contentStyle={{
                  backgroundColor: "white",
                  shadowColor: "0 2px 4px rgba(15,34,58,.12)",
                  borderColor: "#f0eff5",
                  borderWidth: 1,
                }}
                anchor={{ x: 0, y: 25 }}
              >
                <Menu.Item style={[styles.menuItem]} title="Available" />
                <Menu.Item style={[styles.menuItem]} title="Busy" />
              </Menu>
            </View>
          </Provider>
        </View>
      </View>
      <Divider
        style={{ backgroundColor: "#f0eff5", marginBottom: 20, zIndex: -10 }}
      />
      <ScrollView style={[styles.contentProfile]}>
        <View
          style={[
            {
              backgroundColor: "white",
              borderRadius: 4,
              marginBottom: 8,
              overflow: "hidden",
              borderColor: "#f0eff5",
              borderWidth: 1,
              borderStyle: "solid",
            },
            visibleAbout ? { height: "auto" } : { height: 40 },
          ]}
        >
          <Pressable
            onPress={() => setVisibleAbout((prev) => !prev)}
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              >
                Personal Info
              </Text>
            </View>
            <Entype
              style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              name="chevron-right"
            />
          </Pressable>
          <View style={{ padding: 20, gap: 24, position: "relative" }}>
            <Button
              style={{
                position: "absolute",
                backgroundColor: "#e6ebf5",
                right: 20,
                minWidth: 62,
                width: 62,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 30,
                borderRadius: 6,
              }}
            >
              <AntDesign
                style={{
                  color: "#212529",
                  lineHeight: 15,
                  fontSize: 15,
                  margin: 0,
                  padding: 0,
                  marginRight: 6,
                }}
                name="edit"
              />
              <Text
                style={{ fontSize: 13, color: "#495057", fontWeight: "400" }}
              >
                Edit
              </Text>
            </Button>
            {userInfo.map((user, index) => (
              <View key={index}>
                <Text
                  style={{ color: "#7a7f9a", marginBottom: 4, fontSize: 15 }}
                >
                  {user.title}
                </Text>
                <Text
                  style={{
                    color: "#495057",
                    fontWeight: "600",
                    fontSize: 14,
                  }}
                >
                  {user.desc}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View
          style={[
            {
              backgroundColor: "white",
              borderRadius: 4,
              borderColor: "#f0eff5",
              borderWidth: 1,
              borderStyle: "solid",
              overflow: "hidden",
              marginBottom: 8,
            },
            visiblePrivacy ? { height: "auto" } : { height: 40 },
          ]}
        >
          <Pressable
            onPress={() => setVisiblePrivacy((prev) => !prev)}
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              >
                Privacy
              </Text>
            </View>
            <Entype
              style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              name="chevron-right"
            />
          </Pressable>
          <View style={{ padding: 20, gap: 8 }}>
            {privacy.map((item, index) => (
              <>
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#495057",
                      fontSize: 13,
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </Text>
                  <View>
                    {index % 2 == 0 ? (
                      <Button
                        style={{
                          backgroundColor: "#e6ebf5",
                          borderColor: "#e6ebf5",
                          minWidth: 95,
                          height: 30,
                          borderRadius: 4,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text>Everyone</Text>
                        <AntDesign name="down" style={{ marginLeft: 4 }} />
                      </Button>
                    ) : (
                      <Switch
                        trackColor={{ false: "#767577", true: "#7269ef" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    )}
                  </View>
                </View>
                {index !== privacy.length - 1 && (
                  <Divider
                    style={{
                      backgroundColor: "#f0eff5",
                    }}
                  />
                )}
              </>
            ))}
          </View>
        </View>
        <View
          style={[
            {
              backgroundColor: "white",
              borderRadius: 4,
              marginBottom: 8,
              overflow: "hidden",
              borderColor: "#f0eff5",
              borderWidth: 1,
              borderStyle: "solid",
            },
            visibleSecurity ? { height: "auto" } : { height: 40 },
          ]}
        >
          <Pressable
            onPress={() => setVisibleSecurity((prev) => !prev)}
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              >
                Security
              </Text>
            </View>
            <Entype
              style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              name="chevron-right"
            />
          </Pressable>
          <View
            style={{
              padding: 20,
              gap: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#495057",
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              Show security notification
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#7269ef" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View
          style={[
            {
              backgroundColor: "white",
              borderRadius: 4,
              marginBottom: 8,
              overflow: "hidden",
              borderColor: "#f0eff5",
              borderWidth: 1,
              borderStyle: "solid",
            },
            visibleHelp ? { height: "auto" } : { height: 40 },
          ]}
        >
          <Pressable
            onPress={() => setVisibleHelp((prev) => !prev)}
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              >
                Help
              </Text>
            </View>
            <Entype
              style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              name="chevron-right"
            />
          </Pressable>
          <View
            style={{
              padding: 20,
              gap: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#495057",
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              FAQs
            </Text>
          </View>
          <Divider
            style={{
              backgroundColor: "#f0eff5",
            }}
          />
          <View
            style={{
              padding: 20,
              gap: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#495057",
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              Contact
            </Text>
          </View>
          <Divider
            style={{
              backgroundColor: "#f0eff5",
            }}
          />
          <View
            style={{
              padding: 20,
              gap: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#495057",
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              Terms & Privacy policy
            </Text>
          </View>
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7fb",
    height: "100%",
  },
  heading: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: "row",
  },
  title: {
    color: "#495057",
    fontWeight: "600",
    fontSize: 21,
  },
  userInfo: {
    padding: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  avatarWrapper: {
    padding: 4,
    borderColor: "#f0eff5",
    borderWidth: 1,
    borderRadius: 999,
    marginBottom: 24,
    position: "relative",
  },
  userInfoName: {
    color: "#495057",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  userInfoStatus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  statusColor: {
    width: 10,
    height: 10,
    borderWidth: 4,
    borderRadius: 999,
    marginRight: 8,
    borderColor: "rgb(6,214,160)",
    position: "relative",
  },

  statusText: {
    color: "#7a7f9a",
    marginRight: 4,
  },
  contentProfile: {
    zIndex: -10,
    paddingTop: 0,
    paddingHorizontal: 24,
  },
  contentDesc: {
    marginVertical: 24,
    color: "#7a7f9a",
  },
  menuItem: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    height: 34,
  },
});
