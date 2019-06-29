<template>
    <div class="tags" v-if="showTags">
        <ul>
            <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
        <!-- <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div> -->
    </div>
</template>



<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import bus from '../common/bus';

export interface PathItem {
    title: string;
    path: string;
    name: any;
}

@Component
export default class Tags extends Vue {

    private tagsList: object[] = [];

    @Watch('$route')
    private routerChange(val: any, oldVal: any) {
        this.setTags(val);
    }

    get showTags() {
        return this.tagsList.length > 0;
    }

    private setTags(route: any) {

        const isExist: boolean = this.tagsList.some((item:any) => {
            return item.path === route.fullPath;
        })

        if (!isExist) {
            if(this.tagsList.length >= 8){
                this.tagsList.shift();
            }
            const pathItem: PathItem = {
                title: route.meta.title,
                path: route.fullPath,
                name: route.name
            };
            this.tagsList.push(pathItem);
        }

        bus.$emit('tags', this.tagsList);

    }

    private isActive(path: any) {
        return path === this.$route.fullPath;
    }

    private mounted() {
        this.setTags(this.$route);
    }

    // 关闭单个标签
    private closeTags(index: number) {
        const delItem: any = this.tagsList.splice(index, 1)[0];
        const item:any = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
        if (item) {
            delItem.path === this.$route.fullPath && this.$router.push(item.path);
        }else{
            this.$router.push('/');
        }
    }
}
</script>


<style lang="scss" scoped>
    .tags {
        position: relative;
        height: 30px;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd;
    }

    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;

        &.active{
            border: 1px solid #409eff;
            background-color: #409eff;
        }
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        color: #fff;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        height: 30px;
        background: #fff;
        box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        z-index: 10;
    }

</style>
