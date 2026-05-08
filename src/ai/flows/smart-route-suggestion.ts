// A smart route suggestion AI agent.
//
// - smartRouteSuggestion - A function that suggests the best bus route for a given destination.
// - SmartRouteSuggestionInput - The input type for the smartRouteSuggestion function.
// - SmartRouteSuggestionOutput - The return type for the smartRouteSuggestion function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartRouteSuggestionInputSchema = z.object({
  destination: z.string().describe('The destination of the passenger.'),
  currentLocation: z.string().optional().describe('The current location of the passenger. Optional, defaults to current location.'),
});
export type SmartRouteSuggestionInput = z.infer<typeof SmartRouteSuggestionInputSchema>;

const SmartRouteSuggestionOutputSchema = z.object({
  route: z.string().describe('The suggested bus route to take.'),
  reasoning: z.string().describe('The reasoning behind the suggested route.'),
});
export type SmartRouteSuggestionOutput = z.infer<typeof SmartRouteSuggestionOutputSchema>;

export async function smartRouteSuggestion(input: SmartRouteSuggestionInput): Promise<SmartRouteSuggestionOutput> {
  return smartRouteSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartRouteSuggestionPrompt',
  input: {schema: SmartRouteSuggestionInputSchema},
  output: {schema: SmartRouteSuggestionOutputSchema},
  prompt: `You are an AI assistant designed to suggest the best bus route for a passenger to reach their destination.

You will be provided with the passenger's destination, and optionally their current location.

Consider real-time traffic conditions, typical bus speeds, and the frequency of different bus lines to recommend an optimal route.

Destination: {{{destination}}}
Current Location: {{{currentLocation}}}

Suggest the best bus route and explain your reasoning.`,
});

const smartRouteSuggestionFlow = ai.defineFlow(
  {
    name: 'smartRouteSuggestionFlow',
    inputSchema: SmartRouteSuggestionInputSchema,
    outputSchema: SmartRouteSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
