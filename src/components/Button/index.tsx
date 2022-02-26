import React, {FC} from 'react';
import {Touchable, Text} from './button.styles';

type Props = {
  onPress: () => void;
};

const Button: FC<Props> = ({onPress, children}) => {
  return (
    <Touchable onPress={onPress}>
      <Text>{children}</Text>
    </Touchable>
  );
};

export default Button;
