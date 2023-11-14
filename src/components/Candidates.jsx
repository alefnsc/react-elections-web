export default function Candidates({ candidateNumber }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="font-medium my-2">{candidateNumber} Candidatos</span>
    </div>
  );
}
