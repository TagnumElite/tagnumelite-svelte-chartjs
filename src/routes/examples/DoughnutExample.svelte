<script lang="ts">
  import Doughnut from '$lib/Doughnut.svelte';
  import { EXAMPLE_DOUGHNUT_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-doughnut', data = EXAMPLE_DOUGHNUT_DATA } = $props();
</script>

<section {id}>
  <Doughnut {data} />
</section>
