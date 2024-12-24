<script lang="ts">
  import Bar from '$lib/Bar.svelte';
  import autocolorPlugin from 'chartjs-plugin-autocolors';
  import { EXAMPLE_BAR_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-bar', data = EXAMPLE_BAR_DATA } = $props();
</script>

<section {id}>
  <Bar {data} />
  <Bar {data} options={{ scales: { y: { type: 'logarithmic' } } }} plugins={[autocolorPlugin]} />
</section>
