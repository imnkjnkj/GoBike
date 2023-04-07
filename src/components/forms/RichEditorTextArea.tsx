import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import {
  actions,
  IconRecord,
  RichEditor,
  RichEditorProps,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { useSelector } from "react-redux";
import { RefLinkModal } from "../../screens/Admin/CreatePostScreen";
import { State } from "../../redux/store";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";

interface IRichEditorTextAreaProps {
  setDescHTML: React.Dispatch<React.SetStateAction<string>>;
  showDescError: boolean;
  setShowDescError: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RichEditorTextArea({
  setDescHTML,
  showDescError,
  setShowDescError,
}: IRichEditorTextAreaProps) {
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
  const richTextHandle = (descriptionText: string) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };
  const onPressAddImage = useCallback(async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);

    if (cameraPermission.status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const base64 = await FileSystem.readAsStringAsync(
          result.assets[0].uri,
          {
            encoding: FileSystem.EncodingType.Base64,
          }
        );
        const imageHtml = `<img src="data:image/jpeg;base64,${base64}" width="100%"/>`;
        // console.log(imageHtml);
        editorRef.current?.insertImage(`data:image/jpeg;base64,${base64}`);
        // editorRef.current?.insertImage(imageHtml);
      }
    } // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }, []);
  const onInsertLink = useCallback(() => {
    // this.richText.current?.insertLink('Google', 'http://google.com');
    linkModal.current?.setModalVisible(true);
  }, []);
  return (
    <>
      <View style={styles.richTextContainer}>
        <RichEditor
          ref={editorRef as React.RefObject<RichEditor>}
          onChange={richTextHandle}
          placeholder="Write your cool content here :)"
          style={styles.richTextEditorStyle}
          initialHeight={250}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <RichToolbar
            editor={editorRef}
            selectedIconTint="#873c1e"
            iconTint="#312921"
            actions={[
              actions.undo,
              actions.redo,
              actions.heading1,
              actions.heading4,
              actions.insertImage,
              actions.setStrikethrough,
              actions.checkboxList,
              actions.insertOrderedList,
              actions.blockquote,
              actions.alignLeft,
              actions.alignCenter,
              actions.alignRight,
              actions.code,
              actions.line,
            ]}
            iconMap={{
              [actions.heading1]: ({ tintColor }: IconRecord) => (
                <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
              ),
              [actions.heading4]: ({ tintColor }: IconRecord) => (
                <Text style={[styles.tib, { color: tintColor }]}>H4</Text>
              ),
            }}
            style={styles.richTextToolbarStyle}
            onPressAddImage={onPressAddImage}
            onInsertLink={onInsertLink}
          />
        </KeyboardAvoidingView>
      </View>
      {showDescError && (
        <Text style={styles.errorTextStyle}>
          Your content shouldn't be empty 🤔
        </Text>
      )}
    </>
  );
}
