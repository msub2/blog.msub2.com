<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.css';
</script>

<div class='wrapper'>
  <Header />
  
  <main>
    <slot />
  </main>
  
  <Footer />
</div>
