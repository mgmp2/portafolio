<template lang="pug">
  div
    // Conóceme
    section#sobre-mi
      .container
        .row.center-align
          h3 Con&oacute;ceme
          hr
        .row
          .col.s12.m5.center-align
            img.responsive-img.w-75(src='@/assets/images/miriam_mendoza_laboratoria.jpg', alt='coder Miriam Mendoza perfil')
          .col.s12.m7.center-on-small-only
            h4.w-700 Miriam Mendoza
            h5 Front-End Developer Jr. &amp; Estudiante de Ingenier&iacute;a de Sistemas
            p
              | Soy egresada de 
              a.laboratoria(href='http://laboratoria.la', target='_blank') Laboratoria Per&uacute;
              |  y actualmente estudiante de Ingenier&iacute;a de Sistemas. Apasionada por las nuevas tecnolog&iacute;as y herramientas web y m&oacute;viles que contribuyan a una &oacute;ptima experiencia para el cliente. Adem&aacute;s, soy perseverante, solidaria, creativa, proactiva y deseosa de seguir aprediendo m&aacute;s, a fin de siempre agregar valor a mi trabajo.
    // Reconocimientos
    section#reconocimiento
      .container
        .row.center-align
          h4.center-align RECONOCIMIENTOS
          hr
        .row.center-align
          .col.s12.m6
            a(href='https://www.linkedin.com/in/miriam-mendoza-pilco/treasury/education:433748383/', target='_blank')
              img.responsive-img(src='@/assets/images/rocking_sprint_laboratoria.png', alt=' reconocimiento Miriam Mendoza laboratoria rocking sprint')
            h5.w-700 ROCKING THE SPRINT
            p.left-align Es la alumna que mostr&oacute; el mayor progreso de un sprint a otro.
          .col.s12.m6
            a(href='https://www.linkedin.com/in/miriam-mendoza-pilco/treasury/education:433748383/', target='_blank')
              img.responsive-img(src='@/assets/images/top_five_5_laboratoria_miriam_mendoza.png', alt='reconocimiento Miriam Mendoza laboratoria top 5 ')
            h5.w-700 UNA DE LAS 5 MEJORES
            p.left-align
              | Son las 5 alumnas que obtienen los mayores puntajes, tanto en el &aacute;rea t&eacute;cnica como en actitud profesional.

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'conoceme',
  // components: {
  //   HelloWorld
  // }
}
</script>
