import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const IconVector = props => (
  <Icon
    name={props.IconName}
    size={props.size ? props.size : 20}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{color: props.color ? props.color : '#000000'}}
  />
);
