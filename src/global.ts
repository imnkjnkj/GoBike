import { useRef } from "react";
import Animated, { useValue } from "react-native-reanimated";

export const animatedValue = useRef(useValue(0)).current; //lưu khoảng cách mà user scroll theo chiều dọc
