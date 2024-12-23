<script lang="ts">
  import Chart from './Chart.svelte';
  import {
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineController,
    LineElement,
    PointElement
  } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(LineController, LineElement, PointElement, CategoryScale, LinearScale);

  let {
    data,
    canvasRef = $bindable(),
    chart = $bindable(null),
    ...props
  }: ChartProps<'line'> = $props();
</script>

<Chart type="line" bind:canvasRef bind:chart {data} {...props} />
