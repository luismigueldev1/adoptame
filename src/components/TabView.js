import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"

export default function TabView() {
  return (
    <View style={styles.filter}>
      <View>
        <MaterialCommunityIcon name="dog" size={26} color="#FFF" />
        <Text style={styles.filterText}>Perros</Text>
      </View>

      <View>
        <MaterialCommunityIcon name="cat" size={26} color="#FFF" />
        <Text style={styles.filterText}>Gatos</Text>
      </View>

      <View>
        <MaterialCommunityIcon name="rabbit" size={26} color="#FFF" />
        <Text style={styles.filterText}>Otros</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },

  animals: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#1D3557",
    padding: 12
  },

  headerText: {
    color: "#FFF",
    fontSize: 24
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 2,
    backgroundColor: "#1D3557"
  },
  filterText: {
    color: "#FFF",
    fontSize: 10
  }
})
