<script lang="ts">
  import { onMount } from 'svelte';
  import BarExample from './examples/BarExample.svelte';
  import BubbleExample from './examples/BubbleExample.svelte';
  import LineExample from './examples/LineExample.svelte';
  import PieExample from './examples/PieExample.svelte';
  import PolarAreaExample from './examples/PolarAreaExample.svelte';
  import RadarExample from './examples/RadarExample.svelte';
  import ScatterExample from './examples/ScatterExample.svelte';
  import DoughnutExample from './examples/DoughnutExample.svelte';
  import { randomColor } from '../utils.js';

  const LANGUAGE_COLORS: { [language: string]: string } = {
    svelte: 'rgb(168, 8, 8)'
  };
  const XP_THRESHOLD = 5000;

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

              if (xp >= XP_THRESHOLD) {
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
    }
  });
</script>
<div id="examples">
  <h1>Examples</h1>
  <section>
    <BarExample />
    <BubbleExample />
    <DoughnutExample />
    <LineExample />
    <PieExample />
    <PolarAreaExample />
    <RadarExample />
    <ScatterExample />
  </section>
</div>

<br />

{#if codeStatsData}
  <div class="container">
    <div class="top">
      <a href="https://codestats.net" target="_blank"><h1>Code::Stats Chart Example</h1></a>
      <p>Some users to try are TagnumElite and Nicd</p>
    </div>

    <input type="text" name="Username" id="username" bind:value={username} />
    <button
      onclick={() => {
        updateStats = true;
      }}>Check Stats</button
    >
    <h1>CodeStats: {codeStatsData.user}</h1>

    {#if languageXPData}
      <PolarArea data={languageXPData} />
      <p>Lang XP</p>
      <pre>{JSON.stringify(languageXPData, null, 2)}</pre>
    {/if}

    <pre>{JSON.stringify(codeStatsData, null, 2)}</pre>
  </div>
{:else}
  <p>Failed to fetch code stats data</p>
{/if}

