import React from "react"
import { ScrollView, View } from "react-native"

import { Container } from "../styled/commons"
import {
  PetName,
  Description,
  DescriptionHeader,
  DescriptionText,
  PillsContainer,
  Pills,
  SectionTitle,
  AddressText
} from "../styled/PetDescriptionScreen"

export default function PetDescriptionComponent({ data }) {
  return (
    <ScrollView>
      <Container>
        <View>
          <DescriptionHeader>
            <PetName>{data.name} </PetName>
            <PillsContainer>
              <Pills>{data.age}</Pills>
              <Pills>{data.sex}</Pills>
            </PillsContainer>
          </DescriptionHeader>
          <SectionTitle>Descripción:</SectionTitle>
          <Description>
            <DescriptionText>{data.description} </DescriptionText>
          </Description>
          <SectionTitle>Dirección:</SectionTitle>
          <AddressText>{data.address}</AddressText>
          <AddressText>{data.city}</AddressText>
          <AddressText>
            {data.state} - {data.country}
          </AddressText>

          <SectionTitle>Telefonos:</SectionTitle>
          <AddressText>0424-1234567 / 0276-1234567</AddressText>
        </View>
      </Container>
    </ScrollView>
  )
}
