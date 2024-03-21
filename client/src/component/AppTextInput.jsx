import { Icon, Text, TextInput } from "react-native-paper";
import { useColorMode } from "../store";
import AppView from "./AppView";
import colors from "../config/colors";
import { useState } from "react";

const AppTextInput = ({
  colorSchema,
  text,
  value,
  onChangeText,
  err,
  errMsg,
  icon,
  type = "text",
  ...otherProps
}) => {
  const [visible, setVisible] = useState(true);
  const color =
    useColorMode().colorMode === "dark" ? colors.light : colors.darkBlue;
  const bgColor =
    useColorMode().colorMode === "light" ? colors.light : colors.darkBlue;
  return (
    <AppView>
      <TextInput
        textColor={color}
        secureTextEntry={type === "text" ? false : visible}
        error={err}
        mode={"outlined"}
        placeholder="phone number"
        value={value}
        onChangeText={(text) => onChangeText(text)}
        activeUnderlineColor="blue"
        outlineColor={color}
        outlineStyle={{
          borderRadius: 25,
          borderWidth: 3,
        }}
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
        left={<TextInput.Icon icon={icon} color={color} />}
        right={
          type === "password" ? (
            <TextInput.Icon
              onPress={() => setVisible(!visible)}
              icon={visible ? "eye" : "eye-off"}
            />
          ) : null
        }
        {...otherProps}
       
      />

      {err && (
        <Text style={{ color: colors.danger, marginLeft: 5, marginTop: 5 }}>
          <Icon source="alert-circle" color={colors.danger} size={15} />{" "}
          {errMsg}
        </Text>
      )}
     
    </AppView>
  );
};

export default AppTextInput;
