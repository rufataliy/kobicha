interface Data {
  header: {
    logo_full: string;
    logo_mobile: string;
    menu: { name: string; path: string }[];
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
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  weight: string;
  description: string;
  new: boolean;
  extra_content: string;
}
