export default function CandidateInfo({ children: ElectionCards = [] }) {
  return (
    <div className="p-2 flex flex-row items-center justify-center flex-wrap">
      {ElectionCards}
    </div>
  );
}
