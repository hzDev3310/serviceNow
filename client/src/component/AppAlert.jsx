import { Dialog, Portal, } from "react-native-paper";
import AppText from "./AppText";
import { useColorMode } from "../store";



const AppAlert = ({ visible, setVisible, text }) => {
  const hideDialog = () => setVisible(false);
    const {colorMode} = useColorMode();
    const bgColor = colorMode === 'dark' && 'balck' 
  return (
    <Portal>
      <Dialog style={{backgroundColor :'transparent'}} visible={visible} onDismiss={hideDialog}>
        <Dialog.Content style={{backgroundColor : "transparent"}} >
            <AppText>{text}</AppText>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};


export default AppAlert;
