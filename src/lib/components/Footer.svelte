<script>
  import github from '$lib/svgs/github.svg?url';
  import twitter from '$lib/svgs/twitter.svg?url';
  import youtube from '$lib/svgs/youtube.svg?url';
  import mastodon from '$lib/svgs/mastodon.svg?url';
  import rss from '$lib/svgs/rss.svg?url';
  import bluesky from '$lib/svgs/bluesky.svg?url';
  import discord from '$lib/svgs/discord.svg?url';
</script>

<footer>
  <hr />
  <p id='copyright'>Copyright © 2025 m₂</p>
  
  <nav>
    <a id='github' href='https://github.com/msub2' target='_blank' rel='noreferrer'>
      <img alt='GitHub Logo' src={github} width='64' height='64'/>
    </a>
    <a id="bluesky" rel="me noreferrer" href="https://bsky.app/profile/msub2.com" target="_blank">
      <img alt="Bluesky Logo" src={bluesky} width="64" height="64">
    </a>
    <a id='youtube' href='https://www.youtube.com/channel/UCMVH8W8TRnzWFYVBQDqg93A' target='_blank' rel='noreferrer'>
      <img alt='YouTube Logo' src={youtube} width='64' height='64' />
    </a>
    <a id='mastodon' rel="me noreferrer" href="https://arvr.social/@msub2" target='_blank'>
      <img alt='Mastodon Logo' src={mastodon} width='64' height='64' />
    </a>
    <a id="discord" rel="me noreferrer" href="https://discord.gg/atyarZBMnc" target="_blank">
      <img alt="Discord Logo" src={discord} width="64" height="64">
    </a>
    <a id='twitter' href='https://www.twitter.com/msub2official' target='_blank' rel='noreferrer'>
      <img alt='Twitter Logo' src={twitter} width='64' height='64' />
    </a>
    <a id='rss' href='/rss.xml'>
      <img alt='RSS Feed' src={rss} width='64' height='64' />
    </a>
  </nav>

</footer>

<style>
  footer {
    flex-shrink: 0;
    width: 100%;
    text-align: center;
  }

  footer a {
    margin: 1vw;
  }

  #copyright {
    color: gray;
  }
</style>