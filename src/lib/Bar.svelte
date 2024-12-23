<script lang="ts">
  import Chart from './Chart.svelte';
  import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(BarController, BarElement, CategoryScale, LinearScale);

  let {
    data,
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: ChartProps<'bar'> = $props();
</script>

<Chart type="bar" bind:canvasRef bind:chart {data} {...props} />
