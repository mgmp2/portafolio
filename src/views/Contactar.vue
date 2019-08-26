<template lang="pug">
  // CONTACTO
  section#contacto
    .container
      .row.center-align
        .col.s12.m12.l12
          h3 Cont&aacute;ctame
          hr
      .row
        .col.s12.l6
          .col.s12
            h5.weight-700 &iexcl;Gracias por llegar hasta aqu&iacute;!
            p.justify-align
              | Espero que mi trabajo te haya gustado, porque con la misma pasi&oacute;n me encantar&iacute;a integrarme a tu organizaci&oacute;n, y aportar con mis habilidades y las tecnolog&iacute;as de desarrollo web y m&oacute;vil que he aprendido y que seguir&eacute; aprendiendo.
        #links-profesional.col.s12.l6
          .col.s4.m4
            a(href='https://github.com/mgmp2', target='_blank')
              img.responsive-img(src='assets/images/icons/github.png', alt='github')
          .col.s4.m4.center-align
            a(href='https://www.linkedin.com/in/miriam-mendoza-pilco/', target='_blank')
              img.responsive-img(src='assets/images/icons/linkedin_miriam_mendoza.png', alt='curriculum vitae')
          .col.s4.m4.right-align
            a(href='assets/docs/cv_miriam_mendoza.pdf', target='_blank')
              img.responsive-img(src='assets/images/icons/cv.png', alt='curriculum vitae')
        .col.s12.l6
          .col.s12.l5
            h6.weight-700 Escr&iacute;beme aqu&iacute;:
          #write-here.col.s12.l7
            a.btn.btn-floating.cyan.lighten-2.btn-large.pulse(href='mailto:miriammp1997@gmail.com')
              i.fa.fa-envelope(aria-hidden='true')
            a.btn.btn-floating.cyan.lighten-2.btn-large.pulse(href='skype:myryan_008?call')
              i.fa.fa-skype(aria-hidden='true')
            a.btn.btn-floating.cyan.lighten-2.btn-large.pulse(href='tel:+51938869970')
              i.fa.fa-whatsapp(aria-hidden='true')

</template>

<script>

export default {
  name: 'contactar'
}
</script>
