import { View, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { connect, useSelector } from "react-redux";
import { State } from "../redux/store";
import { IDashboarData } from "../types/posts";
import { MontserratText } from "./shared/StyledText";

interface ITablePostsProp {
  pNewsList: IDashboarData;
}
function TablePosts({ pNewsList }: ITablePostsProp) {
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    header: {
      fontWeight: "bold",
      width: "100%",
    },
    cell: {
      maxWidth: "100%",
    },
    tableHeader: {
      backgroundColor: "#DCDCDC",
    },
  });
  return (
    <ScrollView horizontal>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={{ width: "10%" }}> </DataTable.Title>
          <DataTable.Title style={{ width: "40%" }}>Title</DataTable.Title>
          <DataTable.Title style={{ width: "30%" }}>Thumbnail</DataTable.Title>
          <DataTable.Title style={{ width: "20%" }}>Create At</DataTable.Title>
          <DataTable.Title style={{ width: "20%" }}>Update At</DataTable.Title>
          <DataTable.Title style={{ width: "10%" }}>Views</DataTable.Title>
          <DataTable.Title style={{ width: "10%" }}>Likes</DataTable.Title>
          <DataTable.Title style={{ width: "10%" }}>Comments</DataTable.Title>
          <DataTable.Title style={{ width: "10%" }}>Status</DataTable.Title>
        </DataTable.Header>
        {pNewsList.content.map((item, i) => (
          <DataTable.Row key={i}>
            <DataTable.Cell style={{ maxWidth: "10%" }}>{i + 1}</DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "40%" }}>
              <MontserratText >{item.title}</MontserratText>
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "30%" }}>
              {/* <Image source={{ uri: item.thumbnail }}></Image> */}
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "20%" }}>
              <MontserratText>{item.createdAt.toLocaleString()}</MontserratText>
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "20%" }}>
              <MontserratText>{item.updatedAt.toLocaleString()}</MontserratText>
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "10%" }}>
              {<MontserratText>2000</MontserratText>}
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "10%" }}>
              {<MontserratText>200</MontserratText>}
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "10%" }}>
              {<MontserratText>20</MontserratText>}
            </DataTable.Cell>
            <DataTable.Cell style={{ maxWidth: "10%" }}>
              <MontserratText>Active</MontserratText>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
}
const mapStateToProps = (state: State) => ({
  pNewsList: state.posts.dashboardData,
});
export default connect(mapStateToProps, null)(TablePosts);
