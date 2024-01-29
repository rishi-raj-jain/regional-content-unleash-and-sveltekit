<script lang="ts">
  export let language: string;

  import { onMount } from "svelte";
  import { useFlag } from "@unleash/proxy-client-svelte";

  $: isRegionTranslated = false;
  $: regionalFlag = useFlag("regional");

  onMount(() => {
    regionalFlag.subscribe((val) => {
      isRegionTranslated = val;
    });
  });
</script>

{#if isRegionTranslated}
  <span>Show content in {language}</span>
{:else}
  <span>Fallback content</span>
{/if}
