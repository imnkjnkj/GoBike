import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { Text, TextProps } from "./Themed";

export function BarlowCondensedText(props: TextProps) {
  const { size, color, fontStyle, textAlign } = props;
  const { theme } = useSelector((state: State) => state.shared);

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: `Barlow Condensed${fontStyle || ""}`,
          fontSize: size,
          color: color ? color : theme.text,
          textAlign: textAlign || "left",
        },
      ]}
    />
  );
}
export function MontserratText(props: TextProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const { size, color, fontStyle, textAlign } = props;
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: `Montserrat${fontStyle || ""}`,
          fontSize: size,
          color: color ? color : theme.text,
          textAlign: textAlign || "left",
        },
      ]}
    />
  );
}
