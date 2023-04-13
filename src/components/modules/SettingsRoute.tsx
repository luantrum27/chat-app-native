import React from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import {
  Avatar,
  Button,
  Divider,
  Menu,
  Provider,
  Text,
} from "react-native-paper";
import Entype from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dimensions } from "react-native";

const userInfo = [
  {
    title: "Name",
    desc: "Patrica Smith",
  },
  { title: "Email", desc: "adc@123.com" },
  {
    title: "Time",
    desc: "11:40 AM",
  },
  { title: "Location", desc: "California USA" },
];

const listAttachedFile = [
  {
    name: "Admin-A.zip",
    type: "file-text",
    size: "12.5 MB",
  },
  {
    name: "Image-1.jpg",
    type: "photo",
    size: "4.2 MB",
  },
  {
    name: "Image-2.jpg",
    type: "photo",
    size: "3.1 MB",
  },
  {
    name: "Landing-A.zip",
    type: "file-text",
    size: "6.7 MB",
  },
];

export default function SettingsRoute() {
  const windowWidth = Dimensions.get("window").width;
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const [visibleAbout, setVisibleAbout] = React.useState(false);
  const [visibleFiles, setVisibleFiles] = React.useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);
  return (
    <ScrollView style={[styles.container]}>
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
              flexDirection: "row",
              position: "absolute",
              right: 0,
              bottom: 0,
              backgroundColor: "#e6ebf5",
              width: 35,
              height: 35,
            }}
            contentStyle={{ width: 35, height: 35, padding: 0, margin: 0 }}
          >
            <AntDesign
              style={{
                color: "#212529",
                lineHeight: 15,
                fontSize: 15,
                margin: 0,
                padding: 0,
              }}
              name="edit"
            />
          </Button>
        </View>
        <Text style={[styles.userInfoName]}>Patricia Smith</Text>
        <View style={[styles.userInfoStatus]}>
          <View style={[styles.statusColor]} />
          <Text style={[styles.statusText]}>Active</Text>
        </View>
      </View>
      <View style={[styles.contentProfile]}>
        <Divider style={{ backgroundColor: "#f0eff5" }} />
        <Text style={[styles.contentDesc]}>
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </Text>
        <Pressable
          onPress={() => setVisibleAbout((prev) => !prev)}
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
            visibleAbout ? { height: 327 } : { height: 40 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 8,
                  color: "#495057",
                  fontWeight: "600",
                  fontSize: 16,
                }}
                name="account-outline"
              />
              <Text
                style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              >
                About
              </Text>
            </View>
            <Entype
              style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              name="chevron-right"
            />
          </View>
          <View style={{ padding: 20, gap: 24 }}>
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
        </Pressable>
        <Pressable
          onPress={() => setVisibleFiles((prev) => !prev)}
          style={[
            {
              backgroundColor: "white",
              borderRadius: 4,
              borderColor: "#f0eff5",
              borderWidth: 1,
              borderStyle: "solid",
              overflow: "hidden",
            },
            visibleFiles ? { height: 327 } : { height: 40 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 8,
                  color: "#495057",
                  fontWeight: "600",
                  fontSize: 16,
                }}
                name="attachment"
              />
              <Text
                style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              >
                Attached Files
              </Text>
            </View>
            <Entype
              style={{ fontSize: 14, color: "#495057", fontWeight: "600" }}
              name="chevron-right"
            />
          </View>
          <View style={{ padding: 20, gap: 8 }}>
            {listAttachedFile.map((item, index) => (
              <View
                key={index}
                style={{
                  padding: 8,
                  borderRadius: 4,
                  borderColor: "#f0eff5",
                  borderWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 4,
                      backgroundColor: "rgba(114,105,239,.25)",
                      marginRight: 16,
                    }}
                  >
                    <FontAwesome
                      style={{ color: "#7269ef", fontSize: 20 }}
                      name={item.type}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: "#495057",
                        marginBottom: 4,
                        fontSize: 14,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        color: "#7a7f9a",
                        fontSize: 13,
                      }}
                    >
                      {item.size}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <AntDesign
                    style={{ fontSize: 18, color: "#7a7f9a" }}
                    name="download"
                  />
                  <Entype
                    style={{
                      fontSize: 18,
                      color: "#7a7f9a",
                      paddingRight: 4,
                    }}
                    name="dots-three-horizontal"
                  />
                </View>
              </View>
            ))}
          </View>
        </Pressable>
      </View>
    </ScrollView>
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
  },
  contentProfile: {
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
