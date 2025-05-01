import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";
import type { YoutubeApiErrorResponse, YoutubeSearchResult } from "../types/youtube.type";
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
    const query = url.searchParams.get('q');
    console.log('query', query);
    
    // Return early if there's no query
    if (!query) {
        return { items: [] };
    }

    try {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(query)}&key=${PUBLIC_YOUTUBE_API_KEY}`);
        console.log('res', res);
        
        if (!res.ok) {
            const errorResponse: YoutubeApiErrorResponse = await res.json();
            console.error('Error fetching data from YouTube API:', res.statusText);
            return { error: errorResponse, items: [] };
        }
        
        const data: YoutubeSearchResult = await res.json();
        
        // Return a clean object with primitive values
        // This ensures proper serialization
        return {
            ...data,
        };
    } catch (error) {
        console.error('Error in YouTube API request:', error);
        return { error: 'Failed to fetch search results', items: [] };
    }
}

