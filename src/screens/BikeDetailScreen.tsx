import {
	StyleSheet,
	ScrollView,
	SafeAreaView,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React,{useState} from "react";
import {connect,useSelector} from "react-redux";
import Constant from "expo-constants";
import {BarlowCondensedText,MontserratText} from "../components/shared/StyledText";
import RenderHtml,{MixedStyleDeclaration} from "react-native-render-html";
import {useWindowDimensions} from "react-native";
import Navigation from "../navigation";
import {State} from "../redux/store";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types";
import {RouteProp} from "@react-navigation/native";
import {IDashboarData,IPostsDetail} from "../types/posts";
import {fontStyleEnum} from "../enums/common";
import {IBikesDetail} from "../types/bikes";
import ImageCarousel from "../components/ImageCarousel";

type MyStyles=Readonly<Record<string,MixedStyleDeclaration>>;
interface IBikeDetailScreenProps {
	pDetailData: IBikesDetail;
}
const BikeDetailScreen=({pDetailData}: IBikeDetailScreenProps) => {
	const {category}=useSelector((state: State) => state.shared);
	const {theme}=useSelector((state: State) => state.shared);
	const [selectedImageIndex,setSelectedImageIndex]=useState(0);
	var date=new Date().toLocaleString();
	const styles=StyleSheet.create({
		container: {
			paddingHorizontal: 10,
			marginTop: Constant.statusBarHeight,
			fontFamily: "Montserrat",
		},
		createDate: {
			marginVertical: 10,
		},
		postDetailContent: {},
		imageCarouselContainer: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		image: {
			width: 75,
			height: 75,
			marginHorizontal: 10,
			borderRadius: 10,
		},
		selectedImage: {
			borderWidth: 2,
			borderColor: 'red',
		},
		selectedThumbnail: {
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			alignItems: 'center',
			paddingBottom: 10,
		},
	});

	const tagsStyles: MyStyles={
		body: {
			whiteSpace: "normal",
			color: theme.text,
			fontSize: 16,
			fontFamily: "Montserrat",
		},
		img: {
			width: "100%",
		},
	};
	console.log(pDetailData);

	const width=Dimensions.get("window").width;


	const renderItem=({item,index}: any) => (
		<TouchableOpacity onPress={() => setSelectedImageIndex(index)}>
			<Image
				source={{uri: item}}
				style={[styles.image,index===selectedImageIndex&&styles.selectedImage]}
			/>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<View>
					<BarlowCondensedText
						fontStyle={fontStyleEnum.SemiBold}
						color={theme.colorLogo}
						size={20}
					>
						{category.title}
					</BarlowCondensedText>
					<MontserratText color={"gray"} style={styles.createDate} size={16}>
						{date}
					</MontserratText>
				</View>
				<View style={styles.postDetailContent}>
					<BarlowCondensedText
						size={32}
						color={theme.text}
						fontStyle={fontStyleEnum.SemiBold}
					>
						{pDetailData?.name}
					</BarlowCondensedText>
					<ImageCarousel data={pDetailData?.images} />

					<View>
						{/*<RenderHtml
							contentWidth={width}
							source={{html: pDetailData?.description}}
							enableExperimentalMarginCollapsing={true}
							tagsStyles={tagsStyles}
							ignoredDomTags={["button","svg","fieldset","video"]}
						/>*/}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const mapStateToProps=(state: State) => ({
	pDetailData: state.bikes.detailData,
});

const mapDispatchToProps=null;
export default connect(mapStateToProps,mapDispatchToProps)(BikeDetailScreen);
