import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { Text, TextProps } from "./Themed";

export function BarlowCondensedText(props: TextProps) {
  const { size, color } = props;
  const { theme } = useSelector((state: State) => state.shared);

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Barlow Condensed",
          fontSize: size,
          color: color ? color : theme.text,
        },
      ]}
    />
  );
}
export function MontserratText(props: TextProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const { size, color } = props;
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Montserrat",
          fontSize: size,
          color: color ? color : theme.text,
        },
      ]}
    />
  );
}
