import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";

interface ItemsProps {
  label: string;
  value?: number | string;
}
interface SelectProps {
  label?: string;
  items: ItemsProps[];
  onValueChange: React.Dispatch<React.SetStateAction<any>>;
  selectedValue: any;
  style?: StyleProp<ViewStyle>;
}

const Select: React.FC<SelectProps> = ({
  label,
  items,
  onValueChange,
  selectedValue,
  style,
}) => {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      fontFamily: "Montserrat",
      borderColor: theme.colorLogo,
      flex: 1,
      borderWidth: 1,
      flexShrink: 1,
      flexBasis: 105,
      margin: 4,
      maxWidth: 160,
      borderRadius: 2,
      height: 40,
    },
    selectContainer: {
      maxWidth: "100%",
      height: 38,
      alignItems: "center",
    },
  });
  const [pickerValue, setPickerValue] = useState(selectedValue);

  const handleValueChange = (value: number) => {
    setPickerValue(value);
    onValueChange(value);
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.selectContainer}
        selectedValue={pickerValue}
        itemStyle={{
          minHeight: 40,
          alignItems: "center",
          fontSize: 10,
          fontFamily: "Montserrat",
        }}
        onValueChange={handleValueChange}
        mode={"dropdown"}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Select;
