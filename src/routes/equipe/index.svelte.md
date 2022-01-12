<script>
    import Member from '$lib/components/Member.svelte'
    import Head from '$lib/components/Head.svelte'
</script>

<Head
    title="Equipe"
    description="Mentes inquietas compartilhando experiências para ajudar você que deseja estudar no exterior"></Head>


# Equipe

<div>

<Member
    name="Karin Calvinho, Ph.D."
    picture="/images/equipe/karin.png"
    affiliation="Rutgers University"
    bio="Saving climate."/>

<Member
    name="Magno Formiga, Ph.D."
    picture="/images/equipe/magno.png"
    affiliation="Universidade Federal do Ceara"
    bio="Saving people that run."/>

<Member
    name="Paulo Alexandre Regis, Ph.D."
    picture="/images/equipe/paulo.png"
    affiliation="Southeastern Louisiana University"
    url="https://paregis.me"
    bio="Saving word documents."/>

<Member
    name="Lívia Palmerston, Ph.D."
    picture="/images/equipe/livia.png"
    affiliation="Northeastern University"
    bio="Saving people with drugs."/>

<Member
    name="Melina Calmon, Ph.D."
    picture="/images/equipe/mel.png"
    affiliation="Tulane University"
    bio="Saving dead people."/>

<Member
    name="Pedro Menchik, Ph.D."
    picture="/images/equipe/pedro.png"
    affiliation="Cornell University"
    bio="Saving people's food."/>

<Member
    name="Lucas Colusso, Ph.D."
    picture="/images/equipe/lucas.png"
    affiliation="University of Washington"
    bio="Saving design."/>

<Member
    name="Fernanda Cruz Rios-Ford, Ph.D."
    picture="/images/equipe/nanda.png"
    affiliation="Arizona State University"
    bio="Saving babies."/>

<Member
    name="Ugo Bruzadin Nunes, Ph.D."
    picture="/images/equipe/ugo.png"
    affiliation="Southern Illinois University"
    bio="Saving people's thoughts."/>

<Member
    name="Luiz Felipe Ungericht, MSc"
    picture="/images/equipe/luiz.png"
    affiliation="University of Florida"
    bio="Saving students."/>

<Member
    name="Patrícia Basile, Ph.D."
    picture="/images/equipe/paty.png"
    affiliation="University of Virginia"
    bio="Saving housing."/>

</div>

<style lang="postcss" global>
    :local(div) {
        @apply container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start;
    }
</style>