import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold text-primary">BusTrackGo</h1>
        <p className="text-muted-foreground mt-2 text-lg">Your smart companion for city transit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link href="/passenger" className="group">
          <Card className="h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
            <CardHeader className="items-center text-center p-8">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <User className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl">Passenger</CardTitle>
              <CardDescription className="text-base mt-2">Find routes and track buses in real-time.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/driver/login" className="group">
          <Card className="h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
            <CardHeader className="items-center text-center p-8">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                 <Briefcase className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl">Driver</CardTitle>
              <CardDescription className="text-base mt-2">Login to manage your routes and status.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </main>
  );
}
