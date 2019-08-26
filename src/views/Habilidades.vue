<template lang="pug">
  // HABILIDADES
  section#habilidades
    .container
      .row.center-align
        h3 Mis habilidades
        hr
      .row.flex.overflow
        .col.s12.m6.l4
          .col.s12.m7.push-m3
            i.sprite.html_habilidades_miriam_mendoza
          .row
            .col.s12.m6
              img.responsive-img(src='@/assets/images/js_habilidades_miriam_mendoza.png', alt='Miriam Mendoza laboratoria js habilidad')
            .col.s12.m6
              //- img.responsive-img(src='@/assets/images/jquery_habilidades_miriam_mendoza.ico' alt='Miriam Mendoza laboratoria jquery habilidad')
          .col.s12.m7.push-m3
            i.sprite.css_habilidades_miriam_mendoza
        .col.l4.hide-on-small-only.hide-on-med-only.center-align
          img.responsive-img(src='@/assets/images/front_end.gif', alt='Miriam Mendoza laboratoria front end development')
        .col.s12.m6.l4.center-align
          .col.s12.m7.push-m3
            img.responsive-img(src='@/assets/images/node_js_habilidades_miriam_mendoza.png', alt='Miriam Mendoza laboratoria node.js habilidad')
          .row
            .col.s12.m6
              i.sprite.materialize_habilidades_miriam_mendoza
            .col.s12.m6
              i.sprite.foundation_habilidades_miriam_mendoza
          .col.s12.m7.push-m3
            i.sprite.bootstrap_habilidades_miriam_mendoza
      .row.center-align
        .col.s6.m3.push-m2
          img.responsive-img(src='@/assets/images/sass_habilidades_miriam_mendoza.png', alt='Miriam Mendoza laboratoria sass habilidad')
        .col.s6.m3.push-m2
          img.responsive-img(src='@/assets/images/git_habilidades_miriam_mendoza.svg', alt='Miriam Mendoza laboratoria materialize habilidad')
        .col.s6.m3.push-m2
          i.sprite.gulp_habilidades_miriam_mendoza

</template>

<script>

export default {
}
</script>
