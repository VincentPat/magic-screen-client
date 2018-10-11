<template>
    <transition name="fade">
        <div class="msloading"
            v-show="show">
            <div>
                <i class="iconfont icon-loading"></i>
                <span v-html="text"></span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'msloading',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: '精彩马上呈现'
        }
    }
};
</script>

<style lang="scss">
@import '../style/mixin.scss';
@import '../style/color.scss';

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.msloading {
    @include fullscreen;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: $color-text-secondary;
    background: rgba(255, 255, 255, 0.9);
    .iconfont {
        font-size: 20px;
        margin-right: 4px;
        display: inline-block;
        animation-name: rotate;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: forward;
        animation-timing-function: linear;
    }
}
</style>


