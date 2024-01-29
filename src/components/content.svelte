<script lang="ts">
  import { onMount } from "svelte";
  import { useFlag } from "@unleash/proxy-client-svelte";

  $: language = false;
  $: regionalFlag = useFlag("regional");

  onMount(() => {
    regionalFlag.subscribe((val) => {
      language = val;
    });
  });
</script>

{#if language}
  <span>Show content in HI</span>
{:else}
  <span>Fallback Content</span>
{/if}
