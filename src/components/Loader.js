import React from "react"
import { View, ActivityIndicator } from "react-native"
import { colorTheme } from "../theme/colors"

export default function Loader() {
  return (
    <View>
      <ActivityIndicator color={colorTheme.warning} size="large" />
    </View>
  )
}
