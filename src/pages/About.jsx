import AboutCard from "../component/ui/AboutCard";
import countryData from "../api/facts.json";

const About = () => {
  return (
    <div className="flex flex-col gap-5 px-2.5 py-10 min-h-lvh">
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Here are the interesting facts <br /> we're proud of
      </h1>
      <AboutCard data={countryData} />
    </div>
  );
};

export default About;
