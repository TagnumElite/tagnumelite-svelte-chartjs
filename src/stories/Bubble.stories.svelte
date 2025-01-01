<script module lang="ts">
  import Bubble from '$lib/Bubble.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_BUBBLE_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Bubble',
    component: Bubble,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_BUBBLE_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Default" />
