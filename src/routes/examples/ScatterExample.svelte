<script lang="ts">
  import Scatter from '$lib/Scatter.svelte';
  import { EXAMPLE_SCATTER_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-scatter', data = EXAMPLE_SCATTER_DATA } = $props();
</script>

<section {id}>
  <Scatter {data} />
</section>
