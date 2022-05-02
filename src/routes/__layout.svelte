<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.css';
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</svelte:head>

<div class='wrapper'>
  <Header />
  
  <main>
    <slot />
  </main>
  
  <Footer />
</div>
