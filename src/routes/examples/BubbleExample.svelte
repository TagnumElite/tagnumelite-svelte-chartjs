<script lang="ts">
  import Bubble from '$lib/Bubble.svelte';
  import { EXAMPLE_BUBBLE_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-bubble', data = EXAMPLE_BUBBLE_DATA } = $props();
</script>

<section {id}>
  <Bubble {data} />
</section>
