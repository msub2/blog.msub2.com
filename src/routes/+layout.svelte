<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.css';
  import { fade } from 'svelte/transition'

  export let data;
</script>

<svelte:head>
  <script defer src="https://umami.msub2.com/script.js" data-website-id="27c3e7d9-7e6e-4fcc-b576-02da1623a53f"></script>
</svelte:head>

<div class='wrapper'>
  <Header />
  
  {#key data.currentRoute}
    <main in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }} 
          on:outrostart="{() => document.body.style.overflowY = 'hidden'}" 
          on:introend="{() => document.body.style.overflowY = 'auto'}">
      <slot />
    </main>
  {/key}
  
  <Footer />
</div>

<style>
  main {
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .wrapper {
    min-height: 98vh;
    display: flex;
    flex-direction: column;
  }
</style>