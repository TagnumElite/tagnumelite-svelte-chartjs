<script module lang="ts">
  import Bar from '$lib/Bar.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_BAR_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Bar',
    component: Bar,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_BAR_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Default" />
