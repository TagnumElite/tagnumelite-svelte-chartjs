<script lang="ts">
  import '../app.css';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';

  let { children } = $props();
</script>

<Header />
<div class="main">
  {@render children()}
</div>
<Footer />
