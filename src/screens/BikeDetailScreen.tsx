import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import {connect,useSelector} from "react-redux";
import Constant from "expo-constants";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import {MixedStyleDeclaration} from "react-native-render-html";
import {State} from "../redux/store";
import {fontStyleEnum} from "../enums/common";
import {IBikesDetail} from "../types/bikes";
import ImageCarousel from "../components/ImageCarousel";
import TechSpecsInfor from "../components/TechSpecsInfor";
import Comment from "../components/comment/Comment";
import Button from "../components/forms/Button";
import {IUserProfileRes,USER_ROLES_NAME} from "../types/users";

type MyStyles=Readonly<Record<string,MixedStyleDeclaration>>;
interface IBikeDetailScreenProps {
  pDetailData: IBikesDetail;
  pUserInfor: IUserProfileRes;
}
const BikeDetailScreen=({
  pDetailData,
  pUserInfor,
}: IBikeDetailScreenProps) => {
  const {category}=useSelector((state: State) => state.shared);
  const {theme}=useSelector((state: State) => state.shared);
  const [selectedImageIndex,setSelectedImageIndex]=useState(0);
  var date=new Date().toLocaleString();
  const styles=StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      backgroundColor: theme.background,
      paddingVertical: Constant.statusBarHeight,
      fontFamily: "Montserrat",
    },
    createDate: {
      marginVertical: 10,
    },
    postDetailContent: {},
    imageCarouselContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 75,
      height: 75,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    selectedImage: {
      borderWidth: 2,
      borderColor: "red",
    },
    selectedThumbnail: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
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
  const isAdmin=pUserInfor?.roles.some(
    (x) => x.name===USER_ROLES_NAME.ADMIN
  );

  const width=Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <BarlowCondensedText
            fontStyle={fontStyleEnum.SemiBold}
            color={theme.colorLogo}
            size={24}
          >
            BIKE INFORMATION
          </BarlowCondensedText>
          <MontserratText color={"gray"} style={styles.createDate} size={16}>
            {date}
          </MontserratText>
        </View>

        {isAdmin&&(
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Button
                style={{width: 40,marginRight: 10}}
                mode={"border"}
                text={"Edit"}
              ></Button>
              <Button
                mode={"border"}
                text={"Delete"}
                color={theme.colorLogo}
                style={{width: 50}}
              ></Button>
            </View>
          </View>
        )}
      </View>
      <View style={styles.postDetailContent}>
        <ImageCarousel data={pDetailData?.images} showFlatlist={true} />
        <View style={{marginTop: 20}}>
          <BarlowCondensedText
            size={32}
            color={theme.text}
            fontStyle={fontStyleEnum.SemiBold}
          >
            {pDetailData?.name}
          </BarlowCondensedText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <View style={{flexDirection: "row"}}>
              <MontserratText
                color={theme.text}
                size={14}
                style={{textTransform: "capitalize",marginRight: 2}}
              >
                Price:
              </MontserratText>
              <MontserratText
                color={theme.colorLogo}
                size={14}
                style={{textTransform: "capitalize"}}
              >
                300$ at ABC Store
              </MontserratText>
            </View>
            <MontserratText
              color={theme.text}
              size={14}
              style={{textTransform: "capitalize"}}
            >
              Category: {category.title}
            </MontserratText>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <TechSpecsInfor pDetailData={pDetailData} />
        </View>
        <View style={{marginVertical: 10}}>
          <BarlowCondensedText
            fontStyle={fontStyleEnum.Medium}
            color={theme.colorLogo}
            size={24}
          >
            Feature
          </BarlowCondensedText>
          <MontserratText color={theme.text} size={16}>
            {pDetailData.information.features}
          </MontserratText>
        </View>

        <View style={{marginTop: 10}}>
          <Comment />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps=(state: State) => ({
  pDetailData: state.bikes.detailData,
  pUserInfor: state.user.userProfile,
});

const mapDispatchToProps=null;
export default connect(mapStateToProps,mapDispatchToProps)(BikeDetailScreen);
