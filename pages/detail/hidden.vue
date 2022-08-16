<template>
  <div class="detail-wrap">
    <header>
      <a href="/game/hidden" class="btn__home">home</a>
      <h1>Only for you!</h1>
    </header>
    <template>
      <div class="contents">
        <div class="game-in" v-if="gameList.length > 1">
          <div class="info">
            <p>{{ subject.label }} ({{ activeIndex + 1 }}/{{ gameList.length }})</p>
          </div>
          <div class="question-wrap">
            <swiper ref="swiper"
                    class="custom"
                    :options="swiperOptions">
              <swiper-slide v-for="(game, index) in gameList" :key="`game_${index}`">
                <p>{{ game }}</p>
              </swiper-slide>
              <div class="next-wrap" v-if="gameList.length !== (activeIndex + 1)">
                <g-button @click="nextSlide">다음</g-button>
              </div>
            </swiper>
            <div class="btn-wrap" v-if="gameList.length === (activeIndex + 1)">
              <g-button :is-gray="true" @click="goHome">처음으로</g-button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from '@nuxtjs/composition-api';
import GButton from '~/components/_atoms/GButton.vue';
import gameSetting from '~/composable/gameSetting';

export default defineComponent({
  name: 'HiddenDetail',
  components: {
    GButton,
  },
  setup(props, { root }) {
    const {
      game,
      subject,
      activeIndex,
      swiper,
      swiperOptions,
      gameList,
      nextSlide,
    } = gameSetting();

    const methods = {
      goHome() {
        root.$swal({
          showCancelButton: true,
          customClass: {
            container: 'modal_container is_cancelBtn',
          },
          confirmButtonText: '예',
          title: '처음으로 이동하시겠습니까?',
        }).then((result) => {
          if (result.isConfirmed) window.location.href = '/game/hidden';
        });
      }
    }

    onMounted(() => {
      game.setHiddenGameList(game.hiddenType);
    })

    return {
      game,
      subject,
      activeIndex,
      ...methods,
      gameList,
      swiper,
      swiperOptions,
      nextSlide,
    }
  }
})
</script>

<style lang="scss" scoped>
.contents {
  padding: 20px;

  h2 {
    font-weight: 400;
    font-size: 1.2em;
    margin-bottom: 20px;

    span {
      display: inline-block;
      color: #aaa;
      font-size: .8em;
    }
  }

  .btn-wrap {
    margin: 0 0 0 -10px;
  }
  button {
    margin: 0 0 10px 10px;
  }
}

.footer-btn {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 20px 20px calc(#{$safeBottomHeight} + 20px);
}
</style>
