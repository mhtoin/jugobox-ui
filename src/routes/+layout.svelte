<script>
const { children } = $props();
import "../styles/global.css";
import "../styles/typography.css";
import Sidebar from "../components/layout/sidebar.svelte";
</script>

<div class="layout">
    <Sidebar />
    <div class="content">
        {@render children()}
    </div>
</div>

<style>
    .layout {
        display: grid;
        gap: 10ch;
        grid-template-columns: 1fr 3fr;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .content {
        padding: 2rem;
    }
</style>

