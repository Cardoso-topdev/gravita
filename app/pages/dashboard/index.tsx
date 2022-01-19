import { WithAuthentication } from 'hoc/WithAuthentication';
import { Dash } from 'components/Dash';

const PrivateDashboard = WithAuthentication(Dash);

export default function Dashboard() {
  return <PrivateDashboard />;
}
