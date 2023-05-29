import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { RichEditor } from "react-native-pell-rich-editor";
import { State } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  BarlowCondensedText,
  MontserratText,
} from "../../components/shared/StyledText";
import Input from "../../components/forms/Input";
import RichEditorTextArea from "../../components/forms/RichEditorTextArea";
import {
  BrandList,
  Category,
  CategoryId,
  categoryList,
  fontStyleEnum,
  RiderAgeList,
  RiderHeightList,
  WeightLimitList,
  WheelSizeList,
} from "../../enums/common";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";
import SelectImage from "../../components/forms/SelectImage";
export interface RefLinkModal {
  setModalVisible: (visile: boolean) => void;
}

const labelFontSize = 14;

export default function CreateInformation() {
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      height: "100%",
      backgroundColor: theme.background,
      alignItems: "center",
      // justifyContent: "center",
    },

    headerStyle: {
      fontSize: 20,
      fontWeight: "600",
      color: theme.text,
      marginBottom: 10,
    },

    htmlBoxStyle: {
      height: 200,
      width: 330,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    },

    richTextContainer: {
      display: "flex",
      flexDirection: "column-reverse",
      width: "100%",
      marginBottom: 10,
    },
    category: {
      backgroundColor: theme.background,
      marginTop: 0,
      maxWidth: Dimensions.get("window").width,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 8,
      height: "100%",
      width: "100%",
      zIndex: 999,
      alignItems: "center",
      justifyContent: "space-between",
    },
    importButton: {
      alignSelf: "flex-end",
      marginBottom: 10,
    },
    errorTextStyle: {
      color: "#FF0000",
      marginBottom: 10,
    },

    saveButtonStyle: {
      backgroundColor: theme.colorLogo,
      color: theme.background,
      borderWidth: 1,
      borderColor: theme.tint,
      borderRadius: 5,
      padding: 8,
      width: "25%",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      fontSize: 20,
      marginVertical: 10
    },

    textButtonStyle: {
      fontSize: labelFontSize,
      fontWeight: "600",
      color: theme.background,
    },
    sectionTitle: {
      backgroundColor: theme.background,
      marginTop: 0,
      maxWidth: Dimensions.get("window").width,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 8,
      height: "100%",
      width: "100%",
      zIndex: 999,
      alignItems: "center",
      justifyContent: "space-between",
      // borderBottomColor: theme.text,
      // borderBottomWidth: 1
    },
  });
  const editorRef = useRef<RichEditor>();
  const linkModal = useRef<RefLinkModal>();
  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);
  const [tile, setTile] = useState("");
  const [category, setcategory] = useState();

  // const handleCategoryChange = (value: number) => {
  //   setcategory(value);
  // };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <BarlowCondensedText
              fontStyle={fontStyleEnum.Medium}
              size={32}
              color={theme.text}
            >
              Create Bike Information
            </BarlowCondensedText>
            <View style={styles.importButton}>
              <Button mode={"underline"} text={"Import"}></Button>
            </View>
            <SelectImage></SelectImage>

            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Name"
              widthInput={300}
              heightInput={35}
              placeholder="Enter name bike..."
              style={styles.category}
            ></Input>
            <View style={[styles.category, { zIndex: 6000 }]}>
              <MontserratText size={labelFontSize}>Category</MontserratText>
              <Select
                items={categoryList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={6000}
              />
            </View>
            <View style={[styles.category, { zIndex: 5000 }]}>
              <MontserratText size={labelFontSize}>Brand</MontserratText>
              <Select
                items={BrandList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={5000}
              />
            </View>
            <View style={[styles.category, { zIndex: 4000 }]}>
              <MontserratText size={labelFontSize}>
                Recommended Age
              </MontserratText>
              <Select
                items={RiderAgeList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={4000}
              />
            </View>
            <View style={[styles.category, { zIndex: 3000 }]}>
              <MontserratText size={labelFontSize}>
                Recommended Height
              </MontserratText>
              <Select
                items={RiderHeightList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={3000}
              />
            </View>
            <View style={[styles.category, { zIndex: 2000 }]}>
              <MontserratText size={labelFontSize}>
                Bike Weight Limit
              </MontserratText>
              <Select
                items={WeightLimitList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={2000}
              />
            </View>
            <View style={[styles.category, { zIndex: 1000 }]}>
              <MontserratText size={labelFontSize}>Wheel Size</MontserratText>
              <Select
                items={WheelSizeList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={1000}
              />
            </View>

            <View style={styles.sectionTitle}>
              <MontserratText fontStyle={fontStyleEnum.SemiBold}>
                General
              </MontserratText>
              <View style={styles.importButton}>
                <Button mode={"underline"} text={"Import"}></Button>
              </View>
            </View>
            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Pain Material"
              widthInput={160}
              placeholder="Enter text..."
              style={styles.category}
              heightInput={35}
            ></Input>
            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Handlebar"
              widthInput={160}
              placeholder="Enter text..."
              style={styles.category}
              heightInput={35}
            ></Input>
            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Sandle Material"
              widthInput={160}
              placeholder="Enter text..."
              style={styles.category}
              heightInput={35}
            ></Input>
            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Seatpost"
              widthInput={160}
              placeholder="Enter text..."
              style={styles.category}
              heightInput={35}
            ></Input>
            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Seatpost Material"
              widthInput={160}
              placeholder="Enter text..."
              style={styles.category}
              heightInput={35}
            ></Input>
            <Input
              labelFontSize={labelFontSize}
              setText={setTile}
              label="Steel"
              widthInput={160}
              placeholder="Enter text..."
              style={styles.category}
              heightInput={35}
            ></Input>
            <TouchableOpacity
              style={styles.saveButtonStyle}
              onPress={submitContentHandle}
            >
              <MontserratText
                style={styles.textButtonStyle}
                color={theme.background}
              >
                Save
              </MontserratText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MainLayout>
  );
}
