import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Constant from "expo-constants";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import { MixedStyleDeclaration } from "react-native-render-html";
import { State } from "../redux/store";
import { fontStyleEnum } from "../enums/common";
import { IBikesDetail } from "../types/bikes";
import ImageCarousel from "../components/ImageCarousel";
import TechSpecsInfor from "../components/TechSpecsInfor";

type MyStyles = Readonly<Record<string, MixedStyleDeclaration>>;
interface IBikeDetailScreenProps {
  pDetailData: IBikesDetail;
}
const BikeDetailScreen = ({ pDetailData }: IBikeDetailScreenProps) => {
  const { category } = useSelector((state: State) => state.shared);
  const { theme } = useSelector((state: State) => state.shared);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  var date = new Date().toLocaleString();
  const styles = StyleSheet.create({
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

  const tagsStyles: MyStyles = {
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

  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
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
        <View style={styles.postDetailContent}>
          <ImageCarousel data={pDetailData?.images} />
          <View style={{ marginTop: 20 }}>
            <BarlowCondensedText
              size={32}
              color={theme.text}
              fontStyle={fontStyleEnum.SemiBold}
            >
              {pDetailData?.name}
            </BarlowCondensedText>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <MontserratText
                  color={theme.text}
                  size={14}
                  style={{ textTransform: "capitalize", marginRight: 2 }}
                >
                  Price:
                </MontserratText>
                <MontserratText
                  color={theme.colorLogo}
                  size={14}
                  style={{ textTransform: "capitalize" }}
                >
                  300$ at ABC Store
                </MontserratText>
              </View>
              <MontserratText
                color={theme.text}
                size={14}
                style={{ textTransform: "capitalize" }}
              >
                Category: {category.title}
              </MontserratText>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <TechSpecsInfor pDetailData={pDetailData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: State) => ({
  pDetailData: state.bikes.detailData,
});

const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(BikeDetailScreen);
