import { Header } from "../components/Header";
import { Main } from "../components/Main";
import SelectCity from "../components/SelectCity";
import Loading from "../components/Loading";
import { apiGetAllData } from "../services/apiService";
import { useState, useEffect } from "react";
import CityInfo from "../components/CityInfo";
import Candidates from "../components/Candidates";
import ElectionCards from "../components/ElectionCards";
import Board from "../components/Board";
import Card from "../components/Card";
import { filterElectionCandidates } from "../helpers/candidatesHelper";
import { numberFormat } from "../helpers/numberFormats";
import Error from "../components/Error";
export default function ReactElectionsPage() {
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("DEFAULT");
  const [cityObject, setCityObject] = useState({});
  const [election, setElection] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [allData, setAllData] = useState([]);

  const { name, votingPopulation, absence, presence } = cityObject;

  async function handleCityChange(city) {
    setSelectedCity(city);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiGetAllData();
        setAllData(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
    setAllCities(allData.cities);
    setAllCandidates(allData.candidates);
  }, [allData.candidates, allData.cities]);

  useEffect(() => {
    if (selectedCity && selectedCity !== "DEFAULT") {
      const cityObject = allData.cities.find(
        (city) => city.id === selectedCity
      );
      setCityObject(cityObject);
      const electionObject = allData.election.filter(
        (election) => election.cityId === selectedCity
      );
      setElection(electionObject);
    }
  }, [allData, selectedCity]);

  useEffect(() => {
    if (election.length > 0) {
      const candidatesWithVotes = filterElectionCandidates(
        election,
        allCandidates,
        cityObject
      );
      setCandidates(candidatesWithVotes);
    }
  }, [election, cityObject, allCandidates]);

  let mainJsx = (
    <div className="flex justify-center my-4">
      <Loading />
    </div>
  );

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }

  if (!loading && !error) {
    mainJsx = (
      <>
        <SelectCity selectedValue={selectedCity} onChange={handleCityChange}>
          {allCities}
        </SelectCity>
        <Board>
          <CityInfo
            votingPopulation={numberFormat(votingPopulation)}
            absence={numberFormat(absence)}
            presence={numberFormat(presence)}
            cityName={name}
          />
          <Candidates candidateNumber={election.length} />
          <ElectionCards>
            {selectedCity != "DEFAULT" &&
              candidates.length > 0 &&
              candidates.map(
                ({ id, image, name, votes, votesPercentage, elected }) => {
                  return (
                    <Card
                      key={id}
                      image={image}
                      candidateName={name}
                      votes={numberFormat(votes)}
                      votesPercentage={votesPercentage}
                      elected={elected}
                    />
                  );
                }
              )}
          </ElectionCards>
        </Board>
      </>
    );
  }

  return (
    <>
      <Header>
        <h1>REACT-ELECTIONS-WEB</h1>
      </Header>

      <Main>{mainJsx}</Main>
    </>
  );
}
