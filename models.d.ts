interface Data {
  header: {
    logo_full: string;
    logo_mobile: string;
    menu: { name: string; path: string }[];
  };
  footer: {
    logo: string;
    menu: { name: string; path: string }[];
    social_link: { icon: string; link: string; name: string }[];
  };
  hero: {
    text: string;
    video: string;
  };
  products: Product[];
  values: {
    left: string;
    right: string;
  };
  contact: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    Phone: string;
    email: string;
  };
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string[];
  weight: string;
  description: string;
  new: boolean;
  featured: boolean;
  extra_content: string;
  price: string;
}
