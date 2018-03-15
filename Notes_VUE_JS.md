# VUE J


LES LIENS
1 [SITE WEB OFFICIEL](https://vuejs.org/)
2 [PAGE GITHUB](https://github.com/vuejs/vue)
3 [BLOG SUR MEDIUM](https://medium.com/the-vue-point)
4 [Liste de Projets addons etc pour VUEJS](https://github.com/vuejs/awesome-vue)
5 [a button plugin for VueJS]

## Install a project CLI
You need to have npm and Vue CLI

```bash
vue init webpack-simple vue-coffee

? Project name (vue-coffee) vue-coffee
? Project name vue-coffee
? Project description (A Vue.js project) a vue app for coffee machines
? Project description a vue app for coffee machines
? Author John
? Author John
? License (MIT)
? License MIT
? Use sass? (y/N) Y
? Use sass? Yes

   vue-cli · Generated "vue-coffee".

   To get started:

     cd vue-coffee
     npm install
     npm run dev
```

```bash
cd vue-coffee
```

```bash
npm install
```

```bash
npm run dev
```

## Directives in Vue JS

**v-if**

**v-elseif**

**v-else**

**v-show**

**v-for**

**v-model**

**v-bind**

**v-on**

## Promises

[the-promise-of-a-burger-party](https://kosamari.com/notes/the-promise-of-a-burger-party)    
[le même en français](https://frank.taillandier.me/2017/03/23/comprendre-les-promesses-en-javascript/)



### HTTP Requests

```js
// GET

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();


// POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);
```

creating an **AJAX** request using an **XMLHttpRequest**, or **XHR**, object. 
