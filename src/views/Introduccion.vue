<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-4
      img(src='@/assets/curso/img1.jpg', style="max-width: 100%; margin: auto;")
    
    p.mb-4 A través de este material, se tratan con detalle los pasos que se deben seguir en el proceso de recolección de datos, el uso de técnicas y los instrumentos para tal fin.
    p.mb-4 La recolección de datos se refiere al uso de una gran diversidad de técnicas y herramientas que pueden ser utilizadas por el analista para desarrollar los sistemas de información, las cuales pueden ser la entrevista, la encuesta, el cuestionario, la observación, las sesiones grupales, la recolección documental, entre otras.
    p En ese sentido, los analistas utilizan una variedad de métodos para recopilar los datos sobre una situación existente, como entrevistas, cuestionarios, inspección de registros (revisión en el sitio) y observación. Cada uno tiene ventajas y desventajas; es por ello que, por lo general, se utilizan dos o tres simultáneamente, para complementar el trabajo asegurar una investigación completa.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
