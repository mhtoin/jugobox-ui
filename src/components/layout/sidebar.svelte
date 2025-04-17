<div class="sidebar-container">
    <div class="sidebar" box-="square contain:!top">
        <div><span is-="badge" variant-="pink">Documentation</span></div>
    </div>
</div>

<style>
    .sidebar-container {
        height: 100%;
        width: 100%;
        max-width: 30ch;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 1lh;
        overflow: hidden;
        flex-grow: 1;
        background-color: var(--background-color);
        --box-border-color: var(--background1);
        height: 95%;
        margin-left: 2ch;
        margin-right: 2ch;
        margin-top: 2ch;
    }
</style>