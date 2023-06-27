import {View,StyleSheet,Image} from "react-native";
import React from "react";
import {fontStyleEnum} from "../enums/common";
import {BarlowCondensedText,MontserratText} from "./shared/StyledText";
import {useSelector} from "react-redux";
import {State} from "../redux/store";
import IconNotFound from "../assets/images/not-found-image.svg";
import Button from "./forms/Button";

interface INoResultProps {
  handleClear?: () => void;
}

export default function NoResult({handleClear}: INoResultProps) {
  const {theme}=useSelector((state: State) => state.shared);
  const styles=StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      alignContent: "center",
      justifyContent: "center",
      position: "relative",
      marginTop: "50%",

    },

    text: {
      maxWidth: 250,
    },
  });
  return (
    <View style={styles.container}>
      <IconNotFound color={theme.background} />
      <View>
        <BarlowCondensedText
          fontStyle={fontStyleEnum.SemiBold}
          textAlign={"center"}
          size={20}
        >
          No results found
        </BarlowCondensedText>
        <MontserratText style={styles.text} textAlign={"center"}>
          Try adjusting your search to find what you are looking for
        </MontserratText>
        {handleClear&&(
          <Button
            handlePress={handleClear}
            text="Clear All Filter"
            mode={"underline"}
            color={theme.colorLogo}
            width={90}
            height={35}
            style={{alignSelf: "center"}}
          ></Button>
        )}
      </View>
    </View>
  );
}
