import styled from "styled-components/native"
import { colorTheme } from "../theme/colors"
export const Container = styled.View`
  padding: 10px;
`

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${colorTheme.white};
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`
