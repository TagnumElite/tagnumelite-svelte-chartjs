<script lang="ts">
  import Pie from '$lib/Pie.svelte';
  import { EXAMPLE_PIE_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-pie', data = EXAMPLE_PIE_DATA } = $props();
</script>

<section {id}>
  <Pie {data} />
</section>
