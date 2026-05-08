import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Route, MapPin, Clock } from 'lucide-react';

const upcomingStops = [
  { name: 'Grand Central Station', time: '10:45 AM' },
  { name: 'Times Square', time: '10:55 AM' },
  { name: 'Central Park South', time: '11:05 AM' },
  { name: 'Museum of Modern Art', time: '11:15 AM' },
];

export function DashboardView() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold">Driver Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe!</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-md py-2 px-4">
            <User className="mr-2 h-5 w-5" />
            ID: BUS-12345
          </Badge>
          <Badge variant="default" className="text-md py-2 px-4">
            Active
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Route className="text-primary" />
              Current Route Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Route Name</p>
              <p className="text-xl font-semibold">Route 42 - Downtown Express</p>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold">On Time</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Stop</p>
                <p className="font-semibold">Grand Central Station</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <MapPin className="text-primary" />
              Upcoming Stops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {upcomingStops.map((stop, index) => (
                <li key={index} className="flex justify-between items-center transition-colors hover:bg-muted -mx-2 px-2 py-1 rounded-md">
                  <span className="font-medium">{stop.name}</span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{stop.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
