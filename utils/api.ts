import {NuxtAxiosInstance} from '@nuxtjs/axios'
import {AxiosError, AxiosResponse} from 'axios'

let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  // axiosInstance.onRequest((config) => {
  //   config.headers.common['Authorization'] = 'KakaoAK f34e842e06dda695d94790ca99ac845d';
  // })

  axiosInstance.onResponse((response: AxiosResponse) => {
    console.info('onResponse :: ', response);
    return response;
  })

  axiosInstance.onError(async (error: AxiosError) => {
    console.error('onError');
    console.dir(error);
  })

  $axios = axiosInstance
}

export {$axios}
