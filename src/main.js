import Vue from 'vue';
import App from './App.vue';
import './main.scss';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTimes, faList, faTh } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(faList);
// library.add(faTimes);
// library.add(faTh);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
	render: h => h(App),
}).$mount('#app');
