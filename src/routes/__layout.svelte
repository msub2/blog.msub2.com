<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname

    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.css';
  import { fade, fly } from 'svelte/transition'

  export let currentRoute
</script>

<div class='wrapper'>
  <Header />
  
  {#key currentRoute}
    <main in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }} 
          on:outrostart="{() => document.body.style.overflowY = 'hidden'}" 
          on:introend="{() => document.body.style.overflowY = 'auto'}">
      <slot />
    </main>
  {/key}
  
  <Footer />
</div>