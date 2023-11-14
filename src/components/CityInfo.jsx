export default function CityInfo({
  cityName,
  votingPopulation,
  absence,
  presence,
}) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-lg my-2 font-bold">Eleições em {cityName}</h2>
      <div className="flex flex-row flex-wrap items-center justify-center space-x-2">
        <span className="font-semibold">Eleitores:</span>
        <span className="">{votingPopulation}</span>
        <span className="font-semibold">Abstenção:</span>
        <span className="">{absence}</span>
        <span className="font-semibold">Comparecimento:</span>
        <span className="">{presence}</span>
      </div>
    </div>
  );
}
