<script lang="ts">
  import Chart from './Chart.svelte';
  import { BubbleController, Chart as ChartJS, LinearScale, PointElement } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(BubbleController, PointElement, LinearScale);

  let {
    data,
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: ChartProps<'bubble'> = $props();
</script>

<Chart type="bubble" bind:canvasRef bind:chart {data} {...props} />
