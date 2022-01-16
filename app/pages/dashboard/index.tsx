import { WithAuthentication } from 'hoc/WithAuthentication';
import { Dash } from 'components/Dash';

const PrivateRoute = WithAuthentication(Dash);

export default function Dashboard() {
  return <PrivateRoute />;
}
