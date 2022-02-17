import { WithAuthentication } from 'hoc/WithAuthentication';
import { Principle } from 'components/principles';
import MainLayout from 'components/layout/MainLayout';

const PrivatePrinciple = WithAuthentication(Principle);

export default function Dashboard() {
  return (
    <MainLayout>
      <PrivatePrinciple />
    </MainLayout>
  );
}
