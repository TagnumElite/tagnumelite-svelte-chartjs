<script module lang="ts">
  import Pie from '$lib/Pie.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_PIE_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Pie',
    component: Pie,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_PIE_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Default" />
