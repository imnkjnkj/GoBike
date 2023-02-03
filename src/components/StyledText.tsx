import {Text,TextProps} from './Themed';


export function BarlowCondensedText(props: TextProps) {
  const {size,color}=props
  return <Text {...props} style={[props.style,{fontFamily: 'Barlow Condensed',fontSize: size,color: color}]} />;
}
export function MontserratText(props: TextProps) {
  const {size,color}=props
  return <Text {...props} style={[props.style,{fontFamily: 'Montserrat',fontSize: size,color: color}]} />;
}