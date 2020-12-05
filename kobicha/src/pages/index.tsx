import {  Hero } from "../components";
interface Props {
  data: Data;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Hero data={data?.hero} />
    </>
  );
};

export default Home;
