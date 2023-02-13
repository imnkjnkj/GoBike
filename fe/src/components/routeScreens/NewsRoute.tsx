import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../layouts/Layout';
import Post from '../Post';

const NewsRoute = () => {
  return (
    <Layout>
      <Post />
    </Layout>
  )
}

export default React.memo(NewsRoute);