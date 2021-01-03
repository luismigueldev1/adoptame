import React from "react"
import { ScrollView } from "react-native"

import { Container } from "../styled/commons"
import PetCard from "./PetCard"

const data = [
  {
    name: "Puppy",
    sex: "Macho",
    age: "8 Meses",
    city: "San Cristobal",
    state: "Tachira",
    country: "Venezuela",
    address: "Caneyes Cruz de la misión",
    photoURL:
      "https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
    photos: [
      "https://i.pinimg.com/originals/ce/89/a9/ce89a996b3e8e4c79a964670aa64007c.jpg",
      "https://cdn.elnacional.com/wp-content/uploads/2020/04/Pug-perro-coronavirus-Foto-Archivo.jpg",
      "https://www.hola.com/imagenes/estar-bien/20200831174373/razas-de-perro-mas-populares-pug-carlino/0-860-24/pug-t.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    name: "Mussi",
    sex: "Hembra",
    age: "3 Meses",
    city: "Tariba",
    state: "Tachira",
    country: "Venezuela",
    address: "Caneyes cancha de Caneyes",
    photoURL:
      "https://i.pinimg.com/originals/0c/a4/4f/0ca44fc644b419e7201a2f0f193165de.jpg",
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSy7LOui7_o7NFCc1Em9dDxyISWhGo2AfsEw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevJvGP4YivbEghwpM0AnRTqq09Gyu0Pxq9Q&usqp=CAU",
      "data:image/jpeg;base64,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"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  }
]

export default function PetList() {
  return (
    <ScrollView>
      <Container>
        <PetCard data={data[0]} />
        <PetCard data={data[1]} />
        <PetCard data={data[0]} />
        <PetCard data={data[1]} />
        <PetCard data={data[0]} />
        <PetCard data={data[1]} />
      </Container>
    </ScrollView>
  )
}
