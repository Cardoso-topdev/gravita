import { WithAuthentication } from 'hoc/WithAuthentication';
import { Build } from 'components/build';
import MainLayout from 'components/layout/MainLayout';

const PrivateBuild = WithAuthentication(Build);

export default function Dashboard() {
  return (
    <MainLayout>
      <PrivateBuild />
    </MainLayout>
  );
}
