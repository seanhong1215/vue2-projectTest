<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="身分證字號" prop="userName">
    <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
  <script>
import Rule from "@/js/valid"
    export default {
      data() {
        return {
            ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          userName: ''
        },
      rules: {
        userName: [
          {
            required: true,
            message: "userName is required",
            trigger: "blur"
          },
        //   {
        //     min: 10,
        //     message: "請輸入正確的數字",
        //     trigger: "blur"
        //   },
          { type: 'number', message: '必须为数字值'},
          {
            validator: Rule.validRule.chinaNumber, trigger: "blue"
          }
        ],
 pass: [
            // { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            // { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            // { validator: checkAge, trigger: 'blur' }
          ]
        
    }
        };
      },
      computed: {
        validateAge(idNumber){
      console.log(idNumber)
       // 提取出生年月日信息
        const birthday = idNumber.substring(6, 14);
        
        // 將出生年月日轉換為日期格式
        const year = parseInt(birthday.substring(0, 4));
        const month = parseInt(birthday.substring(4, 6));
        const day = parseInt(birthday.substring(6, 8));
        const birthDate = new Date(year, month - 1, day);
        
        // 計算年齡
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        
        // 過濾結果
        if (age <= 20 || age >= 70) {
          return false; // 年齡不在許可範圍內
        }
        
        return true; // 年齡在許可範圍內
    }
      },
      methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                console.log(valid)
                this.validateAge(this.ruleForm.username)
            if (valid) {
                alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
  </script>