<template>
    <div class="article-list">
        <el-table
            :data="content"
            stripe
            style="width: 100%">
            <el-table-column
                align="center"
                prop="title"
                label="标题">
            </el-table-column>
            <el-table-column
                align="center"
                prop="description"
                label="简介">
            </el-table-column>
            <el-table-column
                align="center"
                prop="category"
                :formatter="categoryFormatter"
                label="分类">
            </el-table-column>
            <el-table-column
                align="center"
                prop="author"
                label="作者">
            </el-table-column>
            <el-table-column
                align="center"
                prop="created"
                label="创建时间"
                :formatter="timeFormatter">
            </el-table-column>
            <el-table-column
                align="center"
                prop="updated"
                label="更新时间"
                :formatter="timeFormatter">
            </el-table-column>
            <el-table-column
                align="center"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="lookOver(scope.row.id)" type="text" size="small">查看</el-button>
                    <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ajax } from '../api/http';
import { timestampToTime } from '../common/utils';
import api from '../api';

@Component({
    components: {

    },
})
export default class ArticleList extends Vue {

    private content: Array<object> = [];
    private category: Array<object> = [];

    private mounted() {
        this.getArticleCategory();
        this.getArticleList();
    }

    // 获取文章列表
    private getArticleList() {
        ajax({
            url: api.getAllArticle,
            data: {}
        }).then(res => {
            if (!res.isSuccess) {
                this.$message({message: res.msg, type: 'error'});
            }
            this.content = res.data;
        }).catch(err => {
            console.log(JSON.stringify(err));
        });
    }

    // 获取文章分类
    private getArticleCategory() {
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

    private categoryFormatter(row: any, column: any, val: any) {
        for(let i = 0; i < this.category.length; i++) {
            if (val == this.category[i].cKey) {
                return this.category[i].cValue;
            }
        }
    }

    private timeFormatter(row: any, column: any, val: any) {
        return timestampToTime(val);
    }

    private lookOver(id: any){
        sessionStorage.setItem('articleId', id);
        this.$router.push('/articleDetails');
    }

    private edit(){
        console.log('$##&**^$');
    }
}
</script>
