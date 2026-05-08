import { AppHeader } from '@/components/app-header';
import { LoginForm } from '@/components/driver/login-form';

export default function DriverLoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <LoginForm />
      </main>
    </div>
  );
}
