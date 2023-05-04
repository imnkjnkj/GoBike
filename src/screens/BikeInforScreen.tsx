import {View,StyleSheet} from "react-native";
import React,{useEffect,useState} from "react";
import Layout from "../layouts/Layout";
import {BarlowCondensedText} from "../components/shared/StyledText";
import Constant from "expo-constants";
import {connect,useSelector} from "react-redux";
import {AppDispatch,State} from "../redux/store";
import {PayloadAction} from "@reduxjs/toolkit";
import Loading from "../components/Loading";
import {getBikes} from "../redux/bikes/thunkApi";
import {IDashboardData} from "../types/bikes";
import Bike from "../components/Bike";
import { IRequestParams } from "../types/common";


interface IBikeInforScreenProps {
	pBikesList: IDashboardData;
	pGetBikes: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
}
const BikeInforScreen=({pBikesList,pGetBikes}: IBikeInforScreenProps) => {
	const {theme}=useSelector((state: State) => state.shared);
	const styles=StyleSheet.create({
		container: {
			backgroundColor: theme.background,
			marginTop: Constant.statusBarHeight,
			position: "relative",
			zIndex: 1,
			alignItems: "center",
		},
		title: {
			marginVertical: 0,
		},
	});
	const [loading,setLoading]=useState(true);
	const fetchData=async () => {
		await pGetBikes({
			page: 0,
			size: 1000,
			sort: "updatedAt",
			// categoryId: id,
		  });;
		await setLoading(false);
	};
	useEffect(() => {
		fetchData();

	},[]);
	if(loading) {
		return <Loading color={theme.colorLogo} />;
	} else {
		return (
			<View style={styles.container}>
				<BarlowCondensedText
					size={32}
					color={theme.colorLogo}
					style={styles.title}
				>
					Bikes Information
				</BarlowCondensedText>
				<Layout>
					{pBikesList?.content?.map((item,i) => (
						<View key={i}>
							<Bike item={item} />
						</View>
					))}
				</Layout>
			</View>
		);
	}
};
const mapStateToProps=(state: State) => ({
	pBikesList: state.bikes.dashboardData,
});

const mapDispatchToProps=(dispatch: AppDispatch) => ({
	pGetBikes: (params: IRequestParams) => dispatch(getBikes(params)),
});
export default (
	connect(mapStateToProps,mapDispatchToProps)(BikeInforScreen)
);
