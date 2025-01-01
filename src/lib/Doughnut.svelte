<script lang="ts">
  import Chart from './Chart.svelte';
  import { ArcElement, Chart as ChartJS, DoughnutController } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(DoughnutController, ArcElement);

  let {
    data,
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: ChartProps<'doughnut'> = $props();
</script>

<Chart bind:canvasRef bind:chart type="doughnut" {data} {...props} />
