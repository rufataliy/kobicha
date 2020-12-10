const header = {
  logo_full: "/img/logo-full.png",
  logo_mobile: "/img/logo-mobile.png",
  menu: [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Products", path: "#quick-view" },
    { name: "Contact", path: "#contact" },
  ],
};
const footer = {
  logo: "/img/logo-footer.png",
  menu: [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Products", path: "#quick-view" },
    { name: "Contact", path: "#contact" },
  ],
  social_link: [
    {
      icon: "/img/facebook.png",
      name: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: "/img/instagram.png",
      name: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      icon: "/img/twitter.png",
      name: "Twitter",
      link: "https://twitter.com/home",
    },
    {
      icon: "/img/linkedin.png",
      name: "Linkedin",
      link: "https://twitter.com/home",
    },
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
    image: ["/img/package-brown.png", "/img/coffee-beans-white.jpg"],
    weight: "65 ML",
    description: `## Specifity

**Grind** - 10

**Roast** - Medium

**Green Coffee / Ungrinded** - NO

This 100% organic & Fair Trade Colombian coffee comes from the Popayan region. It exhibits the rounded harmonious flavor that is typical of the best Colombian coffees. It has a nice bright acidity with some herbal notes in the finish and an intense, fruity taste, without the bitterness. Fresh and delicate, faultless in quality, it is a coffee to discover.`,
    price: "14.25",
    new: true,
    featured: true,
    extra_content: `### Details

* **Altitude**: 1500-1650 meters above sea level
* **Harvest**: October - February
* **Processing**: Washed Sun Dried
* **Aroma**: Fruity
* **Flavour**: Sweet/Caramel Tart Fruity
* **Body**: Medium
* **Acidity**: Balanced
    `,
  },
  {
    id: "02",
    title: "Colombian Supremo Coffee",
    subtitle: "Medium roast",
    image: ["/img/package-dark.png", "/img/coffee-beans-white.jpg"],
    weight: "65 ML",
    description: `## Specifity

**Grind** - 10

**Roast** - Medium

**Green Coffee / Ungrinded** - NO

This 100% organic & Fair Trade Colombian coffee comes from the Popayan region. It exhibits the rounded harmonious flavor that is typical of the best Colombian coffees. It has a nice bright acidity with some herbal notes in the finish and an intense, fruity taste, without the bitterness. Fresh and delicate, faultless in quality, it is a coffee to discover.`,
    price: "15.79",
    new: false,
    featured: true,
    extra_content: `### Details

* **Altitude**: 1500-1650 meters above sea level
* **Harvest**: October - February
* **Processing**: Washed Sun Dried
* **Aroma**: Fruity
* **Flavour**: Sweet/Caramel Tart Fruity
* **Body**: Medium
* **Acidity**: Balanced
    `,
  },
  {
    id: "03",
    title: "Kenya AA Coffee",
    subtitle: "Medium roast",
    image: ["/img/package-green.png", "/img/coffee-beans-white.jpg"],
    weight: "65 ML",
    description: `## Specifity

**Grind** - 10

**Roast** - Medium

**Green Coffee / Ungrinded** - NO

This 100% organic & Fair Trade Colombian coffee comes from the Popayan region. It exhibits the rounded harmonious flavor that is typical of the best Colombian coffees. It has a nice bright acidity with some herbal notes in the finish and an intense, fruity taste, without the bitterness. Fresh and delicate, faultless in quality, it is a coffee to discover.`,
    price: "13.80",
    new: true,
    featured: true,
    extra_content: `### Details

* **Altitude**: 1500-1650 meters above sea level
* **Harvest**: October - February
* **Processing**: Washed Sun Dried
* **Aroma**: Fruity
* **Flavour**: Sweet/Caramel Tart Fruity
* **Body**: Medium
* **Acidity**: Balanced
    `,
  },
  {
    id: "04",
    title: "Coffee title",
    subtitle: "bla bla bla",
    image: ["/img/package-red.png", "/img/coffee-beans-white.jpg"],
    weight: "65 ML",
    description: `## Specifity

**Grind** - 10

**Roast** - Medium

**Green Coffee / Ungrinded** - NO

This 100% organic & Fair Trade Colombian coffee comes from the Popayan region. It exhibits the rounded harmonious flavor that is typical of the best Colombian coffees. It has a nice bright acidity with some herbal notes in the finish and an intense, fruity taste, without the bitterness. Fresh and delicate, faultless in quality, it is a coffee to discover.`,
    price: "13.80",
    new: true,
    featured: true,
    extra_content: `### Details

* **Altitude**: 1500-1650 meters above sea level
* **Harvest**: October - February
* **Processing**: Washed Sun Dried
* **Aroma**: Fruity
* **Flavour**: Sweet/Caramel Tart Fruity
* **Body**: Medium
* **Acidity**: Balanced
    `,
  },
  {
    id: "05",
    title: "POUR OVER",
    subtitle: "Coffee maker with permanent filter",
    image: ["/img/cofee-press.png"],
    description: `## Description
    
Pour over is the key to making richer, bolder coffee from the comfort of your home. Its design-led aesthetic is a stylish addition to any kitchen, but it’s the resulting full-bodied, smooth tasting coffee with a robust aroma that will win your heart.
    .`,
    weight: "65 ML",
    price: "12.63",
    new: false,
    featured: false,
    extra_content: `### Use & Care

Wash in warm, soapy water before first use and dry thoroughly. The glass carafe and stainless steel filter are dishwasher safe.
    `,
  },
  {
    id: "06",
    title: "Wheat Straw Cup",
    subtitle: "Stainless Steel",
    image: ["/img/cup.png"],
    description: `## Specifity

**Material** - Stainless Steel

**Capacity** - 220 ml

**Height** - 7cm / 2.8in

**Weight** - 80g

This 100% organic & Fair Trade Colombian coffee comes from the Popayan region. It exhibits the rounded harmonious flavor that is typical of the best Colombian coffees. It has a nice bright acidity with some herbal notes in the finish and an intense, fruity taste, without the bitterness. Fresh and delicate, faultless in quality, it is a coffee to discover.`,
    weight: "65 ML",
    price: "16.10",
    new: false,
    featured: false,
    extra_content: ``,
  },
  {
    id: "07",
    title: "French press",
    subtitle: "Coffee Maker",
    image: ["/img/french-press.png"],
    description: `## Description

Savor authentic espresso-based and gourmet coffee drinks created with the classically styled french press coffee maker.`,
    weight: "65 ML",
    price: "13.09",
    new: false,
    featured: false,
    extra_content: `### Details

* **Size**: 3 cups
* **Washing**: top-rack dishwasher safe
    `,
  },
];

const values = {
  right: `## Coffee 

To be the leading Coffee Roaster and purveyor of gourmet coffees and food service products around the world by offering the guiding principles of integrity, quality, service and relationship.`,
  left: `## Customers
  
Our focus is our customers, both internal & external. Everything we do revolves around ensuring that all our customers have positive and productive contact with us. 
  `,
};

const contact = {
  street: "62  Howard Street",
  city: "Grand Rapids",
  state: "Michigan",
  zip_code: "49503",
  Phone: "616-502-5593",
  email: "contact.kobicha.shop",
};

export const data: Data = {
  header,
  products,
  hero,
  values,
  contact,
  footer,
};
