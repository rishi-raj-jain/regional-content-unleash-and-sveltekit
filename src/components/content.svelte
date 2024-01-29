<script lang="ts">
  export let language: string;

  import { useFlag } from "@unleash/proxy-client-svelte";

  const isRegionTranslated = useFlag("regional");
</script>

{#if $isRegionTranslated}
  <span>Show content in {language}</span>
{:else}
  <span>Fallback content</span>
{/if}
