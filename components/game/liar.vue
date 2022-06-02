<template>
  <div class="game-in" v-if="liarMode">
    <template v-if="!isEndLiar">
      <div class="info">
        <p>게임모드: {{ liarMode === 'fool' ? '바보' : liarMode === 'spy' ? '스파이' : '기본' }}</p>
        <p>참여인원: {{ participants }}</p>
        <p>주제: {{ subject.label }}</p>
      </div>
      <div class="question-wrap">
        <swiper ref="swiper"
                class="custom"
                :options="swiperOptions">
          <swiper-slide v-for="(index) in game.liar.participants" :key="`game_${index}`">
            <div class="shadow" v-if="isShow" @click="setIsShow(false)">
              <p><span>{{ index + 1 }}</span><br>클릭하여 확인해주세요</p>
            </div>
            <p v-if="liarMode !== 'fool' && index === game.liar.liar">
              당신은 <span class="liar">라이어</span>입니다.
            </p>
            <p v-else-if="liarMode === 'spy' && index === game.liar.spy">
              당신은 <span class="liar">스파이</span>입니다.<br>
              제시어는 <span class="quiz">{{ gameList[game.liar.quiz[0]].value }}</span>입니다.
            </p>
            <p v-else-if="liarMode === 'fool' && index === game.liar.liar">
              당신은 <span class="liar">일반 시민</span>입니다.<br>
              제시어는 <span class="quiz">{{ gameList[game.liar.quiz[1]].value }}</span>입니다.
            </p>
            <p v-else>
              당신은 <span class="liar">일반 시민</span>입니다.<br>
              제시어는 <span class="quiz">{{ gameList[game.liar.quiz[0]].value }}</span>입니다.
            </p>
          </swiper-slide>
          <div class="next-wrap" v-if="game.liar.participants.length !== (activeIndex + 1)">
            <g-button @click="nextSlide">다음</g-button>
          </div>
          <div class="next-wrap" v-else>
            <g-button @click="endLiar">게임 결과</g-button>
          </div>
        </swiper>
      </div>
    </template>
    <div class="result-wrap" v-else>
      <p class="tit">라이어를 골라주세요.</p>
      <div class="liar-list">
        <g-button v-for="(index) in game.liar.participants"
                  :key="`liar_${index}`"
                  :is-gray="true" @click="checkLiar(index)">{{ index + 1 }}
        </g-button>
      </div>
      <template v-if="isLiarTrue">
        <p class="tit">제시어를 골라주세요.</p>
        <ul class="result-ul">
          <li v-for="(option, index) in gameList"
              :key="`result_${index}`"
              @click="checkResult(index)">
            {{ option.value }}
          </li>
        </ul>
      </template>
      <div class="btn-wrap">
        <g-button @click="goHome">처음으로</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';
import gameSetting from '~/composable/gameSetting';
import GButton from '~/components/_atoms/GButton.vue';

export default defineComponent({
  name: 'ComponentLiar',
  components: {
    GButton,
  },
  setup(props, { root }) {
    const {
      swiper,
      game,
      gameType,
      gameList,
      subject,
      liarMode,
      participants,
      swiperOptions,
      activeIndex,
      isShow,
      nextSlide,
      setIsShow,
    } = gameSetting();

    const data = reactive({
      isEndLiar: false,
      isLiarTrue: false,
    })

    const methods = {
      endLiar() {
        data.isEndLiar = true;
      },
      checkLiar(value: number) {
        if (value === game.liar.liar) {
          root.$swal(`${value + 1}번째 사람은 라이어가 맞습니다.`)
          data.isLiarTrue = true;
        }
        else {
          root.$swal(`${value + 1}번째 사람은 라이어가 아닙니다.`)
          data.isLiarTrue = false;
        }
      },
      checkResult(value: number) {
        console.log(value);
        root.$swal(value === game.liar.quiz[0] ? '제시어가 맞습니다.' : '제시어가 아닙니다.')
      },
      goHome() {
        root.$swal({
          showCancelButton: true,
          customClass: {
            container: 'modal_container is_cancelBtn',
          },
          confirmButtonText: '예',
          title: '처음으로 이동하시겠습니까?',
        }).then((result) => {
          if (result.isConfirmed) window.location.href = '/game';
        });
      }
    }

    return {
      swiper,
      game,
      gameType,
      gameList,
      subject,
      liarMode,
      participants,
      swiperOptions,
      activeIndex,
      isShow,
      nextSlide,
      setIsShow,
      ...methods,
      ...toRefs(data),
    }
  }
})
</script>

<style lang="scss" scoped>
.question-wrap {
  .swiper-slide {
    p {
      line-height: 1.4em;
    }
    .liar {
      color: $Gray00;
      background-color: $Gray90;
    }
    .quiz {
      color: $Gray00;
      background-color: $Gray60;
    }
  }
}

.result-wrap {
  .tit {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  .liar-list {
    margin-left: -10px;

    + .tit {
      margin-top: 50px;
    }
  }
  .result-ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: $Gray20;
    gap: 1px;
    li {
      height: 60px;
      outline: 1px solid $Gray00;
      border-collapse: collapse;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
