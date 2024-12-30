<script module lang="ts">
  import Doughnut from '$lib/Doughnut.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_DOUGHNUT_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Doughnut',
    component: Doughnut,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_DOUGHNUT_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Doughnut Graph" />
