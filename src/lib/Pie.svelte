<script lang="ts">
  import Chart from './Chart.svelte';
  import { ArcElement, Chart as ChartJS, PieController } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(PieController, ArcElement);

  let {
    data,
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: ChartProps<'pie'> = $props();
</script>

<Chart type="pie" bind:canvasRef bind:chart {data} {...props} />
