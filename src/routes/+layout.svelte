<script lang="ts">
  import { onMount } from 'svelte';
  import { initFlowbite } from 'flowbite';
  import '../app.css';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';

  onMount(() => {
    initFlowbite();
  });

  let { children } = $props();
</script>

<Header />
<div class="main">
  {@render children()}
</div>
<Footer />
