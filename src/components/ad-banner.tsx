import { Card, CardContent } from '@/components/ui/card';

export function AdBanner() {
    return (
        <div className="container mx-auto px-4 py-4">
            <Card className="bg-muted border-dashed">
                <CardContent className="p-4 text-center text-muted-foreground">
                    <p className="text-sm font-semibold">Advertisement</p>
                    <p className="text-xs">Your ad could be here! Reach thousands of daily commuters.</p>
                </CardContent>
            </Card>
        </div>
    );
}
