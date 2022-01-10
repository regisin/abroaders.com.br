<script context="module">
  export async function load({ url }) {
    const path = url.pathname;
    return {
      props: { path },
    };
  }
</script>

<script>
  import "../app.css";

  import Hero from '$lib/components/Hero.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let path;

  const hero = {
      title: "Abroaders",
      url: "/images/equipe/logoaBR.png"
  }
  const items = [
      {title: "Home", url: "/"},
      {title: "Sobre", url: "/sobre"},
      {title: "Equipe", url: "/equipe"},
      {title: "Contato", url: "/contato"},
      {title: "Calculadore de GPA", url: "/gpa"}
  ]
</script>

<Hero {hero}/>
<Header {items} {path} />


<main>
  <div class="prose">
      <slot />
  </div>
</main>

<Footer
  instagram="https://instagram.com/abroaders"
  youtube="https://www.youtube.com/user/abroadersbr"
  twitter="https://twitter.com/abroadersbr"
  github="https://github.com/regisin/abroaders.com.br"
  facebook="https://www.facebook.com/abroadersBR"
/>
