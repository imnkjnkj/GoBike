import { View, StyleSheet, Dimensions, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  BikeList,
  BrandList,
  menuBikeList,
  RiderAgeList,
  RiderHeightList,
  WeightLimitList,
  WheelSizeList,
} from "../enums/common";
import Select from "./forms/Select";
import { IRequestParams } from "../types/common";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import Constant from "expo-constants";
import Button from "./forms/Button";
import { color } from "react-native-reanimated";

interface IFilter {
  paramsValue: IRequestParams;
  setParamsValue: React.Dispatch<React.SetStateAction<IRequestParams>>;
  isClear?: boolean;
}
export default function Filter({
  paramsValue,
  setParamsValue,
  isClear,
}: IFilter) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      marginTop: 10,
      maxWidth: Dimensions.get("window").width,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 8,
      height: "100%",
      zIndex: 999,
    },
    clearButton: {
      color: theme.colorLogo,
    },
  });
  const [brandValue, setBrandValue] = useState<string>();
  const [typeValue, setTypeValue] = useState<number | undefined>(
    paramsValue?.categoryId
  );
  const [ageValue, setAgeValue] = useState<string>();
  const [heightValue, setHeightValue] = useState<string>();
  const [weightValue, setWeightValue] = useState<string>();
  const [wheelSizeValue, setWheelSizeValue] = useState<string>();
  useEffect(() => {
    if (isClear) {
      handleClear();
    }
    setParamsValue({
      ...paramsValue,
      categoryId: typeValue,
      brand: brandValue,
      riderHeight: heightValue,
      weightLimit: weightValue,
      riderAge: ageValue,
      wheelSize: wheelSizeValue,
    });
  }, [
    brandValue,
    typeValue,
    heightValue,
    weightValue,
    ageValue,
    wheelSizeValue,
    isClear,
  ]);
  const handleClear = () => {
    setBrandValue(undefined);
    setTypeValue(undefined);
    setAgeValue(undefined);
    setHeightValue(undefined);
    setWeightValue(undefined);
    setWheelSizeValue(undefined);
  };
  return (
    <View style={styles.container}>
      <Select
        items={BikeList}
        onValueChange={setTypeValue}
        selectedValue={typeValue}
        zIndex={2000}
      />
      <Select
        items={BrandList}
        onValueChange={setBrandValue}
        selectedValue={brandValue}
        zIndex={2000}
      />
      <Select
        items={RiderAgeList}
        onValueChange={setAgeValue}
        selectedValue={ageValue}
        zIndex={2000}
      />
      <Select
        items={RiderHeightList}
        onValueChange={setHeightValue}
        selectedValue={heightValue}
        zIndex={100}
      />
      <Select
        items={WeightLimitList}
        onValueChange={setWeightValue}
        selectedValue={weightValue}
        zIndex={100}
      />
      <Select
        items={WheelSizeList}
        onValueChange={setWheelSizeValue}
        selectedValue={wheelSizeValue}
        zIndex={100}
      />
      <View style={{ alignItems: "center" }}>
        <Button
          handlePress={handleClear}
          mode="underline"
          text="Clear"
          color={theme.colorLogo}
        ></Button>
      </View>
    </View>
  );
}
