<script lang="ts">
  import { useFlag } from "@unleash/proxy-client-svelte";

  $: language = useFlag("regional");
</script>

{#if language}
  <span>Show content in HI</span>
{:else}
  <span>Fallback Content</span>
{/if}
