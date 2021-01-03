import styled from "styled-components/native"

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`
export const CardImage = styled.Image`
  height: 100%;
  width: 50%;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
export const CardDescription = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding: 5px 10px;
`

export const Header = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-end;
`

export const Name = styled.Text`
  font-size: 22px;
  font-weight: 700;
`

export const Age = styled.Text`
  font-size: 18px;
  font-weight: 700;
`
export const Sex = styled.Text`
  font-size: 14px;
  font-weight: 300;
`
export const Address = styled.Text`
  font-size: 12px;
  font-weight: 100;
  font-style: italic;
`
