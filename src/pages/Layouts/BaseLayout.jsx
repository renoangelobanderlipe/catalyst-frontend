import { AppLayout } from './AppLayout';
import { ProtectedLayout } from './ProtectedLayout';

export const BaseLayout = ({ children }) => {
  return (
    <>
      <AppLayout>
        <ProtectedLayout>
          kajshdvbas
        </ProtectedLayout>
      </AppLayout>
    </>
  );
}
