<script lang="ts">
  import Line from '$lib/Line.svelte';
  import { EXAMPLE_LINE_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-line', data = EXAMPLE_LINE_DATA } = $props();
</script>

<section {id}>
  <Line {data} />
</section>
