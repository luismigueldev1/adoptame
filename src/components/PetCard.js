import React from "react"
import { useNavigation } from "@react-navigation/native"

import {
  Card,
  CardImage,
  CardDescription,
  Header,
  Name,
  Age,
  Sex,
  Address
} from "../styled/PetCard"

export default function PetCard({ data }) {
  const navigation = useNavigation()
  return (
    <Card
      onPress={() => {
        navigation.navigate("PetDescriptionScreen", { data })
      }}
    >
      <CardImage source={{ uri: data.photoURL }} />
      <CardDescription>
        <Header>
          <Name>{data.name}</Name>
          <Age>{data.age}</Age>
          <Sex>{data.sex}</Sex>
        </Header>
        <Address>
          {data.state}, {data.country}
        </Address>
      </CardDescription>
    </Card>
  )
}
