<script lang="ts">
  import Radar from '$lib/Radar.svelte';
  import { EXAMPLE_RADAR_DATA } from './_EXAMPLE_DATA.js';

  let { id = 'example-radar', data = EXAMPLE_RADAR_DATA } = $props();
</script>

<section {id}>
  <Radar {data} />
</section>
