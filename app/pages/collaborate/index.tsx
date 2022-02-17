import { ProfileWrapper } from 'components/profiles/ProfileWrapper';
import MainLayout from 'components/layout/MainLayout';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateCollaboratePage = WithAuthentication(ProfileWrapper);

export default function CollaboratePage() {
  return (
    <MainLayout>
      <PrivateCollaboratePage />
    </MainLayout>
  );
}
