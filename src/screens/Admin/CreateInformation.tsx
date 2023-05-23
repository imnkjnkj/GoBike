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
  Category,
  CategoryId,
  categoryList,
  fontStyleEnum,
} from "../../enums/common";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";
export interface RefLinkModal {
  setModalVisible: (visile: boolean) => void;
}

const CategoryOptions = [
  { label: Category.BIKEGEAR, value: CategoryId.BIKEGEAR },
  { label: Category.HEALTHNUTRITION, value: CategoryId.HEALTHNUTRITION },
  { label: Category.REPAIR, value: CategoryId.REPAIR },
  { label: Category.TRAINING, value: CategoryId.TRAINING },
];
export default function CreateInformation() {
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
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
    },
    importButton:{
      alignSelf:'flex-end',

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
    },

    textButtonStyle: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.background,
    },
    tib: {
      textAlign: "center",
      color: "#515156",
    },
  });
  const editorRef = useRef<RichEditor>();
  const linkModal = useRef<RefLinkModal>();
  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);
  const [tile, setTile] = useState("");
  const [category, setcategory] = useState(CategoryId.BIKEGEAR);

  const handleCategoryChange = (value: number) => {
    setcategory(value);
  };

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
            <Input
              setText={setTile}
              label="Name"
              placeholder="Enter name bike..."
            ></Input>
            <View style={styles.category}>
              <MontserratText size={18}>Category</MontserratText>
              <Select
                items={categoryList}
                onValueChange={setcategory}
                selectedValue={category}
                zIndex={2000}
              />
            </View>
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