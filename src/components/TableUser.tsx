import { View, StyleSheet } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";
import { State } from "../redux/store";

export default function TableUser() {
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: "#DCDCDC",
    },
  });
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite Food</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Krishna</DataTable.Cell>
        <DataTable.Cell>Uttapam</DataTable.Cell>
        <DataTable.Cell>26</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Vanshika</DataTable.Cell>
        <DataTable.Cell>Brownie</DataTable.Cell>
        <DataTable.Cell>20</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Teena</DataTable.Cell>
        <DataTable.Cell>Pizza</DataTable.Cell>
        <DataTable.Cell>24</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}
