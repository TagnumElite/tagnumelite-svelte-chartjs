<script lang="ts">
  import Chart from './Chart.svelte';
  import { Chart as ChartJS, LinearScale, PointElement, ScatterController } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(ScatterController, PointElement, LinearScale);

  let {
    data,
    canvasRef = $bindable(),
    chart = $bindable(null),
    ...props
  }: ChartProps<'scatter'> = $props();
</script>

<Chart type="scatter" bind:chart bind:canvasRef {data} {...props} />
