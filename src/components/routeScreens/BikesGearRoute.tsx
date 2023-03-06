import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../../layouts/Layout';
import TabRoute from '../TabRoute';

const BikesGearRoute = () => {
  const styles = StyleSheet.create({
    getStartedContainer: {
      alignItems: "center",
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightContainer: {
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: "center",
    },
    helpContainer: {
      marginTop: 15,
      marginHorizontal: 20,
      alignItems: "center",
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      textAlign: "center",
    },
  });
  return (
    <Layout>
      <TabRoute />
    </Layout>
  );
}

export default React.memo(BikesGearRoute);