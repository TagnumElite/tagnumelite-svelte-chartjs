<script module lang="ts">
  import Radar from '$lib/Radar.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_RADAR_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Radar',
    component: Radar,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_RADAR_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Radar Graph" />
