<template>
    <div id="app">
        <router-view/>
        <!-- 导航栏 -->
        <mstab></mstab>
    </div>
</template>

<script>
import mstab from '@/components/mstab';

export default {
    name: 'app',
    components: {
        mstab
    }
};
</script>

<style lang="scss">
@import './style/color.scss';

#app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    color: $color-text-primary;
    font-size: 14px;
}
</style>
