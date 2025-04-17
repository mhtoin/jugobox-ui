<div class="search-container">
    <div class="search-box"  box-="square contain:!top">
        <span class="search-box-intro" is-="badge" variant-="background0">Search</span>
        <div class="search-box-content">
            <p> > Search Youtube for videos, press enter to submit</p>
            <div class="input-container">
                <span> > </span>
                <input type="text" />
            </div>
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

    .search-box-content input {
        all: unset;
        width: 100%;
        
    }

    .input-container {
        display: flex;
        flex-direction: row;
        gap: 1ch;
    }
</style>