<template lang="pug">
  // PROYECTOS
  section#proyectos
    .container
      .row.center-align
        h3 Mis proyectos
        hr
      .row
        // PRIMER PROYECTO
        .col.s12.m6.l6
          .square.overflow.center-align.card.hoverable.card
            h4.center-align Yape
            p.black-text.square__txt.square__txt Maquetado de la aplicaci&oacute;n realizado por el banco BCP
            .square__btn.flex
              a.waves-effect.waves-light.btn.white-text(href='#proy-1') Ver Detalle
          #proy-1.modal.center-align
            .modal-content
              a(href='https://yape-sprint5.herokuapp.com/', target='_blank') Ver Demo
              a(href='https://github.com/mgmp2/yape', target='_blank') Ver C&oacute;digo
              img(src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fyape-sprint5.herokuapp.com%2F&chs=180x180&choe=UTF-8&chld=L|2', alt='yape proyecto código Qr Miriam Mendoza')
              a(href='https://yape-sprint5.herokuapp.com/', rel='nofollow')
        // SEGUNDO PROYECTO
        .col.s12.m6.l6
          .square.overflow.center-align.card.hoverable.card
            h4.center-align Smash Faces
            p.black-text.square__txt Adivina los nombres de las coders de Laboratoria
            .square__btn
              a.waves-effect.waves-light.btn.white-text(href='#proy-2') Ver Detalle
          #proy-2.modal.center-align
            .modal-content
              a(href='https://mgmp2.github.io/smashFaces/', target='_blank') Ver Demo
              a(href='https://github.com/mgmp2/smashFaces', target='_blank') Ver C&oacute;digo
              a(rel='nofollow', href='https://mgmp2.github.io/smashFaces/', border='0')
                img(src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmgmp2.github.io%2FsmashFaces%2F&chs=180x180&choe=UTF-8&chld=L|2', alt='smash faces proyecto código Qr Miriam Mendoza')
        // TERCER PROYECTO
        .col.s12.m6.l6
          .square.overflow.center-align.card.hoverable.card
            h4.center-align Slide Coder
            p.black-text.square__txt Publica como en las redes sociales
            .square__btn
              a.waves-effect.waves-light.btn.white-text(href='#proy-3') Ver Detalle
          #proy-3.modal.center-align
            .modal-content
              a(href='https://mgmp2.github.io/Slide-coder/', target='_blank') Ver Demo
              a(href='https://github.com/mgmp2/Slide-coder', target='_blank') Ver C&oacute;digo
              a(rel='nofollow', href='https://mgmp2.github.io/Slide-coder/', border='0')
              img(src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmgmp2.github.io%2FSlide-coder%2F&chs=180x180&choe=UTF-8&chld=L|2', alt='slide coder código qr Miriam Mendoza')
        // CUARTO PROYECTO
        .col.s12.m6.l6
          .square.overflow.center-align.card.hoverable.card
            h4.center-align Lab Car
            p.black-text.square__txt Replica de la p&aacute;gina de Lab Car
            .square__btn
              a.waves-effect.waves-light.btn.white-text(href='#proy-4') Ver Detalle
          #proy-4.modal.center-align
            .modal-content
              a(href='https://mgmp2.github.io/GroupImportant/', target='_blank') Ver Demo
              a(href='https://github.com/mgmp2/GroupImportant', target='_blank') Ver C&oacute;digo
              a(rel='nofollow', href='https://mgmp2.github.io/GroupImportant/', border='0')
                img(src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmgmp2.github.io%2FGroupImportant%2F&chs=180x180&choe=UTF-8&chld=L|2', alt='lab car proyecto grupal código qr Miriam Mendoza')
        // QUINTO PROYECTO
        .col.s12.m6.l6
          .square.overflow.center-align.card.hoverable.card
            h4.center-align Portafolio
            p.black-text.square__txt Un dise&ntilde;o diferente para tu portafolio
            .square__btn
              a.waves-effect.waves-light.btn.white-text(href='#proy-5') Ver Detalle
          #proy-5.modal.center-align
            .modal-content
              a(href='https://mgmp2.github.io/PortfolioMaterialize/', target='_blank') Ver Demo
              a(href='https://github.com/mgmp2/PortfolioMaterialize', target='_blank') Ver C&oacute;digo
              a(rel='nofollow', href='https://mgmp2.github.io/PortfolioMaterialize/', border='0')
              img(src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmgmp2.github.io%2FPortfolioMaterialize%2F&chs=180x180&choe=UTF-8&chld=L|2', alt='nuevo modelo Portafolio código Qr Miriam Mendoza')

</template>

<script>

export default {
}
</script>
