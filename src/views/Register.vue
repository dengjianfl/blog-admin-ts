<template>
	<div class="login">
        <div class="login-wrap">
            <h3>keep going</h3>
            <el-form ref="ruleForm" label-width="50px" class="demo-ruleForm">
                <el-form-item label="账号">
                    <el-input type="text" v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input type="text" v-model="phone"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="register" class="register-btn">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密码">
                <el-input type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
                <el-button>重置</el-button>
            </el-form-item>
        </el-form> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ajax } from '../api/http';
import api from '../api';

@Component({
    components: {},
})
export default class Register extends Vue {

    private username: string = '';
    private phone: string = '';
    private password: string = '';
    

    private register() {
        ajax({
            url: api.register,
            data: {
                username: this.username,
                phone: this.phone,
                password: this.password
            }
        }).then(res => {
            console.log(JSON.stringify(res));
        }).catch(err => {
            console.log(JSON.stringify(err));
        });
    }
}
</script>

<style lang="scss" scoped>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/image/login-bg.jpg);
    background-size: 100%;
}
.login-wrap{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 350px;
    padding: 30px 35px 12px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6; 

    h3{
        text-align: center;
        height: 90px;
        line-height: 90px;
        font-size: 32px;
        font-weight: bold;
        font-family:'Times New Roman', Times, serif;
    }
    .register-btn{
        width: 100%;
    }
}
</style>

