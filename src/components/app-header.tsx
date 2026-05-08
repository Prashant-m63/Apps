import Link from 'next/link';
import { Bus } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary transition-opacity hover:opacity-80">
            <Bus className="w-7 h-7" />
            <span className="font-headline">BusTrackGo</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
