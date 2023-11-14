export default function Card({
  image,
  candidateName,
  votes,
  votesPercentage,
  elected,
}) {
  const electedText = elected ? "Eleito" : "Não Eleito";
  const textColor = elected ? "text-green-700" : "text-orange-400";
  return (
    <div
      className="shadow-lg p-6 m-2 w-60 h-42
                  flex flex-col items-center justify-center 
                  font-semibold ${fontSizeClassName}"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="flex flex-row space-x-10 ">
        <img
          className="h-full max-h-14 rounded-full object-contain"
          src={image}
        />
        <div className="flex flex-col items-center justify-center ">
          <span className={textColor}>{votesPercentage}</span>
          <span className="text-xs font-thin">{votes} votos</span>
        </div>
      </div>
      <div className="flex flex-row my-2">
        <span className="font-normal text-xl">{candidateName}</span>
      </div>
      <span className={textColor}>{electedText}</span>
    </div>
  );
}
