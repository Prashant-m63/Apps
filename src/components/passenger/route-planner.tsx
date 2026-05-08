'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Lightbulb, Route } from 'lucide-react';
import type { SmartRouteSuggestionOutput } from '@/ai/flows/smart-route-suggestion';
import { getSmartRoute } from '@/app/passenger/actions';
import { Separator } from '../ui/separator';

const routePlannerSchema = z.object({
  destination: z.string().min(3, { message: 'Destination must be at least 3 characters long.' }),
});

export function RoutePlanner() {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<SmartRouteSuggestionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof routePlannerSchema>>({
    resolver: zodResolver(routePlannerSchema),
    defaultValues: {
      destination: '',
    },
  });

  async function onSubmit(values: z.infer<typeof routePlannerSchema>) {
    setLoading(true);
    setSuggestion(null);
    setError(null);
    
    const result = await getSmartRoute({ destination: values.destination });
    
    if (result.success && result.data) {
      setSuggestion(result.data);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Plan Your Trip</CardTitle>
          <CardDescription>Enter your destination to find the best route.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Where are you going?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., City Museum of Art" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Find Best Route
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {loading && (
        <Card>
          <CardContent className="p-6 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Our AI is finding the best route for you...</p>
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive font-headline">Error Finding Route</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {suggestion && (
        <Card className="border-primary/50 shadow-lg animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" />
              Smart Route Suggestion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <Route className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Suggested Route</p>
                    <p className="text-xl font-bold text-primary">{suggestion.route}</p>
                </div>
              </div>
            <Separator />
            <div>
              <p className="text-sm font-semibold mb-2">Reasoning:</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{suggestion.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
