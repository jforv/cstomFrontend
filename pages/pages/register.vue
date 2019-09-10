<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <h1>Register</h1>
              <Notification :message="form.error" v-if="form.error" />
              <!-- <b-alert :show="showDismissibleAlert" variant="danger" dismissible>{{ error }}</b-alert> -->
              <p class="text-muted">Create your account</p>
              <!-- <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>
                    <i class="icon-user" />
                  </b-input-group-text>
                </b-input-group-prepend>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.username"
                  placeholder="Username"
                  required
                />
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>@</b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" v-model="form.email" placeholder="Email" />
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>
                    <i class="icon-lock" />
                  </b-input-group-text>
                </b-input-group-prepend>
                <input
                  type="password"
                  class="form-control"
                  v-model="form.password"
                  placeholder="Password"
                />
              </b-input-group>

              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text>
                    <i class="icon-lock" />
                  </b-input-group-text>
                </b-input-group-prepend>
                <input
                  type="password"
                  class="form-control"
                  v-model="form.password2"
                  placeholder="Repeat password"
                />
              </b-input-group>

              <b-button @click="submit" variant="success" block>Create Account</b-button>-->
              <div>
                <b-form method="post" @submit.prevent="register" show="show">
                  <b-form-group id="input-group-0" label="Enter username:" label-for="input-0">
                    <b-form-input
                      id="input-0"
                      v-model="form.username"
                      required
                      placeholder="Enter username"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="Password"
                    label-for="input-2"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.password"
                      type="password"
                      required
                      placeholder="Enter password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-3"
                    label="Repeat Password"
                    label-for="input-3"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.password2"
                      type="password"
                      required
                      placeholder="Enter password"
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
                <!-- <b-card class="mt-3" header="Form Data Result">
                  <pre class="m-0">{{ form }}</pre>
                </b-card>-->
              </div>
              <div class="has-text-centered" style="margin-top: 20px">
                Already got an account?
                <nuxt-link to="/pages/login">Login</nuxt-link>
              </div>
            </b-card-body>
            <!-- <b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block class="btn btn-facebook">
                    <span>facebook</span>
                  </b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block class="btn btn-twitter" type="button">
                    <span>twitter</span>
                  </b-button>
                </b-col>
              </b-row>
            </b-card-footer>-->
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/AppNotifications'
export default {
  name: 'Register',
  layout: 'clean',
  auth: 'guest',
  components: {
    Notification
  },
  data: () => ({
    form: {
      username: 'josh',
      email: 'xb@gmail.com',
      name: 'josh',
      password: '1234',
      password2: '1234',
      error: null
    },
    show: true
  }),
  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password
        })

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
    // }
    // onSubmit(evt) {
    //   evt.preventDefault()
    //   alert(JSON.stringify(this.form))
    // },
    // onReset(evt) {
    //   evt.preventDefault()
    //   // Reset our form values
    //   this.form.email = ''
    //   this.form.username = ''
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false
    //   this.$nextTick(() => {
    //     this.show = true
    //   })
    // }
  }
}
</script>
