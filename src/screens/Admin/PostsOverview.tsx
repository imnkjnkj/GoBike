import {View,Text,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import TablePosts from '../../components/TablePosts'
import {State} from '../../redux/store'

const postData=[
  {
    id: "1",
    title: "Mountain Bike for Sale",
    createAt: new Date("2023-05-28"),
    updateAt: new Date("2023-05-28"),
    view: 200,
    likes: 50,
    comments: 10,
    status: true,
    thumbnail: "https://i.imgur.com/61BqlMK.png",
  },
  {
    id: "2",
    title: "Road Bike - Excellent Condition",
    createAt: new Date("2023-05-27"),
    updateAt: new Date("2023-05-27"),
    view: 150,
    likes: 30,
    comments: 5,
    status: true,
    thumbnail: "https://i.imgur.com/hvpIQTM.png",
  },
  {
    id: "3",
    title: "Vintage Bicycle - Collector's Item",
    createAt: new Date("2023-05-26"),
    updateAt: new Date("2023-05-26"),
    view: 100,
    likes: 20,
    comments: 8,
    status: true,
    thumbnail: "https://i.imgur.com/KyNp7zt.png",
  },
]
export default function PostsOverview() {
  return (
    <MainLayout>
      <TablePosts />
    </MainLayout>
  )
}
