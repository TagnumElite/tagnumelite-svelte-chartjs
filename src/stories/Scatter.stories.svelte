<script module lang="ts">
  import Scatter from '$lib/Scatter.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_SCATTER_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Scatter',
    component: Scatter,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_SCATTER_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Scatter Graph" />
