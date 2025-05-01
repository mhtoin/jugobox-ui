<script>
import Search from "../components/search/search.svelte";
let { data } = $props();
</script>

<div class="page-container">
    <Search items={data?.items}/>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        gap: 1lh;
        height: 100%;
        width: 100%;
    }
</style>
