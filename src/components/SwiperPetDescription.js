import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Swiper from "react-native-swiper"
import { SwiperImage } from "../styled/SwiperPetDescription"
import { colorTheme } from "../theme/colors"

export default function SwiperPetDescription({ photos }) {
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons
        dotStyle={{
          backgroundColor: colorTheme.primary
        }}
        activeDotStyle={{
          backgroundColor: colorTheme.white
        }}
      >
        {photos.map((photo, index) => (
          <SwiperImage key={index} source={{ uri: photo }} />
        ))}
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250
  }
})
