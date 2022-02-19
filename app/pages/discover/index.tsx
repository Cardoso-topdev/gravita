import { Discover } from 'components/discover';
import MainLayout from 'components/layout/MainLayout';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateDiscover = WithAuthentication(Discover);

export default function DiscoverPage() {
  return (
    <MainLayout>
      <PrivateDiscover />
    </MainLayout>
  );
}
