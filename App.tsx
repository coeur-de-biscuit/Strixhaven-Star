import { AuthProvider } from './src/contexts/Auth/AuthProvider';
import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
