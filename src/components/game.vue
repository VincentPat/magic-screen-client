<template>
    <div class="game-cnt">
        <iframe
            :src="url"
            class="game-cnt__iframe"
            @load="onload"></iframe>
        <msloading :show="loading"></msloading>
    </div>
</template>

<script>
import appConfig from '@/config';
import msloading from '@/components/msloading';

export default {
    name: 'game',
    components: {
        msloading
    },
    data() {
        return {
            url: null,
            loading: false
        };
    },
    methods: {
        onload() {
            this.loading = false;
        },
        changeUrl() {
            const name = this.$route.params.name;
            const url = appConfig.tabs[name].url;
            if (this.url !== url) {
                this.url = url;
                this.loading = true;
            }
        }
    },
    mounted() {
        this.changeUrl();
    },
    watch: {
        $route: function $route() {
            this.changeUrl();
        }
    }
};
</script>

<style lang="scss">
@import '../style/mixin.scss';

.game-cnt {
    @include fullscreen;
    &__iframe {
        border: none;
        @include fullscreen;
    }
}
</style>


