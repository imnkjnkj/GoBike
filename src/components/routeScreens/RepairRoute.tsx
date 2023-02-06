import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, View } from "react-native";

import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { MontserratText } from "../shared/StyledText";


interface Props {}
const RepairRoute = ({}: Props) => {
  return (
    <Layout>
      <MontserratText>Home</MontserratText>
    </Layout>
  );
};
export default React.memo(RepairRoute);
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
