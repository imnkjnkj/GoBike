import { View, StyleSheet, Dimensions } from "react-native";
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
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import Constant from "expo-constants";

interface IFilter {
  paramsValue: IRequestParams;
  setParamsValue: React.Dispatch<React.SetStateAction<IRequestParams>>;
}
export default function Filter({ paramsValue, setParamsValue }: IFilter) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      marginTop: Constant.statusBarHeight,
      width: Dimensions.get("window").width,
    //   flexDirection: "row",
    //   flexWrap:'wrap'
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
  ]);

  return (
    <View style={styles.container}>
      <Select
        items={BrandList}
        onValueChange={setBrandValue}
        selectedValue={brandValue}
      />
      <Select
        items={BikeList}
        onValueChange={setTypeValue}
        selectedValue={typeValue}
      />
      <Select
        items={RiderAgeList}
        onValueChange={setAgeValue}
        selectedValue={ageValue}
      />
      <Select
        items={RiderHeightList}
        onValueChange={setHeightValue}
        selectedValue={heightValue}
      />
      <Select
        items={WeightLimitList}
        onValueChange={setWeightValue}
        selectedValue={weightValue}
      />
      <Select
        items={WheelSizeList}
        onValueChange={setWheelSizeValue}
        selectedValue={wheelSizeValue}
      />
    </View>
  );
}
