import React from 'react';

import {TouchableWithoutFeedback} from 'react-native';

// Styles and Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

const PayButton = ({onPress, focused}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Button
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}>
        <MaterialIcons
          name="attach-money"
          color={focused ? '#000' : '#fff'}
          size={30}
        />
        <S.Label focused={focused}>Pagar</S.Label>
      </S.Button>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
