import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import { Ionicons } from "@expo/vector-icons";
import { BarlowCondensedText } from "./shared/StyledText";
import { fontStyleEnum } from "../enums/common";
interface IImageCarouselProps {
  data: string[];
  showFlatlist?: boolean;
  stylePreviewImg?: StyleProp<ImageStyle>
}
export default function ImageCarousel({
  data,
  showFlatlist,
  stylePreviewImg
}: IImageCarouselProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    imageCarouselContainer: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    image: {
      width: 75,
      height: 75,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    selectedImage: {
      borderWidth: 2,
      borderColor: theme.colorLogo,
    },
    selectedThumbnail: {
      paddingHorizontal: -20,
      //alignItems: 'center',
      paddingBottom: 10,
      width: "100%",
      height: 250,
      position: "relative",
    },
    selectedThumbnailImg: {
      width: "100%",
      height: "100%",
    },
    iconNext: {
      position: "absolute",
      right: 0,
      top: "50%",
      zIndex: 100,
      backgroundColor: "rgba(224, 224, 224, 0.5)",
      borderRadius: 100,
    },
    iconBack: {
      position: "absolute",
      left: 0,
      top: "50%",
      zIndex: 100,
      backgroundColor: "rgba(224, 224, 224, 0.7)",
      borderRadius: 100,
    },
    countImg: {
      width: 33,
      height: 20,
      backgroundColor: "rgba(224, 224, 224, 0.7)",
      borderRadius: 6,
      zIndex: 100,
      bottom: 16,
      right: 8,
      position: "absolute",
      paddingHorizontal: 8,
      paddingVertical: 3,
      textAlign: "center",
    },
  });
  const handlePrevious = () => {
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const handleNext = () => {
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity onPress={() => setSelectedImageIndex(index)}>
      <Image
        source={{ uri: item }}
        style={[
          styles.image,
          index === selectedImageIndex && styles.selectedImage,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.imageCarouselContainer}>
      <View style={[styles.selectedThumbnail,stylePreviewImg]}>
        {selectedImageIndex !== data.length - 1 && (
          <TouchableOpacity
            onPress={() => handleNext()}
            style={styles.iconNext}
          >
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={theme.colorLogo}
            />
          </TouchableOpacity>
        )}
        {selectedImageIndex !== 0 && (
          <TouchableOpacity
            onPress={() => handlePrevious()}
            style={styles.iconBack}
          >
            <Ionicons name="chevron-back" size={24} color={theme.colorLogo} />
          </TouchableOpacity>
        )}
        <View style={styles.countImg}>
          <BarlowCondensedText
            fontStyle={fontStyleEnum.SemiBold}
            color={theme.colorLogo}
            size={13}
            textAlign={"center"}
          >
            {`${selectedImageIndex + 1}/${data?.length}`}
          </BarlowCondensedText>
        </View>
        <Image
          source={{ uri: data[selectedImageIndex] }}
          style={ styles.selectedThumbnailImg}
        />
      </View>
      {showFlatlist && (
        <FlatList
          data={data}
          keyExtractor={(item, i) => i.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
