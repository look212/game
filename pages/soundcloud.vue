<template>
  <div>
    <div>
      <button @click="handlePlay">재생</button>
      <button @click="handleStop">정지</button>
    </div>
    <iframe ref="v01" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313362462&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"></iframe>
<!--    <iframe id="v02" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/495464616&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"></iframe>-->
<!--    <iframe id="v03"width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241371402&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"></iframe>-->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { Widget } from 'soundcloud-embed';
export default defineComponent({
  name: 'SoundCloud',
  setup() {
    const v01 = ref<HTMLIFrameElement>();
    const widget = new Widget({
      iframe: v01.value,
    });

    const methods = {
      handlePlay() {
        widget.play()
      },
      handleStop() {
        widget.pause()
      }
    }

    return {
      // iframe,
      widget,
      ...methods
    }
  }
})
</script>
