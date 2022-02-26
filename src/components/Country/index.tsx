import React, {FC} from 'react';
import {Content, Text} from './country.styles';

const Country: FC<Country.DTOCountry> = ({
  name,
  capital,
  currency,
  emoji,
  native,
  phone,
}) => {
  return (
    <Content>
      <Text>Nome: {name}</Text>
      <Text>Capital: {capital}</Text>
      <Text>Dinheiro: {currency}</Text>
      <Text>Bandeira: {emoji}</Text>
      <Text>Nativo: {native}</Text>
      <Text>DDD: {phone}</Text>
    </Content>
  );
};

export default Country;
