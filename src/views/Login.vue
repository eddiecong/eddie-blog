<template>
  <div class="signbox">

    <!-- Sign In Box-->
    <div class="signin" v-if="status==1">
      <Form ref="formInline" :model="loginForm" :rules="loginRules">
          <FormItem prop="user">
            <Input type="text" v-model="loginForm.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit">Sign in</Button>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="toSignUp">Sign Up</Button>
          </FormItem>
      </Form>
    </div>

    <!-- Sign up Box -->
    <div class="signup" v-else>
      <Form ref="formInline" :model="regForm" :rules="regRules">
        <FormItem prop="user">
          <Input type="text" v-model="regForm.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="regForm.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">Register</Button>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="toSignIn">Sign In</Button>
        </FormItem>
      </Form>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 1,
      loginForm: {
        user: '',
        password: ''
      },
      regForm: {
        user: '',
        password: ''
      },
      loginRules: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      },
      regRules: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    handleSubmit () {
      this.$axios.post('http://127.0.0.1:3000/api/user/register', this.regForm)
        .then(res => {
          console.log(res)
        })
    },
    toSignUp () {
      this.status = 2
    },
    toSignIn () {
      this.status = 1
    }
  }
}
</script>

<style scoped>

.ivu-form {
  height: 200px;
}
</style>
