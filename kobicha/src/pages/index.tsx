import { Featured, Products, Hero } from "../components";
interface Props {
  data: Data;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Hero data={data?.hero} />
      <Featured data={data.products} />
      <Products />
      <Values />
    </>
  );
};

export default Home;
