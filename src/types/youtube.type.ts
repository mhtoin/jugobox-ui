export type YoutubeSearchResult = {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: Array<YoutubeVideo>
}

export type YoutubeVideo = {
    kind: string;
    etag: string;
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            [key: string]: {
                url: string;
                width: number;
                height: number;
            };
        }
        channelTitle: string;
        liveBroadcastContent: string;
    };
}

export type YoutubeApiErrorResponse = {
    error: {
        code: number;
        message: string;
        errors: Array<{
            domain: string;
            reason: string;
            message: string;
        }>;
        status: string;
    };
}