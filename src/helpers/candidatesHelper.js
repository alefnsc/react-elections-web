import { percentFormat } from "./numberFormats";

export function filterElectionCandidates(election, candidates, cityObject) {
  const filteredCandidates = candidates.filter((item) =>
    election.map((e) => e.candidateId).includes(item.id)
  );

  const candidatesWithVotes = filteredCandidates.map((candidate) => {
    const votes = election.find((e) => e.candidateId === candidate.id).votes;
    const votesPercentage = percentFormat(votes / cityObject.presence);
    const elected = votes === Math.max(...election.map((e) => e.votes));
    const image = `https://cdn.glitch.global/66539e02-7b66-4501-92f1-41cbb2da3877/${candidate.username}.png`;
    return { ...candidate, votes, votesPercentage, elected, image };
  });
  return candidatesWithVotes;
}
