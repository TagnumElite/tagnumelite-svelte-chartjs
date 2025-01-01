<script module lang="ts">
  import Line from '$lib/Line.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { EXAMPLE_LINE_DATA } from '../_EXAMPLE_DATA.js';
  import { DEFAULT_PARAMS } from './default.js';

  const { Story } = defineMeta({
    title: 'Example/Line',
    component: Line,
    tags: ['autodoc'],
    args: {
      data: EXAMPLE_LINE_DATA
    },
    parameters: DEFAULT_PARAMS
  });
</script>

<Story name="Default" />
