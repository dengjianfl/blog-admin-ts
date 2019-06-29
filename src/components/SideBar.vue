<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import bus from '../common/bus';

@Component
export default class SideBar extends Vue {

    @Prop() private msg!: string;

    private collapse: boolean = false;

    private items: object[] = [
                {
                    icon: 'el-icon-s-home',
                    index: '/dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-notebook-1',
                    index: '/articleList',
                    title: '文章列表'
                },
                {
                    icon: 'el-icon-document-add',
                    index: '/addArticle',
                    title: '新增文章'
                },
                {
                    icon: 'el-icon-user-solid',
                    index: '/donate',
                    title: '支持作者'
                }
            ];

   
    // 计算属性
    get onRoutes () {
        return this.$route.path;
    }

    private mounted() {
        bus.$on('collapse', (msg: boolean) => {
            this.collapse = msg;
        })
    }




}
</script>

<style lang="scss" scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
