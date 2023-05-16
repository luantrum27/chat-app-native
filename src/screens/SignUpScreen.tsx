import React, { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput, Checkbox, Button } from "react-native-paper";
import { ECheckBox } from "../interfaces/ECheckBox";
import { SignUpScreenNavigationProp } from "../../App";
import axios from "axios";
import { signup } from "../services/auth.service";
import { useAppDispatch } from "../hooks";
function SignupScreen({
  navigation,
}: {
  navigation: SignUpScreenNavigationProp;
}) {
  const [icon, setIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);
  const [status, setStatus] = useState(ECheckBox.UNCHECKED);
  const changeIcon = () => {
    icon !== "eye-off"
      ? (setIcon("eye-off"), setHidePassword(true))
      : (setIcon("eye"), setHidePassword(false));
  };
  const changeStatus = () => {
    status !== ECheckBox.UNCHECKED
      ? setStatus(ECheckBox.UNCHECKED)
      : setStatus(ECheckBox.CHECKED);
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const handleSignUp = async () => {
    signup({ email, username, password }, navigation, dispatch);
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.logoWrapper]}>
        <Image
          style={[styles.logo]}
          source={require("../assets/images/logo_app.png")}
          alt={"logo_app"}
        />
      </View>
      <View>
        <Text style={styles.signInTitle}>Sign up</Text>
        <Text style={styles.signInDesc}>Get your Chatvia account now.</Text>
      </View>
      <View style={[styles.formSignIn]}>
        <View>
          <View style={styles.formField}>
            <Text style={[styles.labelForm]}>Email</Text>
            <TextInput
              onChangeText={(value) => setEmail(value)}
              value={email}
              style={[styles.inputForm]}
              placeholder="Enter email"
              placeholderTextColor={"#7a7f9a"}
              outlineColor="#e6ebf5"
              activeOutlineColor="#e6ebf5"
              mode="outlined"
              left={<TextInput.Icon icon="email" iconColor="#7a7f9a" />}
            />
          </View>
          <View style={styles.formField}>
            <Text style={[styles.labelForm]}>Username</Text>
            <TextInput
              onChangeText={(value) => setUsername(value)}
              value={username}
              style={[styles.inputForm]}
              placeholder="Enter username"
              placeholderTextColor={"#7a7f9a"}
              outlineColor="#e6ebf5"
              activeOutlineColor="#e6ebf5"
              mode="outlined"
              left={<TextInput.Icon icon="account" iconColor="#7a7f9a" />}
            />
          </View>
          <View style={styles.formField}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[styles.labelForm]}>Password</Text>
            </View>
            <TextInput
              secureTextEntry={hidePassword}
              onChangeText={(value) => setPassword(value)}
              value={password}
              style={[styles.inputForm]}
              placeholder="Enter password"
              placeholderTextColor={"#7a7f9a"}
              outlineColor="#e6ebf5"
              activeOutlineColor="#e6ebf5"
              mode="outlined"
              left={<TextInput.Icon icon="lock" iconColor="#7a7f9a" />}
              right={
                <TextInput.Icon
                  onPress={() => changeIcon()}
                  icon={icon}
                  iconColor="#7a7f9a"
                />
              }
            />
          </View>
          <Button
            onPress={handleSignUp}
            textColor="#fff"
            style={[styles.btnSignIn]}
          >
            Sign up
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 48,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: "#7a7f9a", fontSize: 15 }}>
          Already have an account ?
        </Text>
        <Pressable
          style={{ marginLeft: 2 }}
          // onPress={() => navigate("loginStack")}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#7269ef", fontSize: 15 }}>Signin</Text>
        </Pressable>
      </View>
      <Text style={{ textAlign: "center", color: "#7a7f9a", fontSize: 15 }}>
        @ 2023 Chatvia. Crafted with 💓 by DreamTech
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: "#f7f7ff",
    paddingVertical: 48,
    flex: 1,
  },
  logoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 123,
    height: 30,
  },
  titleWrapper: {
    textAlign: "center",
  },
  signInTitle: {
    color: "#495057",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
    paddingTop: 48,
    marginBottom: 8,
  },
  signInDesc: {
    color: "#7a7f9a",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 24,
  },
  formSignIn: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 40,
  },
  inputForm: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderColor: "#e6ebf5",
  },
  labelForm: {
    fontWeight: "500",
    color: "#495057",
    fontSize: 15,
  },
  formField: {
    marginBottom: 16,
  },
  checkbox: {
    width: 15,
    height: 15,
  },
  btnSignIn: {
    backgroundColor: "#7269ef",
    marginTop: 10,
    color: "#fff",
  },
});

export default SignupScreen;
