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

    </div>

    >


    <pre>{JSON.stringify(codeStatsData, null, 2)}</pre>
  </div>
{:else}
  <p>Failed to fetch code stats data</p>
{/if}
