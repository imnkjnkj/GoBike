import React from 'react'
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from "react-native"
import {IBikesDetail} from '../types/bikes'
import {useNavigation} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'
import {setDetailData} from '../redux/bikes'
import {State} from '../redux/store'

export const SLIDER_WIDTH=Dimensions.get('window').width+80
export const ITEM_WIDTH=Math.round(SLIDER_WIDTH*0.7)

interface ICarouselCardItemProps {
	item: IBikesDetail,
	index: number
}
const CarouselCardItem=({item,index}: ICarouselCardItemProps) => {
	//const {theme}=useSelector((state: State) => state.shared);

	//const navigation=useNavigation();
	//const dispatch=useDispatch();
	//const handleClick=() => {
	//navigation.navigate("BikeDetailScreen");
	//dispatch(setDetailData(item));
	//};
	return (
		<TouchableOpacity onPress={() => console.log("first")}>
			<View style={styles.container} key={index}>
				<Image
					source={{uri: item.thumbnail}}
					style={styles.image}
				/>
				<Text style={styles.header}>{item.name}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles=StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 8,
		width: ITEM_WIDTH,
		paddingBottom: 40,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	image: {
		width: ITEM_WIDTH,
		height: 300,
	},
	header: {
		color: "#222",
		fontSize: 28,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingTop: 20
	},
	body: {
		color: "#222",
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 20
	}
})

export default CarouselCardItem