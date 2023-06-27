import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { BarlowCondensedText } from "../components/shared/StyledText";
import Constant from "expo-constants";
import { connect, useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../redux/store";
import { PayloadAction } from "@reduxjs/toolkit";
import Loading from "../components/Loading";
import { getBikes } from "../redux/bikes/thunkApi";
import { IDashboardData } from "../types/bikes";
import Bike from "../components/Bike";
import { IRequestParams } from "../types/common";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { BikesCategoryId, BrandList, fontStyleEnum } from "../enums/common";
import { filteredList } from "../redux/bikes";
import Select from "../components/forms/Select";
import Filter from "../components/Filter";
import { renderCate } from "../utils/common";
import NoResult from "../components/NoResult";
type RouteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "BikeInforScreen"
>;
type RouteScreenRouteProp = RouteProp<RootStackParamList, "BikeInforScreen">;

interface IBikeInforScreenProps {
  navigation: RouteScreenNavigationProp;
  route: RouteScreenRouteProp;
  pBikesList: IDashboardData;
  pGetBikes: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
}
const BikeInforScreen = ({
  route,
  pBikesList,
  pGetBikes,
}: IBikeInforScreenProps) => {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      marginTop: Constant.statusBarHeight,
      position: "relative",
      zIndex: 1,
      alignItems: "center",
    },
    title: {
      marginVertical: 0,
      textTransform: "uppercase",
    },
    contentWrapper: {
      width: Dimensions.get("window").width,
    },
  });
  const [loading, setLoading] = useState(true);
  const [isClear, setIsClear] = useState(false);
  const [paramsValue, setParamsValue] = useState<IRequestParams>({
    categoryId: route?.params?.id,
    brand: "",
    riderHeight: "",
    wheelSize: "",
  });
  const handleClear = () => {
    setIsClear(true);
  };

  const fetchData = async () => {
    await pGetBikes({
      page: 0,
      size: 1000,
      sort: "updatedAt",
      categoryId: paramsValue.categoryId,
      brand: paramsValue.brand,
      riderHeight: paramsValue.riderHeight,
      weightLimit: paramsValue.weightLimit,
      riderAge: paramsValue.riderAge,
      wheelSize: paramsValue.wheelSize,
    });
    await setLoading(false);
  };

  useEffect(() => {
    if (pBikesList?.content?.length < 0) {
      setIsClear(true);
    } else setIsClear(false);
    fetchData();
  }, [paramsValue]);
  if (loading) {
    return <Loading color={theme.colorLogo} />;
  } else {
    return (
      <View style={styles.container}>
        <BarlowCondensedText
          size={32}
          color={theme.colorLogo}
          style={styles.title}
          fontStyle={fontStyleEnum.SemiBold}
        >
          {renderCate(paramsValue?.categoryId)}
        </BarlowCondensedText>
        <Filter
          isClear={isClear}
          setParamsValue={setParamsValue}
          paramsValue={paramsValue}
        />
        <ScrollView style={{ marginTop: 90 }}>
          {pBikesList?.content?.length > 0 ? (
            <>
              {pBikesList?.content?.map((item, i) => (
                <View key={item.id}>
                  <Bike item={item} key={i} />
                </View>
              ))}
            </>
          ) : (
            <NoResult handleClear={handleClear} />
          )}
        </ScrollView>
      </View>
    );
  }
};
const mapStateToProps = (state: State) => ({
  pBikesList: state.bikes.dashboardData,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pGetBikes: (params: IRequestParams) => dispatch(getBikes(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BikeInforScreen);
