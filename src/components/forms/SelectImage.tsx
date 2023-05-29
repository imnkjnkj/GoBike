import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import Button from "./Button";
import ImageCarousel from "../ImageCarousel";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { BarlowCondensedText } from "../shared/StyledText";
import { fontStyleEnum } from "../../enums/common";

type ImageInfo = {
  uri: string;
  id: number;
};

export default function SelectImage() {
  const { theme } = useSelector((state: State) => state.shared);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [previewImages, setPreviewImages] = useState<ImageInfo[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const styles = StyleSheet.create({
    previewContainer: {
      // flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      // justifyContent:'center',
      // flex:1
    },
    previewImage: {
      width: 40,
      height: 40,
      justifyContent: "center",
    },
    imageCarouselContainer: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    image: {
      width: 300,
      height: 200,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    previewImgWrapper: {},
  });
  useEffect(() => {
    requestPermission();
    setImages(mapData(previewImages));
  }, [previewImages]);
  const mapData = (data: ImageInfo[]) => data.map((res) => res.uri);
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission not granted");
      // Handle permission denial
    }
  };

  const selectImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
      });

      if (!result.cancelled && result.uri) {
        const newImages: ImageInfo[] = Array.isArray(result.uri)
          ? result.uri.map((uri, index) => ({ uri, id: index }))
          : [{ uri: result.uri, id: 0 }];

        setPreviewImages((prevImages) => [...prevImages, ...newImages]);
      }
    } catch (error) {
      console.log("ImagePicker Error:", error);
    }
  };

  const uploadImages = async (images: ImageInfo[]) => {
    try {
      const formData = new FormData();

      images.forEach((image, index) => {
        const fileExtension = image.uri.split(".").pop();
        const fileName = `image${index}.${fileExtension}`;

        if (Platform.OS === "android") {
          // On Android, convert the URI to a Blob object
          const blob = FileSystem.readAsStringAsync(image.uri, {
            encoding: FileSystem.EncodingType.Base64,
          })
            .then((data) => {
              const blobData = new Blob([data], {
                type: `image/${fileExtension}`,
              });
              formData.append("images", blobData, fileName);
            })
            .catch((error) => {
              console.log("Error converting image to blob:", error);
            });
        } else {
          // On iOS, use the URI directly
          formData.append("images", image.uri, fileName);
        }
      });

      // Handle the server response as needed
    } catch (error) {
      console.log("Upload error:", error);
      // Handle the upload error
    }
  };
  return (
    <View style={styles.previewContainer}>
      <View style={styles.image}>
        {previewImages.length > 0 ? (
          <ImageCarousel data={images} stylePreviewImg={styles.image} />
        ) : (
          <Image style={{width: "100%", height: "100%", marginBottom: 10 }} source={require("../../assets/images/default-image.jpg")} />
        )}
      </View>

      <View>
        {previewImages.length <= 10 && (
          <Button
            mode="border"
            text="+"
            handlePress={selectImages}
            style={styles.previewImage}
          />
        )}
      </View>
    </View>
  );
}
