import MainLayout from 'components/layout/MainLayout';
import { VotesWrapper } from 'components/votes/VoteWrapper';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateVotePage = WithAuthentication(VotesWrapper);

export default function Votes() {
  return (
    <MainLayout>
      <PrivateVotePage />
    </MainLayout>
  );
}
