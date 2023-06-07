<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input v-model="model.username" placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
          >Login</el-button>
        </el-form-item>
        <a class="forgot-password" href="#">Forgot password ?</a>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Rule from "../js/valid"
export default {
  name: "login",
  data() {
    return {
      validCredentials: {
        username: "138999888",
        password: "138999888"
      },
      model: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur"
          },
          {
            validator: Rule.validRule.chinaNumber, trigger: "blue"
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      } 
      console.log(valid)
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      if (
        this.model.username === this.validCredentials.username &&
        this.model.password === this.validCredentials.password
      ) {
        validateAge(this.model.username)
        this.$message.success("Login successfull");
      } else {
        this.$message.error("Username or password is invalid");
      }
    },
    validateAge(idNumber){
      // idNumber = this.model.username;
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

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}

.el-button--primary {
  background: rgb(0, 124, 137);
  border-color: rgb(0, 124, 137);
}
  .el-button--primary:hover,
  .el-button--primary.active,
  .el-button--primary:focus {
    background: lighten(rgb(0, 124, 137), 7);
    border-color: lighten(rgb(0, 124, 137), 7);
  }

.login .el-input__inner:hover {
  border-color: rgb(0, 124, 137);
}

.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
 
}
.login .el-input__prefix > .el-input__icon {
    width: 30px;
  }

.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: rgb(0, 124, 137);
  text-decoration: none;
}
  a:hover,
  a:active,
  a:focus {
    color: lighten(rgb(0, 124, 137), 7);
  }
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>


