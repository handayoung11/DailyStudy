import Vue from "vue"; //ES6 문법 -> 설치한 모듈을 import를 통해 가져올 수 있다.
import NumberBaseball from "./NumberBaseball";

new Vue(NumberBaseball).$mount("#root"); //el 역할
