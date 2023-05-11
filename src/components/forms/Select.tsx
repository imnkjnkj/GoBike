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
import DropDownPicker from "react-native-dropdown-picker";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
interface ItemsProps {
  label: string;
  value?: number | string;
}
interface SelectProps {
  zIndex?: number;
  items: ItemsProps[];
  onValueChange: React.Dispatch<React.SetStateAction<any>>;
  selectedValue: any;
  style?: StyleProp<ViewStyle>;
  height?: number | string;
  width?: number | string
}

const Select: React.FC<SelectProps> = ({
  zIndex,
  items,
  onValueChange,
  selectedValue,
  style,
  height,
  width
}) => {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      fontFamily: "Montserrat",
      flex: 1,
      flexShrink: 1,
      flexBasis: 100,
      margin: 4,
      maxWidth: width || 160,
      height: height || 35,
      zIndex: zIndex,
    },
    selectContainer: {
      minHeight: height || 32,
      backgroundColor: theme.background,
      borderColor: theme.text,
      borderWidth: 0.5,
      borderRadius: 3,
    },
    icon: {
      width: 10,
      height: 10,
      color: theme.colorLogo,
    },
  });
  const [pickerValue, setPickerValue] = useState(selectedValue);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleValueChange = (value: any) => {
    setPickerValue(value);
    onValueChange(value);
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder={items[0].label}
        loading={loading}
        open={open}
        value={pickerValue}
        items={items}
        setOpen={setOpen}
        setValue={setPickerValue}
        onChangeValue={handleValueChange}
        mode="BADGE"
        maxHeight={75}
        style={styles.selectContainer}
        TickIconComponent={({ style }) => (
          <MaterialIcons name="done" style={styles.icon} />
        )}
        ArrowUpIconComponent={({ style }) => (
          <Feather name="chevron-up" style={styles.icon} />
        )}
        ArrowDownIconComponent={({ style }) => (
          <Feather name="chevron-down" style={styles.icon} />
        )}
        textStyle={{
          fontSize: 12,
          fontFamily: "Montserrat",
          color: theme.text
        }}
        labelStyle={{
          fontWeight: "500",
          textTransform: "capitalize",
          color: theme.text
        }}
        listItemContainerStyle={{
          backgroundColor: theme.background,
          height: 30,
          alignItems: "center",

        }}
        listItemLabelStyle={{
          textTransform: "capitalize",
        }}
        dropDownContainerStyle={styles.selectContainer}
      />
    </View>
  );
};

export default Select;
