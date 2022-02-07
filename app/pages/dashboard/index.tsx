import { WithAuthentication } from 'hoc/WithAuthentication';
import { Dash } from 'components/Dash';
import MainLayout from 'components/layout/MainLayout';

const PrivateDashboard = WithAuthentication(Dash);

export default function Dashboard() {
  return (
    <MainLayout>
      <PrivateDashboard />
    </MainLayout>
  );
}
