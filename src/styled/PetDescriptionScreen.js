import styled from "styled-components/native"
import { colorTheme } from "../theme/colors"

export const PetName = styled.Text`
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 5px;
`
export const Description = styled.ScrollView`
  height: 80px;
  border: 1px solid ${colorTheme.secondary};
  border-radius: 4px;
`

export const DescriptionText = styled.Text`
  padding: 5px;
  font-size: 14px;
  text-align: justify;
`

export const PillsContainer = styled.View`
  display: flex;
  flex-direction: row;
`

export const Pills = styled.Text`
  background-color: ${colorTheme.warning};
  padding: 4px 10px;
  color: ${colorTheme.white};
  margin-right: 5px;
  border-radius: 16px;
  font-weight: bold;
`
export const DescriptionHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const SectionTitle = styled.Text`
  color: black;
  font-weight: bold;
  margin: 10px 0 0px;
`
export const AddressText = styled.Text`
  color: ${colorTheme.blackSecondary};
  font-size: 14px;
`
