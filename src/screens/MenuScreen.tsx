import {SafeAreaView,StyleSheet,View} from "react-native";
import {MenuHeader} from "../components/MenuHeader";
import Layout from "../layouts/Layout";
import {useSelector} from "react-redux";
import {State} from "../redux/store";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Search from "../components/Search";
import Constant from "expo-constants";

export default function MenuScreen() {
  const {theme}=useSelector((state: State) => state.shared);

  const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: Constant.statusBarHeight
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
  });
  return (
    <View style={styles.container}>
      <View style={{alignItems: "center"}}>
        <MenuHeader />
        <Search />
      </View>

      <Layout style={styles.wrapper}>
        <Menu />
        <Contact />
      </Layout>
    </View>
  );
}
