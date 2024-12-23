<script lang="ts" generics="CType extends keyof ChartTypeRegistry">
  import {
    Chart as ChartJS,
    Legend,
    Title,
    Tooltip,
    type ChartData,
    type ChartOptions,
    type ChartTypeRegistry,
    type Plugin as ChartPlugin
  } from 'chart.js';
  import { onDestroy } from 'svelte';
  import type { BaseChartProps } from './types.js';

  let {
    chart = $bindable(null),
    canvasRef = $bindable(),
    ...props
  }: BaseChartProps<CType> = $props();
  let { type, data, options, plugins, updateMode } = props;

  ChartJS.register(Title, Tooltip, Legend);

  $effect(() => {
    if (!chart) {
      if (!canvasRef) return;
      chart = new ChartJS(canvasRef, {
        type: $state.snapshot(type) as CType,
        data: $state.snapshot(data) as ChartData<CType>,
        options: $state.snapshot(options) as ChartOptions<CType>,
        plugins: $state.snapshot(plugins) as ChartPlugin<CType>[]
      });
      return;
    }

    chart.data = $state.snapshot(data) as ChartData<CType>;
    if (chart.options) Object.assign(chart.options, $state.snapshot(options));
    chart.update(updateMode);
  });

  onDestroy(() => {
    if (chart) chart.destroy();
    chart = null;
  });
</script>

<canvas bind:this={canvasRef} {...props}></canvas>
