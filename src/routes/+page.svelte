<script lang="ts">
  import "../app.css";
  /** @type {import('./$types').PageData} */
  export let data;

  import { countryCodeMap } from "$lib";

  // use the dynamic country's region 2 letter code
  const language = countryCodeMap[data.region];

  const unleashConfig = {
    // How often (in seconds) the client should poll the proxy for updates
    refreshInterval: 1,
    // The name of your application. It's only used for identifying your application
    appName: "customName",
    // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
    url: "http://localhost:4242/api/frontend",
    // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
    clientKey: "default:development.unleash-insecure-frontend-api-token",
    // create custom Unleash context
    context: { properties: { region: language } },
    // To test if the value should be returned false, uncomment below and comment above line
    // context: { properties: { region: "OP" } },
  };
  import Content from "../components/content.svelte";
  import { FlagProvider } from "@unleash/proxy-client-svelte";
</script>

<FlagProvider config={unleashConfig}>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
  >
    <img
      alt="beams"
      width="1308"
      src="/assets/beams.jpeg"
      class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    />
    <div
      class="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    >
      <div class="mx-auto max-w-md">
        <img
          class="h-12"
          alt="Unleash"
          src="https://www.getunleash.io/logos/unleash_pos.svg"
        />
        <div class="divide-y divide-gray-300/50">
          <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p>This is an example of using SvelteKit with Unleash's Svelte SDK.</p>
            <p>
              If your country's native language is supported in our <span class="bg-gray-100 px-1 rounded">regional</span> flag set
              by the demo
              <span class="bg-green-900 text-white px-1 rounded">Unleash</span>
              instance, you'd see the translation below, else <span class="bg-red-100 px-1 rounded">fallback content</span> would be visible 👇🏻
            </p>
            <Content {language} />
          </div>
        </div>
      </div>
    </div>
  </div>
</FlagProvider>
