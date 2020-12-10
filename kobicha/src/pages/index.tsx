import { Contact, Featured, Products, Values, Hero } from "../components";

interface Props {
  data: Data;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Hero data={data?.hero} />
      <Featured data={data.products} />
      <Products data={data.products} />
      <Contact data={data.contact} />
    </>
  );
};

export default Home;
