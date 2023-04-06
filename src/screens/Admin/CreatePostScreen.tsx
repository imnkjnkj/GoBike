import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
export default function CreatePostScreen() {
  const richText = useRef<Editor>(null);

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);

  const richTextHandle = (descriptionText: string) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };
  const onPressAddImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const image = `data:image/jpeg;base64,${base64}`;
      const insertIndex = editorRef.current?.getSelection()?.index || 0;
      editorRef.current?.insertImage({ src: image, alt: "image" }, insertIndex);
    }
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
      <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Pressable onPress={() => richText.current?.dismissKeyboard()}>
            <Text style={styles.headerStyle}>Your awesome Content</Text>
            <View style={styles.htmlBoxStyle}>
              <Text>{descHTML}</Text>
            </View>
          </Pressable>
          <View style={styles.richTextContainer}>
            <RichEditor
              ref={richText}
              onChange={richTextHandle}
              placeholder="Write your cool content here :)"
              androidHardwareAccelerationDisabled={true}
              style={styles.richTextEditorStyle}
              initialHeight={250}
              onPressAddImage={onPressAddImage}
            />
            <RichToolbar
              editor={richText}
              selectedIconTint="#873c1e"
              iconTint="#312921"
              actions={[
                actions.insertImage,
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.insertLink,
                actions.setStrikethrough,
                actions.setUnderline,
              ]}
              style={styles.richTextToolbarStyle}
            />
          </View>
          {showDescError && (
            <Text style={styles.errorTextStyle}>
              Your content shouldn't be empty 🤔
            </Text>
          )}

          <TouchableOpacity
            style={styles.saveButtonStyle}
            onPress={submitContentHandle}
          >
            <Text style={styles.textButtonStyle}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ccaf9b",
    padding: 20,
    alignItems: "center",
  },

  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#312921",
    marginBottom: 10,
  },

  htmlBoxStyle: {
    height: 200,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
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
    borderColor: "#ccaf9b",
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
    backgroundColor: "#c6c3b3",
    borderColor: "#c6c3b3",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },

  errorTextStyle: {
    color: "#FF0000",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#c6c3b3",
    borderWidth: 1,
    borderColor: "#c6c3b3",
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
    color: "#312921",
  },
});
