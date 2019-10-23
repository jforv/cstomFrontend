<template>
  <b-row>
    <b-col>
      <b-card v-if="show" header="Patient List">
        <!-- <div slot="header">
          Card with header actions
          <div class="card-header-actions">
            <b-link href="#" class="card-header-action btn-setting">
              <i class="icon-settings"></i>
            </b-link>
            <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
              <i class="icon-arrow-up"></i>
            </b-link>
            <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
              <i class="icon-close"></i>
            </b-link>
          </div>
        </div>-->
        <!-- <div> -->
        <!-- <font-awesome-icon :icon="['fas', 'align-justify']" />  -->
        <!-- <strong>Patients List</strong>
      <div class="card-actions"></div>
        </div>-->
        <template>
          <b-row>
            <b-col lg="4" md="4" sm="4" offset-md="8" class="my-1">
              <b-form-group>
                <b-input-group size="sm">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="Type to Search"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </template>
        <b-collapse id="collapse1" visible>
          <b-table
            show-empty
            :hover="hover"
            :striped="striped"
            :small="small"
            :fixed="fixed"
            :filter="filter"
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
            @row-clicked="clicked"
            responsive="sm"
          >
            <!-- <template 
        slot="status" 
        slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{ data.item.status }}</b-badge>
            </template>-->
          </b-table>
          <nav>
            <b-pagination
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
              prev-text="Prev"
              next-text="Next"
              align="right"
              hide-goto-end-buttons
            />
          </nav>
        </b-collapse>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { log } from 'util'
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export default {
  name: 'CTable',
  components: {},
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      filter: null,
      sortBy: '',
      show: true,
      sortDesc: false,
      sortDirection: 'asc',
      filterOn: [],
      items: shuffleArray([
        {
          id: 1,
          username: 'Samppa Nori',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          id: 2,
          username: 'Estavan Lykos',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          id: 3,
          username: 'Chetan Mohamed',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          id: 4,
          username: 'Derick Maximinus',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          id: 5,
          username: 'Friderik Dávid',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          id: 6,
          username: 'Yiorgos Avraamu',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          id: 7,
          username: 'Avram Tarasios',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          id: 8,
          username: 'Quintin Ed',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          id: 9,
          username: 'Enéas Kwadwo',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          id: 10,
          username: 'Agapetus Tadeáš',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          id: 11,
          username: 'Carwyn Fachtna',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          id: 12,
          username: 'Nehemiah Tatius',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          id: 13,
          username: 'Ebbe Gemariah',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          id: 14,
          username: 'Eustorgios Amulius',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          id: 15,
          username: 'Leopold Gáspár',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          id: 16,
          username: 'Pompeius René',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          id: 17,
          username: 'Paĉjo Jadon',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          id: 18,
          username: 'Micheal Mercurius',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          id: 19,
          username: 'Ganesha Dubhghall',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          id: 20,
          username: 'Hiroto Šimun',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        }
      ]),
      fields: [
        { key: 'username', sortable: true },
        { key: 'registered' },
        { key: 'role' },
        { key: 'status', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 1
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key }
      })
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    getBadge(status) {
      return status === 'Active'
        ? 'success'
        : status === 'Inactive'
          ? 'secondary'
          : status === 'Pending'
            ? 'warning'
            : status === 'Banned'
              ? 'danger'
              : 'primary'
    },
    getRowCount(items) {
      return items.length
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    clicked(item) {
      // this.$router.push(context.username)
      // this.showSidebar = !this.showSidebar'
      // let thiId = context.filter((item)=>({
      //     item.id ==
      // }))
      this.$emit('clicked2Show')
      this.$router.push('/patients/' + item.id)
      console.log(item.id)
      // alert('row clicked')
    }
  }
}
</script>
<style lang="scss" >
.table-hover tbody tr:hover {
  color: #080808;
  background-color: rgba(58, 163, 207, 0.33);
}
</style>