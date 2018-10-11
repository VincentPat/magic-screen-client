import Vue from 'vue';
import Router from 'vue-router';
import game from '../components/game';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/game/:name',
            name: 'game',
            component: game
        }
    ]
});
