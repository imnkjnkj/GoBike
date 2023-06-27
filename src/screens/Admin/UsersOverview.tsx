import {View,Text,SafeAreaView} from 'react-native'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import TableUser from '../../components/TableUser'

export default function UsersOverview() {
  return (
    <MainLayout>
      <TableUser />
    </MainLayout>
  )
}