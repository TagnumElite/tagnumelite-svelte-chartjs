<script lang="ts">
  import PolarArea from '$lib/PolarArea.svelte';
  import type { ChartData } from 'chart.js';
  import { onMount } from 'svelte';
  import { LANGUAGE_COLORS, randomColor } from '../utils.js';

  let xp_threshold = $state(5000);

  let username = $state('tagnumelite');
  let languageXPData: ChartData<'polarArea'> | undefined = $state();
  let codeStatsData: CodeStats | undefined = $state();
  let updateStats = $state(true);

  interface CodeStats {
    user: string;
    total_xp: number;
    new_xp: number;
    languages: {
      [key: string]: {
        new_xps: number;
        xps: number;
      };
    };
    machines: {
      [machine: string]: {
        new_xps: number;
        xps: number;
      };
    };
  }

  onMount(async () => {});

  $effect(() => {
    if (updateStats) {
      fetch('https://codestats.net/api/users/' + username)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          codeStatsData = data;

          if (codeStatsData) {
            var labelKeys = Object.keys(codeStatsData.languages);
            var labels = [];
            var xps = [];
            var bgColors = [];
            for (let index = 0; index < labelKeys.length; index++) {
              const name = labelKeys[index];
              const xp = codeStatsData.languages[name].xps;

              if (xp >= xp_threshold) {
                labels.push(name);
                xps.push(xp);
                if (name in LANGUAGE_COLORS) {
                  bgColors.push(LANGUAGE_COLORS[name]);
                } else {
                  bgColors.push(randomColor());
                }
              }
            }

            languageXPData = {
              labels,
              datasets: [
                {
                  label: 'Language XP',
                  data: xps,
                  backgroundColor: bgColors
                }
              ]
            };
          }
        })
        .catch((error) => {
          console.log(error);
          return [];
        })
        .finally(() => {
          updateStats = false;
        });
    } else {
    }
  });
</script>

<section
>
  <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
    <h1
    >
      Svelte + Chart.JS
    </h1>
    <p class="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
      A Svelte wrapper for <a href="https://www.chartjs.org/">Chart.JS</a>
    </p>
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a
        href="#installation"
      >
        Install
      </a>
    </div>
  </div>
</section>

<section id="installation" class="grid grid-cols-2 bg-gray-700 bg-blend-multiply">
  <div
    class="px-a w-auto max-w-screen-xl rounded-r-md border-r-2 border-black bg-white py-4 lg:py-8"
  >
    <h1
      class="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight text-black md:text-3xl lg:text-4xl"
    >
      Installation
    </h1>
    <div class="text-md mb-8 px-4 font-normal text-gray-600 lg:text-lg">
      <p>Install the package with the required peer dependencies</p>
    </div>
  </div>
  <div class="mx-auto px-4 py-4 text-center lg:py-8">
    <pre><code
        >npm i --save chart.js @tagnumelite/svelte-chartjs
pnpm add chart.js @tagnumelite/svelte-chartjs
yarn add chart.js @tagnumelite/svelte-chartjs
bun add chart.js @tagnumelite/svelte-chartjs</code
      ></pre>
  </div>
</section>

<br />

{#if codeStatsData}
  <div class="container flex flex-1 flex-grow basis-4 flex-wrap justify-between">
    <div class="left text-center">
      <h1 class="font-extrabold">
        <a href="https://codestats.net" target="_blank">Code::States</a> Chart Example
      </h1>
      <p class="text-gray-100">Example Usernames: 'TagnumElite', 'Nicd'</p>

      <input type="number" name="XP Threshold" id="xp_threshold" bind:value={xp_threshold} />
      <input type="text" name="Username" id="username" bind:value={username} />
      <button
        onclick={() => {
          updateStats = true;
        }}>Check Stats</button
      >
      <h1>CodeStats: {codeStatsData.user}</h1>
    </div>
    <div class="right">
      {#if languageXPData}
        <PolarArea data={languageXPData} />
      {/if}
    </div>

    <!--
    <p>Lang XP</p>
    <pre>{JSON.stringify(languageXPData, null, 2)}</pre>
    <pre>{JSON.stringify(codeStatsData, null, 2)}</pre>
  -->
  </div>
{:else}
  <p>Failed to fetch code stats data</p>
{/if}
