import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";

interface ItemsProps {
  label: string;
  value: number;
}
interface SelectProps {
  label: string;
  items: ItemsProps[];
  onValueChange: (value: number) => void;
  selectedValue: number;
}


const Select: React.FC<SelectProps> = ({
  label,
  items,
  onValueChange,
  selectedValue,
}) => {
  const [pickerValue, setPickerValue] = useState(selectedValue);
    
  const handleValueChange = (value: number) => {
    console.log(value);
    setPickerValue(value);
    onValueChange(value);
  };

  return (
    <View>
      <Text>{label}</Text>
      <Picker selectedValue={pickerValue} onValueChange={handleValueChange}>
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Select;
