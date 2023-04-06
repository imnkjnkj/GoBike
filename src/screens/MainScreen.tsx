import { View, Text, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import Navigation from '../navigation'
import { AppDispatch, State } from '../redux/store';
import { getNews } from '../redux/posts/thunkApi';
import { IRequestParams } from '../types/common';
import { connect, useSelector } from 'react-redux';
import { PayloadAction } from '@reduxjs/toolkit';

interface Props {
  pGetNews: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
}
function MainScreen({pGetNews}: Props) {
    const colorScheme = useColorScheme();
    const { category } = useSelector((state: State) => state.shared);

    // useEffect(() => {
    //   pGetNews({
    //     page: 0,
    //     size: 1000,
    //     sort: "updatedAt",
    //     categoryId: category.id,
    //   });
    // }, [category]);
  return (
    <Navigation colorScheme={colorScheme} />

  )
}
const mapStateToProps = null;

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pGetNews: (params: IRequestParams) => dispatch(getNews(params)),
});
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(MainScreen)
);
