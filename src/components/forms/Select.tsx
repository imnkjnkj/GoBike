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

    selectContainer: {
      maxWidth: 160,
    
    },
  });
  const [pickerValue, setPickerValue] = useState(selectedValue);

  const handleValueChange = (value: number) => {
    setPickerValue(value);
    onValueChange(value);
  };

  return (
      <Picker
        style={styles.selectContainer}
        selectedValue={pickerValue}
        onValueChange={handleValueChange}
        mode={"dropdown"}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
  );
};

export default Select;
