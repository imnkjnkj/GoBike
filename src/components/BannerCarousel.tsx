import {View,StyleSheet,Animated,FlatList} from 'react-native'
import React,{useEffect,useState} from 'react'
import {MontserratText} from './shared/StyledText';
import {connect,useSelector} from 'react-redux';
import {AppDispatch,State} from '../redux/store';
import {IRequestParams} from '../types/common';
import {IBikesDetail,IDashboardData} from '../types/bikes';
import {PayloadAction} from '@reduxjs/toolkit';
import {getBikes} from '../api/apiBikes';
import {initialState} from '../redux/bikes';
import CarouselCardItem,{ITEM_WIDTH,SLIDER_WIDTH} from './CarouselCardItem';

const AnimatedBanner=Animated.createAnimatedComponent(View);

interface IBannerCarouselProps {
	translateHeader: Animated.AnimatedMultiplication<string|number>;
	translateBanner: any,
	bannerAnimation: any
}

export default function BannerCarousel({translateHeader,translateBanner,bannerAnimation}: IBannerCarouselProps) {
	const {theme}=useSelector((state: State) => state.shared);
	const styles=StyleSheet.create({
		container: {
			width: "100%",
			zIndex: 1,
			marginTop: 45,
			fontFamily: "Barlow Condensed",
		},
		none: {
			display: 'none'
		}
	});
	const isCarousel=React.useRef(null)
	const [bikesList,setBikesList]=useState(initialState.dashboardData.content)
	const fetchData=async () => {
		const bikesList=await getBikes({
			page: 0,
			size: 1000,
			sort: "updatedAt",
		});
		bikesList.content=bikesList.content.slice(0,5);
		setBikesList(bikesList.content);
	};
	useEffect(() => {
		fetchData();
	},[])
	console.log('first',translateBanner)

	return (
		<AnimatedBanner style={[bannerAnimation,{transform: [{translateY: translateBanner}]}]}>
			<Animated.View
				style={[
					styles.container,
					translateHeader&&styles.none
					//{transform: [{translateY: translateHeader}]},
				]}
			>
				{/*<Carousel
					layout="tinder"
					layoutCardOffset={9}
					ref={isCarousel}
					data={bikesList}
					renderItem={CarouselCardItem}
					sliderWidth={SLIDER_WIDTH}
					itemWidth={ITEM_WIDTH}
					inactiveSlideShift={0}
					useScrollView={true}
				/>			<MontserratText>BannerCarousel</MontserratText>*/}

				<FlatList
					data={bikesList}
					keyExtractor={(item,i) => i.toString()}
					renderItem={CarouselCardItem}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
				<MontserratText>BannerCarousel</MontserratText>

			</Animated.View>
		</AnimatedBanner>


	)
}
const mapStateToProps=(state: State) => ({
	pBikesList: state.bikes.dashboardData,
});
