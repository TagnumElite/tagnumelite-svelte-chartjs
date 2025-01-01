<script module lang="ts">
  import PolarArea from '$lib/PolarArea.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_POLAR_AREA_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/PolarArea',
    component: PolarArea,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_POLAR_AREA_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Default" />
