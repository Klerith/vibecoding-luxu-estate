export interface HeroDict {
  title_start: string;
  title_highlight: string;
  title_end: string;
  subtitle: string;
  search_placeholder: string;
  search_button: string;
}

export interface CommonDict {
  featured_properties: string;
  new_in_market: string;
  view_details: string;
  any_type: string;
  property_types: {
    villa: string;
    house: string;
    apartment: string;
    condo: string;
  };
  beds: string;
  baths: string;
}

export interface PropertyDetailDict {
  schedule_visit: string;
  contact_agent: string;
  property_features: string;
  square_meters: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  about_home: string;
  read_more: string;
  amenities: string;
  smart_home: string;
  swimming_pool: string;
  heating_cooling: string;
  ev_charging: string;
  private_gym: string;
  wine_cellar: string;
  estimated_payment: string;
  starting_from: string;
  down: string;
  calculate_mortgage: string;
  map_unavailable: string;
  top_rated_agent: string;
  footer_rights: string;
}

export interface NavbarDict {
  buy: string;
  rent: string;
  sell: string;
  saved_homes: string;
}

export interface Dictionary {
  navbar: NavbarDict;
  hero: HeroDict;
  common: CommonDict;
  property_detail: PropertyDetailDict;
}
