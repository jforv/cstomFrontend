<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col 
        sm="6" 
        lg="3">
        <b-card>
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs my-3" 
            variant="success"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        lg="3">
        <b-card>
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs my-3" 
            variant="info"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        lg="3">
        <b-card>
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs my-3" 
            variant="warning"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        lg="3">
        <b-card>
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs my-3" 
            variant="danger"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col 
        sm="6" 
        lg="3">
        <b-card class="text-white bg-primary">
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs my-3"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        lg="3">
        <b-card class="text-white bg-warning">
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs my-3"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        lg="3">
        <b-card class="text-white bg-danger">
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs my-3"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        lg="3">
        <b-card class="text-white bg-info">
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs my-3"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-cogs bg-primary p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-laptop bg-info p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-bell bg-danger p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card 
          :no-body="true" 
          footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-cogs bg-primary p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
          <div slot="footer">
            <a 
              class="font-weight-bold font-xs btn-block text-muted" 
              href="#">View More <i class="fas fa-angle-right float-right font-lg"/></a>
          </div>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card 
          :no-body="true" 
          footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-laptop bg-info p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
          <div slot="footer">
            <a 
              class="font-weight-bold font-xs btn-block text-muted" 
              href="#">View More <i class="fas fa-angle-right float-right font-lg"/></a>
          </div>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card 
          :no-body="true" 
          footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
          <div slot="footer">
            <a 
              class="font-weight-bold font-xs btn-block text-muted" 
              href="#">View More <i class="fas fa-angle-right float-right font-lg"/></a>
          </div>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card 
          :no-body="true" 
          footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fas fa-bell bg-danger p-3 font-2xl mr-3 float-left"/>
            <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
          <div slot="footer">
            <a 
              class="font-weight-bold font-xs btn-block text-muted" 
              href="#">View More <i class="fas fa-angle-right float-right font-lg"/></a>
          </div>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-cogs bg-primary p-4 font-2xl mr-3 float-left"/>
            <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-laptop bg-info p-4 font-2xl mr-3 float-left"/>
            <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-moon-o bg-warning p-4 font-2xl mr-3 float-left"/>
            <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-bell bg-danger p-4 font-2xl mr-3 float-left"/>
            <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left"/>
            <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left"/>
            <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left"/>
            <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col 
        cols="6" 
        lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fas fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"/>
            <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col 
        md="3" 
        sm="6">
        <div class="social-box facebook">
          <!-- <i class="fas facebook"/> -->
          <i class="fab fa-facebook-f"/>
          <ul>
            <li>
              <strong>89k</strong>
              <span>friends</span>
            </li>
            <li>
              <strong>459</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
      <b-col 
        md="3" 
        sm="6">
        <div class="social-box twitter">
          <i class="fab fa-twitter"/>
          <ul>
            <li>
              <strong>973k</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>1.792</strong>
              <span>tweets</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
      <b-col 
        md="3" 
        sm="6">
        <div class="social-box linkedin">
          <i class="fab fa-linkedin"/>
          <ul>
            <li>
              <strong>500+</strong>
              <span>contacts</span>
            </li>
            <li>
              <strong>292</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
      <b-col 
        md="3" 
        sm="6">
        <div class="social-box google-plus">
          <i class="fab fa-google-plus"/>
          <ul>
            <li>
              <strong>894</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>92</strong>
              <span>circles</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
    </b-row><!--/.row-->
    <b-card-group class="mb-4">
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-people"/>
        </div>
        <div class="h4 mb-0">87.500</div>
        <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
        <b-progress 
          :value="25" 
          height="{}" 
          class="progress-xs mt-3 mb-0" 
          variant="info"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-user-follow"/>
        </div>
        <div class="h4 mb-0">385</div>
        <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
        <b-progress 
          :value="25" 
          height="{}" 
          class="progress-xs mt-3 mb-0" 
          variant="success"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-basket-loaded"/>
        </div>
        <div class="h4 mb-0">1238</div>
        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
        <b-progress 
          :value="25" 
          height="{}" 
          class="progress-xs mt-3 mb-0" 
          variant="warning"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-pie-chart"/>
        </div>
        <div class="h4 mb-0">28%</div>
        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
        <b-progress 
          :value="25" 
          height="{}" 
          class="progress-xs mt-3 mb-0"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-speedometer"/>
        </div>
        <div class="h4 mb-0">5:34:11</div>
        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
        <b-progress 
          :value="25" 
          height="{}" 
          class="progress-xs mt-3 mb-0" 
          variant="danger"/>
      </b-card>
    </b-card-group>
    <b-row>
      <b-col 
        sm="6" 
        md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"/>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs mt-3 mb-0" 
            variant="info"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"/>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs mt-3 mb-0" 
            variant="success"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"/>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs mt-3 mb-0" 
            variant="warning"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"/>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs mt-3 mb-0"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"/>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs mt-3 mb-0" 
            variant="danger"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"/>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-xs mt-3 mb-0" 
            variant="info"/>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col 
        sm="6" 
        md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"/>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs mt-3"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"/>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs mt-3"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card class="text-white bg-warning">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"/>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs mt-3"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card class="text-white bg-primary">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"/>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs mt-3"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card class="text-white bg-danger">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"/>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs mt-3"/>
        </b-card>
      </b-col>
      <b-col 
        sm="6" 
        md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"/>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress 
            :value="25" 
            height="{}" 
            class="progress-white progress-xs mt-3"/>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'Widgets',
  data() {
    return {
      msg: 'Widgets'
    }
  }
}
</script>
