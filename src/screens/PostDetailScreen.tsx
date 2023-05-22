import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { connect, useSelector } from "react-redux";
import Constant from "expo-constants";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import RenderHtml, { MixedStyleDeclaration } from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import Navigation from "../navigation";
import { State } from "../redux/store";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { RouteProp } from "@react-navigation/native";
import { IDashboarData, IPostsDetail } from "../types/posts";
import { fontStyleEnum } from "../enums/common";
import { sIsAdmin } from "../redux/user/selector";
import { IUserProfileRes, USER_ROLES_NAME } from "../types/users";
import Button from "../components/forms/Button";
type MyStyles = Readonly<Record<string, MixedStyleDeclaration>>;
interface IPostDetailScreenProps {
  pDetailData: IPostsDetail;
  pUserInfor: IUserProfileRes;
}
const PostDetailScreen = ({
  pDetailData,
  pUserInfor,
}: IPostDetailScreenProps) => {
  const { category } = useSelector((state: State) => state.shared);
  const { theme } = useSelector((state: State) => state.shared);
  var date = new Date().toLocaleString();
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      marginTop: Constant.statusBarHeight + 5,
      fontFamily: "Montserrat",
    },
    createDate: {
      marginVertical: 10,
    },
    postDetailContent: {},
  });
  const isAdmin = pUserInfor?.roles.some(
    (x) => x.name === USER_ROLES_NAME.ADMIN
  );
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
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView>
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
              size={20}
            >
              {category.title}
            </BarlowCondensedText>
            <MontserratText color={"gray"} style={styles.createDate} size={16}>
              {date}
            </MontserratText>
          </View>
          {isAdmin && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <Button mode={"border"} text={"Edit"}></Button>
              </View>
              <Button
                mode={"border"}
                text={"Delete"}
                color={theme.colorLogo}
              ></Button>
            </View>
          )}
        </View>
        <View style={styles.postDetailContent}>
          <BarlowCondensedText
            size={32}
            color={theme.text}
            fontStyle={fontStyleEnum.SemiBold}
          >
            {pDetailData?.title}
          </BarlowCondensedText>
          <Image
            source={{ uri: pDetailData.thumbnail }}
            style={{ width: "100%", height: 300, marginTop: 5 }}
          />
          <View>
            <RenderHtml
              contentWidth={width}
              source={{ html: pDetailData?.description }}
              enableExperimentalMarginCollapsing={true}
              tagsStyles={tagsStyles}
              ignoredDomTags={["button", "svg", "fieldset", "video"]}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: State) => ({
  pUserInfor: state.user.userProfile,
  pDetailData: state.posts.detailData,
});

const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailScreen);
