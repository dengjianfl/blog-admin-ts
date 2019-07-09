<template>
    <div id="wangeditor">
        <div ref="editorElem" style="text-align:left"></div>
    </div>  
</template>


<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import bus from '../common/bus';
import { ajax } from '../api/http';
import api from '../api';
import E from 'wangeditor';

@Component
export default class WangEditor extends Vue {

    private editorContent: string = '';

    @Prop({
        type: Function,
        default: null,
    }) private catchData!: Function;

    private mounted() {
        //创建富文本实例
        let editor = new E(this.$refs.editorElem);       
        editor.customConfig.onchange = (html: string) => {
            this.editorContent = html;
            this.catchData(html);  //把这个html通过catchData的方法传入父组件
        }
        editor.create();
    }
}
</script>

<style lang="scss">
#wangeditor{
    .w-e-text {
        background-color: #ffffff;
    }
}

</style>
