<script lang="ts">
  import Chart from './Chart.svelte';

  import { Chart as ChartJS, PolarAreaController, ArcElement, RadialLinearScale } from 'chart.js';
  import type { ChartProps } from './types.js';

  ChartJS.register(PolarAreaController, ArcElement, RadialLinearScale);

  let {
    data,
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: ChartProps<'polarArea'> = $props();
</script>

<Chart type="polarArea" bind:canvasRef bind:chart {data} {...props} />
