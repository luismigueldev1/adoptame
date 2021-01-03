import React, { useEffect, useState } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { colorTheme } from "../theme/colors"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"

import SwiperPetDescription from "../components/SwiperPetDescription"
import PetDescription from "../components/PetDescription"

export default function PetDescriptionScreen({ route, navigation }) {
  const [loading, setLoading] = useState(false)

  const allPhotos = route.params.data.photos.slice()
  allPhotos.unshift(route.params.data.photoURL)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={colorTheme.warning} size="large" />
      </View>
    )
  }

  return (
    <>
      <SwiperPetDescription photos={allPhotos} />
      <PetDescription data={route.params.data} />
    </>
  )
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
