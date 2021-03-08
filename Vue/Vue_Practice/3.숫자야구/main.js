// import문법: 기존에 ES2015에 들어있는 모듈시스템 문법. 설치한 vue를 가져오는 것이다.
// 여기가 시작점이기때문에 어플리케이션에서 사용할 js들을 전부 여기로 땡겨와야 한다.
import Vue from 'vue';

import NumberBaseball from "./NumberBaseball";

new Vue(NumberBaseball).$mount('#root');
