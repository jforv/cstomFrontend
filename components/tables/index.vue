<template>
  <b-card>
      <div >
              <!-- <font-awesome-icon :icon="['fas', 'align-justify']" />  -->
              <strong>Patients List</strong>
              <div class="card-actions">
              </div>
            </div>
      <template>
          <b-row>
              <b-col lg="4" md="6" offset-md="8" class="my-1">
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
    <b-table 
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
      responsive="sm">
      <!-- <template 
        slot="status" 
        slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{ data.item.status }}</b-badge>
      </template> -->
    </b-table>
    <nav>
      <b-pagination 
        :total-rows="totalRows" 
        :per-page="perPage" 
        v-model="currentPage" 
        prev-text="Prev" 
        next-text="Next"
        align="right"
        hide-goto-end-buttons/>
    </nav>
  </b-card>
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
  components:{
  },
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
    sortDesc: false,
    sortDirection: 'asc',
    filterOn: [],
      items: shuffleArray([
        {
          username: 'Samppa Nori',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          username: 'Estavan Lykos',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          username: 'Chetan Mohamed',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          username: 'Derick Maximinus',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          username: 'Friderik Dávid',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          username: 'Yiorgos Avraamu',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          username: 'Avram Tarasios',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          username: 'Quintin Ed',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          username: 'Enéas Kwadwo',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          username: 'Agapetus Tadeáš',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          username: 'Carwyn Fachtna',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          username: 'Nehemiah Tatius',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          username: 'Ebbe Gemariah',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          username: 'Eustorgios Amulius',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          username: 'Leopold Gáspár',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          username: 'Pompeius René',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          username: 'Paĉjo Jadon',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          username: 'Micheal Mercurius',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          username: 'Ganesha Dubhghall',
          registered: '2012/03/01',
          role: 'Member',
          status: 'Pending'
        },
        {
          username: 'Hiroto Šimun',
          registered: '2012/01/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          username: 'Vishnu Serghei',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active'
        },
        {
          username: 'Zbyněk Phoibos',
          registered: '2012/02/01',
          role: 'Staff',
          status: 'Banned'
        },
        {
          username: 'Einar Randall',
          registered: '2012/02/01',
          role: 'Admin',
          status: 'Inactive'
        },
        {
          username: 'Félix Troels',
          registered: '2012/03/21',
          role: 'Staff',
          status: 'Active'
        },
        {
          username: 'Aulus Agmundr',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Pending'
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
      totalRows: 1,
    }
  },
  computed:{
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
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
      clicked(context){
        // this.$router.push(context.username)
        // this.showSidebar = !this.showSidebar
        this.$emit('clicked2Show')
        // console.log(context.username);
        // alert('row clicked')
        
      }
  }
}
</script>
