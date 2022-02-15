import { WithAuthentication } from 'hoc/WithAuthentication';
import { Discover } from 'components/discover';
import MainLayout from 'components/layout/MainLayout';

const PrivateDiscover = WithAuthentication(Discover);

export default function Dashboard() {
  return (
    <MainLayout>
      <PrivateDiscover />
    </MainLayout>
  );
}
