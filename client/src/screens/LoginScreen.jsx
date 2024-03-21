import { useState } from "react";
import { Button } from "react-native-paper";
import colors from "../config/colors";
import {
  AppAlert,
  AppColorModeSwitch,
  AppSafeView,
  AppText,
  AppTextInput,
  AppView,
} from "../component";

import {
  inputController,
  verifyNumber,
  verifyLength,
} from "../config/controller";
import useLogin from "../hooks/useLogin";

const LoginScreen = () => {
  const [phoneNumber, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const { error, loading, handleLogin  ,responseData} = useLogin(phoneNumber, password);

  const checkLogin = () => {
    if (!inputController(phoneNumber)) {
      setVisible(true);
      return null;
    }
    console.log("Phone Number: " + typeof(phoneNumber) + " Password: " + password);
    handleLogin();
  };

  return (
    <AppSafeView
      Style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <AppAlert
        visible={visible}
        setVisible={setVisible}
        text="complite your inputs"
      />
      <AppColorModeSwitch />

      <AppView style={{ width: "80%" }}>
        <AppTextInput
          text={"phone number"}
          colorSchema={colors.info}
          onChangeText={setNumber}
          value={phoneNumber}
          err={verifyNumber(phoneNumber)}
          errMsg="inter a valide phone number"
          icon="cellphone-basic"
          keyboardType="numeric"
        />

        <AppTextInput
          text={"password"}
          colorSchema={colors.info}
          onChangeText={setPassword}
          value={password}
          err={verifyLength(password)}
          errMsg="password at list 6 caracters"
          icon="key-variant"
          type="password"
        />
        <Button
          style={{
            marginTop: 20,
            backgroundColor: colors.danger,
            paddingVertical: 4,
            borderRadius: 30,
          }}
          icon="login"
          mode="contained"
          onPress={checkLogin}
        >
          Log In
        </Button>
        <Button
          style={{
            marginTop: 20,
            backgroundColor: colors.success,
            paddingVertical: 4,
            borderRadius: 30,
          }}
          icon="account-plus-outline"
          mode="contained"
          onPress={()=>console.log("e")}
        >
          sign up
        </Button>
      </AppView>
    </AppSafeView>
  );
};

export default LoginScreen;
