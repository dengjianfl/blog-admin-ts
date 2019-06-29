<template>
    <div class="home">
        <Header></Header>
        <SideBar></SideBar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <Tags></Tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import Tags from '@/components/Tags.vue';
import bus from '../common/bus';


@Component({
    components: {
        Header,
        SideBar,
        Tags
    },
})
export default class Home extends Vue {

    private collapse: boolean = false;

    private mounted() {
        bus.$on('collapse', (msg: boolean) => {
            this.collapse = msg;
        })
    }
}
</script>

<style lang="scss" scoped>
.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0; 
}
.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content-collapse {
    left: 65px;
}
</style>

