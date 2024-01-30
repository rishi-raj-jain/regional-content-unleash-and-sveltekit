<script lang="ts">
  export let language: string;

  import { useFlag } from "@unleash/proxy-client-svelte";

  const isRegionTranslated = useFlag("regional");
</script>

{#if $isRegionTranslated}
  <div class="mt-3">
    <span class="py-2 px-4 bg-green-100 rounded">
      Content in <b>{language}</b>
    </span>
  </div>
{:else}
  <div class="mt-3">
    <span class="py-2 px-4 bg-red-100 rounded"> Fallback Content </span>
  </div>
{/if}
