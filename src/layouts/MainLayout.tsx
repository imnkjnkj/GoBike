import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { MenuHeader } from "../components/MenuHeader";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
interface IMainLayout {
  children: React.ReactNode;
  isShowLogo?: boolean;
}
export default function MainLayout({ children, isShowLogo }: IMainLayout) {
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
    wrapper: {
      paddingHorizontal: 10,
    },
    noLogo:{
      marginTop: 50
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      {isShowLogo && (
        <View style={{ alignItems: "center" }}>
          <MenuHeader />
        </View>
      )}
      <Layout style={[styles.wrapper,isShowLogo && styles.noLogo ]}>{children}</Layout>
    </SafeAreaView>
  );
}
