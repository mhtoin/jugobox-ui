<script  lang="ts">
    let { title, description }: {
        title: string;
        description: string;
    } = $props();
    let expanded = $state(false);
    const toggle = () => {
        expanded = !expanded;
    };
</script>

<div class="search-result" onclick={toggle} role="button" tabindex="0" onkeydown="{(e) => e.key === 'Enter' && toggle()}">
    <div class="result-container">
    <h3>{@html title}</h3>
    <div class="search-result-description" data-open={expanded}>
        <p>{description}</p>
    </div>
    </div>
</div>

<style>
    .search-result {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1lh;
    }

    .search-result:hover {
        cursor: pointer;
    }

    .result-container {
        display: flex;
        flex-direction: column;
       
    }

    .search-result::before {
        content: ">";
    }

    .search-result h3 {
        color: var(--pink);
        margin: 0;
        font-size: 1.2em;
        font-weight: 500;
         transition: color 0.5s ease-in-out;
    }

    .search-result:hover h3 {
        color: var(--peach);
        transition: color 0.5s ease-in-out;
    }

    .search-result:focus h3 {
        color: var(--peach);
        transition: color 0.5s ease-in-out;
    }

    .search-result-description {
        max-height: 0;
        flex-direction: column;
        gap: 1lh;
        padding-left: 1ch;
        overflow: hidden;
    }
    .search-result-description[data-open] {
        display: flex;
    }

    .search-result-description p {
        margin: 0;
        font-size: 1em;
        color: var(--background2);
    }

    .search-result-description[data-open] p {
        display: block;
    }
    .search-result-description p::before {
        content: "Description: ";
        color: var(--pink);
        margin-right: 1ch;
    }

</style>