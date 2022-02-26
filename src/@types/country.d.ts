declare namespace Country {
  type DTOCountry = {
    name: string;
    currency: string;
    emoji: string;
    native: string;
    phone: string;
    capital: string;
  };
}

declare namespace Continents {
  type DTOContinents = {
    name: string;
    countries: Country.DTOCountry[];
  };
}
