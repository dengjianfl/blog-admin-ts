<template>
    <div class="add-article">
        <el-form ref="form" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="文章简介">
                <el-input v-model="description"></el-input>
            </el-form-item>

            <el-form-item label="文章分类">
                <el-radio-group v-model="radio">
                    <el-radio :label="item.cKey" v-for="(item, index) in category" :key="index">{{item.cValue}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="文章内容">
                <WangEditor :catchData="catchData"></WangEditor>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button type="primary">保存并发布</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WangEditor from '@/components/WangEditor.vue';
import { ajax } from '../api/http';
import api from '../api';

@Component({
    components: {
        WangEditor
    }
})
export default class AddArticle extends Vue {

    private title: string = '';
    private description: string = '';
    private radio: string = '';
    private content: string = '';
    private category: Array<object> = [];

    private mounted() {
        ajax({
            url: api.getArticleCategory,
            data: {
                
            }
        }).then(res => {
            if (!res.isSuccess) {
                this.$message({message: res.msg, type: 'error'});
            }
            this.category = res.data;
        }).catch(err => {
            console.log(JSON.stringify(err));
        });
    }

    private catchData(value: string) {
        this.content = value;
    }

    private save() {
        console.log(this.title);
        console.log(this.description);
        console.log(this.radio);
        console.log(this.content);

        ajax({
            url: api.addAnArticle,
            data: {
                title: this.title,
                description: this.description,
                category: this.radio,
                content: this.content
            }
        }).then(res => {
            if (!res.isSuccess) {
                this.$message({message: res.msg, type: 'error'});
            }
            
        }).catch(err => {
            console.log(JSON.stringify(err));
        });

        

        
    }

}
</script>

<style lang="scss" scoped>
.add-article{
    padding-top: 20px;
    padding-right: 40px;
}
</style>

