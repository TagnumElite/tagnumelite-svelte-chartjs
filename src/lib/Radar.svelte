<script lang="ts">
  import Chart from './Chart.svelte';
  import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    RadarController,
    RadialLinearScale
  } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(RadarController, LineElement, PointElement, RadialLinearScale);

  let {
    data,
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: ChartProps<'radar'> = $props();
</script>

<Chart type="radar" bind:chart bind:canvasRef {data} {...props} />
