import React from "react"
import { SafeAreaView } from "react-native"

//components
import PetList from "../components/PetList"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <PetList />
    </SafeAreaView>
  )
}
