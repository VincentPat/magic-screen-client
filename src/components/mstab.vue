<template>
    <div class="mstab">
        <!-- 游戏列表 -->
        <mstab-item
            v-for="(item, index) in tabs"
            :key="index"
            :name="item.name"
            :icon="item.icon"
            :active="index === activeTab"
            @click.native="switchTab(index)">
        </mstab-item>
        <!-- 工具栏 -->
        <mstab-item
            v-show="showFullscreenBtn"
            :name="fullscreenBtn.name"
            :icon="fullscreenBtn.icon"
            @click.native="toggleFullscreen">
        </mstab-item>
        <!-- 折叠按钮 -->
        <div class="mstab__expand__wrapper">
            <mstab-expand></mstab-expand>
        </div>
    </div>
</template>

<script>
import mstabItem from '@/components/mstab-item';
import mstabExpand from '@/components/mstab-expand';
import appConfig from '@/config';

export default {
    name: 'mstab',
    components: {
        mstabItem,
        mstabExpand
    },
    computed: {
        activeTab() {
            return this.$route.params.name;
        },
        showFullscreenBtn() {
            return document.webkitFullscreenEnabled;
        },
        fullscreenBtn() {
            const btn = {
                name: this.fullscreen ? '取消全屏' : '全屏',
                icon: this.fullscreen ? 'narrow' : 'fullscreen'
            };
            return btn;
        }
    },
    data() {
        return {
            tabs: appConfig.tabs,
            fullscreen: false // 是否全屏
        };
    },
    methods: {
        // 切换标签页
        switchTab(tab) {
            this.$router.push({
                name: 'game',
                params: {
                    name: tab
                }
            });
        },
        // 全屏
        toggleFullscreen() {
            if (this.fullscreen) {
                document.webkitExitFullscreen();
            } else {
                document.body.webkitRequestFullscreen();
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        // 监听全屏状态的变化
        document.addEventListener('webkitfullscreenchange', () => {
            this.fullscreen = document.webkitIsFullScreen;
        });
    }
};
</script>

<style lang="scss">
@import '../style/color.scss';
@import '../style/mixin.scss';

.mstab {
    background: white;
    border-top: 1px solid $color-border-base;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    transform: translateY(100%);
    @include transition;
    &:hover {
        transform: translateY(0%);
    }
    &__item {
        width: 80px;
        margin: 10px;
        &__icon {
            line-height: 28px;
            height: 28px;
            vertical-align: bottom;
            .iconfont {
                font-size: 24px;
            }
        }
        &__name {
            font-size: 14px;
            line-height: 22px;
            height: 22px;
        }
    }
    &__expand {
        width: 50px;
        margin-right: 30px;
        background: white;
        border-radius: 4px 4px 0px 0px;
        border: 1px solid $color-border-base;
        border-bottom: none;
        line-height: 20px;
        display: inline-block;
        &__wrapper {
            text-align: right;
            position: absolute;
            bottom: 100%;
            height: 20px;
            width: 100%;
        }
    }
}
</style>


