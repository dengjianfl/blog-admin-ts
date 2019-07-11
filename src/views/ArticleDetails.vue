<template>
    <div class="article-details">
        <h3>{{content.title}}</h3>
        <p>{{content.description}}</p>

        <div class="content" v-html="content.content"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ajax } from '../api/http';
import api from '../api';

@Component({
    components: {

    },
})
export default class ArticleDetails extends Vue {
    private content: object = {};

    private mounted() {
        ajax({
            url: api.getAnArticle,
            data: {
                id: sessionStorage.getItem('articleId')
            }
        }).then(res => {
            if (!res.isSuccess) {
                this.$message({message: res.msg, type: 'error'});
            }
            this.content = res.data;
        }).catch(err => {
            console.log(JSON.stringify(err));
        });
    }
}
</script>

<style lang="scss" scoped>
.article-details{
    background-color: #fff;
    padding: 10px 20px 30px;
    border-radius: 8px;
    h3 {
        height: 44px;
        line-height: 44px;
        font-size: 20px;
    }
    p{
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        border-bottom: 1px dotted #ccc;
    }
    .content{
        padding-top: 14px;
    }
}
</style>