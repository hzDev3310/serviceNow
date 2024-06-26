
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../colors';

const AppPicker = ({ selectedValue, onValueChange, data, label }) => {
  return (
    <View className={`h-10 my-2 flex justify-center rounded-full`} style={{ backgroundColor: colors.warning }}  >
      <Picker
        selectedValue={selectedValue}
        style={{ width: '100%' }}
        onValueChange={onValueChange}
        mode="dropdown"

      >
        {label && <Picker.Item label={label} enabled={false} />}
        {Object.values(data).map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};


export default AppPicker;
