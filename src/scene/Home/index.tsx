import React, {FC, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo';
import {Country, Button} from '../../components';
import {TextEmpty} from './home.styles';

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      countries {
        name
        currency
        emoji
        native
        phone
        capital
      }
    }
  }
`;

const Home: FC = () => {
  const [country, setCountry] = useState<Country.DTOCountry[]>([]);

  const {data} = useQuery(GET_CONTINENTS);

  return (
    <SafeAreaView style={{backgroundColor: 'rgb(32, 32, 36)', height: '100%'}}>
      <TextEmpty>Escolha um continente</TextEmpty>
      <ScrollView>
        {data.continents.map(({name, countries}: Continents.DTOContinents) => (
          <Button key={name} onPress={() => setCountry(countries)}>
            {name}
          </Button>
        ))}
        {country.map(
          ({
            name,
            currency,
            emoji,
            native,
            phone,
            capital,
          }: Country.DTOCountry) => (
            <Country
              key={name}
              {...{name, currency, emoji, native, phone, capital}}
            />
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
