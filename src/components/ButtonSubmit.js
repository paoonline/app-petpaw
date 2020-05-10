import React from 'react';
import {ButtonStyle, TextBold} from './styleComponent';
import {buttonShadow} from './styleObject';

export const ButtonSubmit = props => {
  return (
    <ButtonStyle onPress={props.onPress} style={buttonShadow}>
      <TextBold>{props.text}</TextBold>
    </ButtonStyle>
  );
};
