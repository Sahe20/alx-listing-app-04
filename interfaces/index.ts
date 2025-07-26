export interface PropertyProps {
  name: string;
    address: {
      state: string;
      city: string;
      country: string;
    },
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    },
    image: string,
    discount?: string;
}

export interface FooterLinksProps {
  title: string;
  links: {
    first: string;
    second: string;
    third: string;
    fourth?: string;
    fifth?: string;
  }
}
export interface PillProps {
  label: string;
}
