/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TextHeaderMargin = styled.View`
  margin-right: 15px;
  margin-left: 15px;
`;

export const PaddingLR = styled.View`
  padding-left: ${props => (props.profile ? '30px' : '15px')};
  padding-right: ${props => (props.profile ? '30px' : '15px')};
  display: flex;
`;

export const HeaderText = styled.Text`
  font-size: ${props => (props.set ? props.set : 30)}px;
  font-weight: bold;
  margin-right: 10px;
  color: ${props => (props.active ? '#C7C7C8' : '#000000')};
`;

export const MarginTop = styled.View`
  margin-top: ${props => props.px && props.px}px;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.flexStart ? 'flex-start' : 'space-between'};
`;

export const MarginLeft = styled.View`
  margin-left: 10px;
`;

export const FlexDiretcRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const TextBold = styled.Text`
  font-size: ${props => (props.size ? props.size : 14)}px;
  font-weight: bold;
`;

export const ButtonStyle = styled.TouchableOpacity`
  background-color: #fed271;
  margin-left: 5px;
  margin-right: 5px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const MarginBottom = styled.View`
  margin-bottom: ${props => props.bottom && props.bottom}px;
`;

export const CardProductStyle = styled.View`
  width: 47%;
  background-color: white;
  margin-top: 17px;
  border-radius: 5px;
  display: flex;
`;

export const FlexProductStyle = styled.View`
  align-items: center;
`;

export const FontDescription = styled.Text`
  font-size: ${props => (props.size ? props.size : 12)}px;
  color: #c7c7c8;
  font-weight: bold;
`;

export const FontSize = styled.Text`
  font-size: ${props => props.size && props.size}px;
`;

export const JustifyCenter = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const CardImageBag = styled.View`
  background-color: #ffffff;
  margin-top: 15px;
  border-radius: 5px;
  width: 100px;
  height: 100px;
`;

export const Hr = styled.View`
  height: 2px;
  background-color: #c7c7c8;
  margin-top: 20px;
  margin-bottom: 7px;
`;

export const FlexIncrest = styled.View`
  margin-top: 74px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
`;

export const IconIncrest = styled.TouchableOpacity`
  width: 35px;
  border-color: #c7c7c8;
  padding: 10px;
  border-width: 1px;
  border-radius: 50px;
  text-align: center;
  margin-left: 12px;
  margin-right: 12px;
`;

export const IconCenter = styled(Icon)`
  text-align: center;
  color: #696969;
`;

export const FontGray = styled.Text`
  font-size: ${props => props.size && props.size}px;
  color: #696969;
  font-weight: bold;
`;
