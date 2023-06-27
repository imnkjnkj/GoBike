import {View,Text,StyleSheet} from "react-native";
import React from "react";
import Constant from "expo-constants";
import {useSelector} from "react-redux";
import {State} from "../redux/store";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import {IBikesDetail} from "../types/bikes";
import {fontStyleEnum} from "../enums/common";

interface ITechSpecsInforProps {
  pDetailData: IBikesDetail;
}
export default function TechSpecsInfor({pDetailData}: ITechSpecsInforProps) {
  const {category}=useSelector((state: State) => state.shared);
  const {theme}=useSelector((state: State) => state.shared);
  var date=new Date().toLocaleString();
  const styles=StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingTop: Constant.statusBarHeight,
      fontFamily: "Montserrat",
    },
    createDate: {
      marginVertical: 10,
    },
    postDetailContent: {},
    col: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      borderBottomWidth: 0.5,
      borderBottomColor: "rgba(34, 50, 64, 0.7)",
      paddingVertical: 5,
    },
  });
  const RenderItem=({list,title}: any) => {
    return (
      <View>
        <MontserratText
          color={theme.text}
          style={styles.title}
          fontStyle={fontStyleEnum.SemiBold}
          size={16}
        >
          {title}
        </MontserratText>
        {Object.entries(list).map(([key]) => {
          const titleKey=key
            .replace(/([A-Z])/g," $1") // Insert a space before each capital letter
            .replace(/^./,(str) => str.toUpperCase()); // Capitalize the first letter
          return (
            <View key={key} style={{marginTop: 5}}>
              <View style={styles.col}>
                <MontserratText
                  color={theme.text}
                  size={16}
                  style={{textTransform: "capitalize"}}
                >
                  {key==='features'? '':titleKey}
                </MontserratText>
                <MontserratText color={theme.text} size={16}>
                  {key==='features'? '':list[key]}
                </MontserratText>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <BarlowCondensedText
        fontStyle={fontStyleEnum.Medium}
        color={theme.colorLogo}
        size={24}
      >
        Technical Specs
      </BarlowCondensedText>

      <View>
        <View>
          <RenderItem list={pDetailData.information} title={"General"} />
          <RenderItem list={pDetailData.suitableUser} title={"Suitable User"} />
          <RenderItem
            list={pDetailData.transmissionSystem}
            title={"Transmission System"}
          />
          <RenderItem list={pDetailData.wheelset} title={"Wheel Set"} />
          <RenderItem list={pDetailData.frame} title={"Fame"} />
        </View>
      </View>
    </View>
  );
}
