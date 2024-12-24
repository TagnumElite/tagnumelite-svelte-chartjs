<script lang="ts">
  import PolarArea from '$lib/PolarArea.svelte';
  import { EXAMPLE_POLAR_AREA_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-polarArea', data = EXAMPLE_POLAR_AREA_DATA } = $props();
</script>

<section {id}>
  <PolarArea {data} />
</section>
