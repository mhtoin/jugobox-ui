<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import type { YoutubeVideo } from '../../types/youtube.type';
    import Result from './result.svelte';

    let { items }: {
        items: YoutubeVideo[]
    } = $props();
    
    let searchQuery = $state(page?.url?.searchParams.get('q'));

    async function handleSearch() {
        const params = new URLSearchParams();
        if (searchQuery === '') {
            params.delete('q');
        } else {
            params.set('q', searchQuery);
        }
        console.log('searchQuery', searchQuery);
        console.log('params', params);
        console.log('searchQuery', searchQuery);
        await goto(`?${params.toString()}`, { replaceState: true });
    }
</script>

<div class="search-container">
    <div class="search-box"  box-="square contain:!top">
        <span class="search-box-intro" is-="badge" variant-="background0">Search</span>
        <div class="search-box-content">
            <span>Search Youtube for videos, press enter to submit</span>
            <div class="input-container">
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    onkeydown={(e) => e.key === 'Enter' && handleSearch()}
                />
            </div>
        </div>
        <div class="search-results">
            {#each items as item }
                <Result 
                    title={item.snippet.title} 
                    description={item.snippet.description} 
                    />
            {/each}
        </div>
    </div>
</div>

<style>
    .search-container {
        display: flex;
        flex-direction: column;
        gap: 1lh;
        overflow: hidden;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        
    }

    .search-box {
        --box-border-color: var(--background1);
        min-width: 70ch;
        min-height: 40ch;
    }

    .search-box-content {
        padding: 1ch;
        display: flex;
        flex-direction: column;
        gap: 1lh;
    }

    .search-box-content span {
        display: inline-block;
    }

    .search-box-content span::before {
        content: "#: ";
        color: var(--pink);
        margin-right: 1ch;
    }

    .search-box-content input {
        all: unset;
        width: 100%;
    }

    .input-container {
        display: flex;
        flex-direction: row;
    }

    .input-container::before {
        content: "#: ";
        color: var(--pink);
        margin-right: 1ch;
    }

    .search-results {
        display: flex;
        flex-direction: column;
        gap: 1lh;
        padding: 1ch;
        padding-left: 5ch;
        overflow-y: auto;
        max-height: 30ch;
    }
</style>