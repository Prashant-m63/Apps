import { AppHeader } from '@/components/app-header';
import { DashboardView } from '@/components/driver/dashboard-view';

export default function DriverDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <DashboardView />
      </main>
    </div>
  );
}
