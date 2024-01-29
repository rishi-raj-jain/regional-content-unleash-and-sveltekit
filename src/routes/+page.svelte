<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data.region)
  import { countryCodeMap } from "$lib";
  const unleashConfig = {
    // How often (in seconds) the client should poll the proxy for updates
    refreshInterval: 1,
    // The name of your application. It's only used for identifying your application
    appName: "customName",
    // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
    url: "http://localhost:4242/api/frontend",
    // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
    clientKey: "default:development.unleash-insecure-frontend-api-token",
    context: { properties: { region: countryCodeMap[data.region] } },
    // To test if the value should be returned false, uncomment below and comment above line
    // context: { properties: { region: "OP" } },
  };
  import Content from "../components/content.svelte";
  import { FlagProvider } from "@unleash/proxy-client-svelte";
</script>

<FlagProvider config={unleashConfig}>
  <Content />
</FlagProvider>
