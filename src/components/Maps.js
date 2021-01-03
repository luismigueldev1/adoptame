import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import Geolocation from "@react-native-community/geolocation"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"

export default function HomeScreen() {
  const [location, setLocation] = useState({
    error: null,
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    Geolocation.getCurrentPosition(
      location =>
        setLocation({
          error: null,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }),
      error => {
        setLocation({ error: error.message })
      },
      {}
    )
  }, [])

  const origin = { latitude: 7.8299855, longitude: -72.2524913 }
  const destination = { latitude: 7.8319604, longitude: -72.2502089 }
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: destination.latitude,
        longitude: destination.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
      }}
    >
      <Marker
        coordinate={location}
        title="Home"
        description="Home is the place that you can't walk away from."
      />
    </MapView>
  )
}
const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
