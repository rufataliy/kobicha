const header = {
  logo_full: "/img/logo-full.png",
  logo_mobile: "/img/logo-mobile.png",
  menu: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "#contact" },
  ],
};
const hero = {
  text: `# Coffee 

Whether you enjoy a cold brew, a latte, or a double shot of espresso, if you've landed on this page, chances are you are an enthusiastic fan of coffee. And so, in honor of International Coffee Day on September 29 (which we know you'll be celebrating), we’ve rounded up the best funny coffee quotes and caffeine-related humor we could find on the internet. Just make sure you have a fresh pot brewing nearby: After reading through these delightful sayings, you'll definitely be ready to fill up your mug.`,
  video: "/video/hero-video-bg.mp4",
};

const products: Product[] = [
  {
    id: "01",
    title: "Colombian Fair Trade Organic Coffee",
    subtitle: "Light roast",
    image: "/img/package-brown.png",
    weight: "65 ML",
    description: "",
    price: "14.25",
    new: true,
    featured: true,
    extra_content: "#extra content here md format",
  },
  {
    id: "02",
    title: "Colombian Supremo Coffee",
    subtitle: "Medium roast",
    image: "/img/package-dark.png",
    weight: "65 ML",
    description: "",
    price: "15.79",
    new: true,
    featured: true,
    extra_content: "#extra content here md format",
  },
  {
    id: "03",
    title: "Kenya AA Coffee",
    subtitle: "Medium roast",
    image: "/img/package-green.png",
    weight: "65 ML",
    description: "",
    price: "13.80",
    new: true,
    featured: true,
    extra_content: "#extra content here md format",
  },
  {
    id: "04",
    title: "Coffee title",
    subtitle: "bla bla bla",
    image: "/img/package-red.png",
    weight: "65 ML",
    description: "",
    price: "13.80",
    new: true,
    featured: true,
    extra_content: "#extra content here md format",
  },
  {
    id: "05",
    title: "Guatemalan Antigua Coffee",
    subtitle: "bla bla bla",
    image: "/package-1.jpg",
    description: "",
    weight: "65 ML",
    price: "12.63",
    new: true,
    featured: false,
    extra_content: "#extra content here md format",
  },
  {
    id: "06",
    title: "Tanzania Peaberry Coffee",
    subtitle: "bla bla bla",
    image: "/package-1.jpg",
    description: "",
    weight: "65 ML",
    price: "16.10",
    new: true,
    featured: false,
    extra_content: "#extra content here md format",
  },
  {
    id: "07",
    title: "Coffee title",
    subtitle: "bla bla bla",
    image: "/package-1.jpg",
    description: "",
    weight: "65 ML",
    price: "13.09",
    new: true,
    featured: false,
    extra_content: "#extra content here md format",
  },
];

const values = {
  right: "md format here",
  left: "md format here",
};

export const data: Data = {
  header,
  products,
  hero,
  values,
};
