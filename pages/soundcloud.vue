<template>
  <div>
    <div>
      <button @click="handlePlay">재생</button>
      <button @click="handleStop">정지</button>
    </div>
    <iframe id="v01" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313362462&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"></iframe>
    <iframe id="v02" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/495464616&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"></iframe>
    <iframe id="v03"width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241371402&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"></iframe>
  </div>
</template>
<script type="text/javascript" src="http://w.soundcloud.com/player/api.js"></script>
<script lang="js">
import 'soundcloud-widget/vendor/soundcloud-widget'
export default {
  name: 'SoundCloud',
  methods: {
    handlePlay() {
      SC.Widget("v01").play();
      SC.Widget("v02").play();
      SC.Widget("v03").play();
    },
    handleStop() {
      SC.Widget("v01").pause();
      SC.Widget("v02").pause();
      SC.Widget("v03").pause();
    }
  }
}
</script>
<!--<script lang="ts">-->
<!--import { defineComponent, ref } from '@nuxtjs/composition-api';-->
<!--import 'soundcloud-widget/vendor/soundcloud-widget'-->
<!--export default defineComponent({-->
<!--  name: 'soundcloud',-->
<!--  setup() {-->
<!--    const v01 = ref();-->
<!--    const v02 = ref();-->
<!--    const v03 = ref();-->

<!--    const methods = {-->
<!--      handlePlay() {-->
<!--        SC.Widget("v01").play();-->
<!--        SC.Widget("v02").play();-->
<!--        SC.Widget("v03").play();-->
<!--      },-->
<!--      handleStop() {-->
<!--        SC.Widget("v01").pause();-->
<!--        SC.Widget("v02").pause();-->
<!--        SC.Widget("v03").pause();-->
<!--      }-->
<!--    }-->

<!--    return {-->
<!--      v01,-->
<!--      v02,-->
<!--      v03,-->
<!--      ...methods-->
<!--    }-->
<!--  }-->
<!--})-->
<!--</script>-->
