import React, { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput, Checkbox, Button } from "react-native-paper";
import { ECheckBox } from "../interfaces/ECheckBox";
// import useNavigation from "../utils/useNavigation";
import OTPTextInput from "react-native-otp-textinput";
import { useAppDispatch } from "../hooks";
import { checkOtp, getOtp } from "../services/auth.service";
import { VerifiAccountNavigationProp } from "../../App";

function VerifiAccountScreen({navigation} : {navigation: VerifiAccountNavigationProp}) {

  const dispatch = useAppDispatch();
  const [isGettingOtp, setIsGettingOtp] = React.useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = React.useState(false);
  const [otp, setOtp] = React.useState('');

  const handleGetOtp = async () => {
    setIsGettingOtp(true);
    try {
      await getOtp();
      setIsGettingOtp(false);
    } catch (err) {
      setIsGettingOtp(false);
    }
  };
  
  const handleCheckOtp = async (otp: string) => {
    if (otp.length !== 6) {
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const isSuccess: boolean = await checkOtp(otp);

      if (isSuccess) {
         navigation.navigate('Dashboard');
        setIsVerifyingOtp(false);
      } else {
        setIsVerifyingOtp(false);
      }
    } catch (err) {
      setIsVerifyingOtp(false);
    }
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

      <View style={[styles.formOtp]}>
        <View>
          <Text style={styles.formOtpTitle}>OTP Verification</Text>
          <Text style={styles.OTPDesc}>
            We Will send you a one time password on this Email
          </Text>
        </View>
        <OTPTextInput
          value={otp}
          onChange={(otp: string) => setOtp(otp)}
          inputCount={6}
          textInputStyle={{
            width: 40,
            borderColor: "#7269EF",
            outline: "#7269EF",
          }}
          tintColor="#7269EF"
        />
        <Button textColor="#fff" style={[styles.btnSubmit]} onPress={() => handleCheckOtp(otp)}>
          Submit
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 48,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: "#7a7f9a", fontSize: 15 }}>
          You did not receive the otp code?
        </Text>
        <Pressable style={{ padding: 0, margin: 0 }} onPress={handleGetOtp}>
          <Text style={{ color: "#495057", fontSize: 15 }}> Resend</Text>
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
  formOtpTitle: {
    color: "#495057",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
    paddingTop: 12,
    marginBottom: 8,
  },
  OTPDesc: {
    color: "#7a7f9a",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 24,
  },
  formOtp: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 20,
    marginTop: 40,
  },
  btnSubmit: {
    backgroundColor: "#7269ef",
    marginTop: 40,
    color: "#fff",
    width: 200,
  },
});

export default VerifiAccountScreen;
