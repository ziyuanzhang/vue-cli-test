<template>
  <div id="app">
    <app-header v-bind:headerTitle="title" v-on:changeTitle="update($event)"></app-header>
    <app-nav ></app-nav>
    <div class="app-container">
          <router-view/>
    </div>
    <app-footer v-bind:footerTitle="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-footer': Footer
  },
  data () {
    return {
      nijias: [
        { name: 'AA', content: 'wow', show: 'false' },
        { name: 'BB', content: 'wow', show: 'false' },
        { name: 'CC', content: 'wow', show: 'false' },
        { name: 'DD', content: 'wow', show: 'false' },
        { name: 'EE', content: 'wow', show: 'false' },
        { name: 'FF', content: 'wow', show: 'false' }
      ],
      title: 'nijia title'
    }
  },
  computed: {

  },
  methods: {
    update: function (title) {
      this.title = title
    }
  }
}
</script>

<style>
html {
  font-size: 62.5%;
  height: 100%;
} /*--手机用--*/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Microsoft YaHei", "Arial,SimSun", sans-serif;
  font-size: 14px;
}
fieldset,img {
  border: none;
}
address,caption,cite,code,dfn,em,strong,var {
  font-style: normal;
  font-weight: normal;
}
ol,ul,dl {
  list-style: none;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}
.clear {
  zoom: 1;
}
.clear:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.outline {
  outline: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}
.pointer {
  cursor: pointer;
}

.verticalMiddle {
  vertical-align: middle;
}
.textCenter {
  text-align: center;
}
.textLeft {
  text-align: left;
}
.textRight {
  text-align: right;
}
.textIndex2 {
  text-indent: 2em;
}
.overVisible {
  overflow: visible;
}
.overHidTXT {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.overHidTXTBreak {
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}

.fs0 {
  font-size: 0;
}
.fs14 {
  font-size: 14px;
}
.c-999 {
  color: #999;
}
.w40 {
  width: 40px;
}
.h25 {
  height: 25px;
}
.lh25 {
  line-height: 25px;
}
.u-line {
  text-decoration: underline;
}
.mar0-auto {
  margin: 0 auto;
}
.marT10 {
  margin-top: 10px;
}
.marTR10-10 {
  margin: 10px 10px 0 0;
}
.pad10 {
  padding: 10px;
}
.padT10 {
  padding-top: 10px;
}
.padTL5-10 {
  padding: 5px 0 0 10px;
}
.app-container{
  padding: 10px 0;
  background-color: aquamarine;
}
</style>
