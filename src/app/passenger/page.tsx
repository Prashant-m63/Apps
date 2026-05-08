import { AppHeader } from '@/components/app-header';
import { RoutePlanner } from '@/components/passenger/route-planner';
import { MapView } from '@/components/passenger/map-view';
import { AdBanner } from '@/components/ad-banner';

export default function PassengerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <RoutePlanner />
          </div>
          <div className="lg:col-span-2">
            <MapView />
          </div>
        </div>
      </div>
      <AdBanner />
    </div>
  );
}
