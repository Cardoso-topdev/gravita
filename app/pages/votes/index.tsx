import MainLayout from 'components/layout/MainLayout';
import { VotesWrapper } from 'components/votes/VoteWrapper';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateVotePage = WithAuthentication(VotesWrapper);

export default function VotesPage() {
  return (
    <MainLayout>
      <PrivateVotePage />
    </MainLayout>
  );
}
