import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function MapView() {
  return (
    <Card className="h-[400px] lg:h-[calc(100vh-12rem)] w-full overflow-hidden shadow-lg">
      <CardContent className="p-0 h-full">
        <Image
          src="https://placehold.co/1200x800.png"
          alt="Live map of bus locations"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
          data-ai-hint="city map buses"
        />
      </CardContent>
    </Card>
  );
}
