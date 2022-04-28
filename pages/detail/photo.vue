<template>
  <div class="detail-wrap">
    <header>
      <a href="/game" class="btn__home">home</a>
      <h1>{{ mainInfo.title }}</h1>
    </header>
    <template v-if="!isGameStart">
      <div class="contents">
        <h2>문제 갯수 <span v-if="questionCount">({{ questionCount }}개)</span></h2>
        <div class="btn-wrap">
          <g-button v-for="(option, index) in questionNumberList"
                    :is-gray="true"
                    :key="`question_${index}`"
                    @click="setQuestionCount(option.value)">{{ option.label }}</g-button>
        </div>
      </div>
      <div class="footer-btn">
        <g-button :is-block="true" @click="setGameStart">게임 시작하기</g-button>
      </div>
    </template>
    <template v-else>
      <div class="contents">
        <photo></photo>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import GTimer from '~/components/_atoms/GTimer.vue';
import GButton from '~/components/_atoms/GButton.vue';
import gameSetting from '~/composable/gameSetting';
import photo from '~/components/game/photo.vue';

export default defineComponent({
  name: 'Photo',
  components: {
    GTimer,
    GButton,
    photo,
  },
  setup(props, { root }) {
    const {
      game,
      setSubject,
      setQuestionCount,
      questionCount,
      gameType,
      mainInfo,
      isGameStart,
      subject,
      countSpeedList,
      questionNumberList,
    } = gameSetting();

    const methods = {
      setGameStart() {
        if (!questionCount.value) {
          root.$swal('문제 갯수를 선택해주세요');
          return false;
        }

        root.$swal('Game Start 😆').then(() => {
          game.setGameStart({ subject: 'photo', questionCount: questionCount.value });
        });
      }
    }

    return {
      setSubject,
      setQuestionCount,
      questionCount,
      gameType,
      mainInfo,
      isGameStart,
      subject,
      countSpeedList,
      questionNumberList,
      ...methods,
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  background-color: #fff;
  position: relative;
  padding: 10px;

  h1 {
    font-size: 1.5em;
    font-weight: 400;
  }

  .btn__home {
    position: absolute;
    top: 50%;
    left: 10px;
    @include transform(translateY(-50%));
    width: 38px; height: 38px;
    background: $ic-30-common-arrow-left center no-repeat;
    text-indent: -9999em;
    overflow: hidden;
  }
}
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
