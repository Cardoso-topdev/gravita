import { Settings } from 'components/settings/Settings';
import { WithAuthentication } from 'hoc/WithAuthentication';
import MainLayout from 'components/layout/MainLayout';

const PrivateSettingsPage = WithAuthentication(Settings);

export default function SettingsPage() {
  return (
    <MainLayout>
      <PrivateSettingsPage />
    </MainLayout>
  );
}
