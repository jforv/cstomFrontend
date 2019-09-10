<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <Notification :message="form.error" v-if="form.error" />
                <p class="text-muted">Sign In to your account</p>
                <b-form method="post" @submit.prevent="login" show="show">
                  <div>
                    <b-form-group id="input-group-0" label="Enter Email:" label-for="input-0">
                      <b-form-input
                        id="input-0"
                        v-model="form.email"
                        required
                        placeholder="Enter Email"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Password" label-for="input-2">
                      <b-form-input
                        id="input-2"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="Enter password"
                      ></b-form-input>
                    </b-form-group>
                    <b-row>
                      <b-col cols="4">
                        <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                      </b-col>
                      <b-col cols="4" class="text-right">
                        <b-button variant="link" class="px-0">Forgot password?</b-button>
                      </b-col>
                      <b-col cols="4" class="text-center">
                        <b-button variant="warning" class="px-4" to="/pages/register">Register</b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
  <!-- <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="icon-user" />
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <input type="text" class="form-control" placeholder="Username" />
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="icon-lock" />
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <input type="password" class="form-control" placeholder="Password" />
  </b-input-group>-->
</template>

<script>
import Notification from '@/components/AppNotifications'
export default {
  name: 'Login',
  layout: 'clean',
  auth: 'guest',
  components: {
    Notification
  },
  data: () => ({
    form: {
      email: 'xb@gmail.com',
      password: '1234',
      error: null
    },
    show: true
  }),
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        console.log('grace', e.response.data.message)

        this.form.error = e.response.data.message
        console.log(this.form.error)
      }
    }
  }
}
</script>
