import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  actions,
  IconRecord,
  RichEditor,
  RichEditorProps,
  RichToolbar,
} from "react-native-pell-rich-editor";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import { State } from "../../redux/store";
import { useSelector } from "react-redux";
import { BarlowCondensedText } from "../../components/shared/StyledText";
import Input from "../../components/forms/Input";
import RichEditorTextArea from "../../components/forms/RichEditorTextArea";
import { Category, CategoryId } from "../../enums/common";
import Select from "../../components/forms/Select";
export interface RefLinkModal {
  setModalVisible: (visile: boolean) => void;
}

const CategoryOptions = [
  { label: Category.BIKEGEAR, value: CategoryId.BIKEGEAR },
  { label: Category.HEALTHNUTRITION, value: CategoryId.HEALTHNUTRITION },
  { label: Category.REPAIR, value: CategoryId.REPAIR },
  { label: Category.TRAINING, value: CategoryId.TRAINING },
];
export default function CreatePostScreen() {
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

    richTextEditorStyle: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderWidth: 1,
      borderColor: theme.colorLogoTint,
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

    richTextToolbarStyle: {
      backgroundColor: theme.colorLogoTint,
      borderColor: theme.colorLogoTint,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
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
      borderRadius: 10,
      padding: 10,
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
        <ScrollView>
          <View style={styles.container}>
            <BarlowCondensedText size={32} color={theme.text}>
              Create A Post
            </BarlowCondensedText>

            <Input
              setText={setTile}
              label="Title"
              placeholder="Enter your title..."
            ></Input>
            <Select
              label="Category"
              items={CategoryOptions}
              selectedValue={category}
              onValueChange={handleCategoryChange}
            />
            <RichEditorTextArea
              setDescHTML={setDescHTML}
              showDescError={showDescError}
              setShowDescError={setShowDescError}
            />
            <TouchableOpacity
              style={styles.saveButtonStyle}
              onPress={submitContentHandle}
            >
              <Text style={styles.textButtonStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MainLayout>
  );
}
