import { WithAuthentication } from 'hoc/WithAuthentication';
import { Collaborate } from 'components/collaborate';
import MainLayout from 'components/layout/MainLayout';

const PrivateCollaborate = WithAuthentication(Collaborate);

export default function Dashboard() {
  return (
    <MainLayout>
      <PrivateCollaborate />
    </MainLayout>
  );
}
