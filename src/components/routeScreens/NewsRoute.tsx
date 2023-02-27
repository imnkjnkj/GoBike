import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../layouts/Layout';
import Post from '../Post';
import TabRoute from '../TabRoute';

const NewsRoute = () => {
  return (
    <Layout>
      <TabRoute />
    </Layout>
  )
}

export default React.memo(NewsRoute);