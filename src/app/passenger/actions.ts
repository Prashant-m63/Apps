'use server';

import { smartRouteSuggestion, type SmartRouteSuggestionInput, type SmartRouteSuggestionOutput } from '@/ai/flows/smart-route-suggestion';

interface ActionResult {
    success: boolean;
    data?: SmartRouteSuggestionOutput;
    error?: string;
}

export async function getSmartRoute(input: SmartRouteSuggestionInput): Promise<ActionResult> {
    try {
        const result = await smartRouteSuggestion(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Smart route suggestion failed:", error);
        return { success: false, error: 'Failed to get route suggestion due to an internal error.' };
    }
}
