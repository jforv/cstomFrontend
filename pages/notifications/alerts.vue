<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" md="6">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <font-awesome-icon :icon="['fas', 'align-justify']" />
              <strong>Bootstrap Alert</strong>
              <div class="card-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/alert" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div>
              <b-alert show variant="primary">Primary Alert</b-alert>
              <b-alert show variant="secondary">Secondary Alert</b-alert>
              <b-alert show variant="success">Success Alert</b-alert>
              <b-alert show variant="danger">Danger Alert</b-alert>
              <b-alert show variant="warning">Warning Alert</b-alert>
              <b-alert show variant="info">Info Alert</b-alert>
              <b-alert show variant="light">Light Alert</b-alert>
              <b-alert show variant="dark">Dark Alert</b-alert>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <font-awesome-icon :icon="['fas', 'align-justify']" />Alert
              <small>
                use
                <code>.alert-link</code> to provide links
              </small>
            </div>
            <div>
              <b-alert show variant="primary">
                Primary Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="secondary">
                Secondary Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="success">
                Success Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="danger">
                Danger Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="warning">
                Warning Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="info">
                Info Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="light">
                Light Alert with
                <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="dark">
                Dark Alert with
                <b-link href="#" class="alert-link">an example link</b-link>.
              </b-alert>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <font-awesome-icon :icon="['fas', 'align-justify']" />
              <strong>Alerts</strong>
              <small>with additional content</small>
            </div>
            <b-alert show variant="success">
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can see
                how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p
                class="mb-0"
              >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </b-alert>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <font-awesome-icon :icon="['fas', 'align-justify']" />
              <strong>Alerts</strong>
              <small>dismissible</small>
            </div>
            <div>
              <b-alert show dismissible>Dismissible Alert!</b-alert>
              <b-alert :show="showDismissibleAlert" variant="danger" dismissible>Dismissible Alerts!</b-alert>
              <b-btn
                variant="info"
                class="m-1"
                @click="showDismissibleAlert=true"
              >Show dismissible alert ({{ showDismissibleAlert?'visible':'hidden' }})</b-btn>
            </div>
          </b-card>
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <font-awesome-icon :icon="['fas', 'align-justify']" />
              <strong>Alerts</strong>
              <small>auto dismissible</small>
            </div>
            <div>
              <b-alert
                :show="dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="dismissCountdown=0"
                @dismiss-count-down="countDownChanged"
              >
                Alert will dismiss after
                <strong>{{ dismissCountDown }}</strong> seconds...
              </b-alert>
              <b-alert
                :show="dismissCountDown"
                dismissible
                variant="info"
                @dismissed="dismissCountdown=0"
                @dismiss-count-down="countDownChanged"
              >
                Alert will dismiss after {{ dismissCountDown }} seconds...
                <b-progress
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  variant="info"
                  height="4px"
                />
              </b-alert>
              <b-btn variant="info" class="m-1" @click="showAlert">Show alert with timer</b-btn>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alerts',
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
