<template>
  <div class="sidebar">
    <SidebarHeader />
    <SidebarForm />
    <nav class="sidebar-nav">
      <div slot="header" />
      <ul class="nav">
        <template v-for="(item) in navItems">
          <template v-if="item.title">
            <SidebarNavTitle 
              :name="item.name" 
              :classes="item.class" 
              :wrapper="item.wrapper" 
              :key="item.key" />
          </template>
          <template v-else-if="item.divider">
            <SidebarNavDivider 
              :classes="item.class" 
              :key="item.key" />
          </template>
          <template v-else-if="item.label">
            <SidebarNavLabel 
              :name="item.name" 
              :url="item.url" 
              :icon="item.icon" 
              :label="item.label" 
              :classes="item.class" 
              :key="item.key" />
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <SidebarNavDropdown 
                :name="item.name" 
                :url="item.url" 
                :icon="item.icon" 
                :key="item.key" >
                <template v-for="(childL1) in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown 
                      :name="childL1.name" 
                      :url="childL1.url" 
                      :icon="childL1.icon" 
                      :key="childL1.key" >
                      <li 
                        v-for="(childL2) in childL1.children" 
                        :key="childL2.key" 
                        class="nav-item">
                        <SidebarNavLink 
                          :name="childL2.name" 
                          :url="childL2.url" 
                          :icon="childL2.icon" 
                          :badge="childL2.badge" 
                          :variant="item.variant" />
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <!-- eslint-disable -->
                    <SidebarNavItem :classes="item.class" :key="childL1.key">
                      <SidebarNavLink 
                        :name="childL1.name" 
                        :url="childL1.url" 
                        :icon="childL1.icon" 
                        :badge="childL1.badge" 
                        :variant="item.variant" />
                    </SidebarNavItem>
                    <!-- eslint-enable -->
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem 
                :classes="item.class" 
                :key="item.key" >
                <SidebarNavLink 
                  :name="item.name" 
                  :url="item.url" 
                  :icon="item.icon" 
                  :badge="item.badge" 
                  :variant="item.variant" />
              </SidebarNavItem>
            </template>
          </template>
        </template>
      </ul>
      <slot />
    </nav>
    <SidebarFooter/>
    <SidebarMinimizer/>
  </div>
</template>
<script>
import SidebarFooter from './SidebarFooter'
import SidebarForm from './SidebarForm'
import SidebarHeader from './SidebarHeader'
import SidebarMinimizer from './SidebarMinimizer'
import SidebarNavDivider from './SidebarNavDivider'
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
import SidebarNavItem from './SidebarNavItem'
import SidebarNavLabel from './SidebarNavLabel'
export default {
  name: 'Sidebar',
  components: {
    SidebarFooter,
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel
  },
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function() {
    this.isFixed(this.fixed)
  },
  methods: {
    isFixed() {
      this.fixed
        ? document.body.classList.add('sidebar-fixed')
        : document.body.classList.remove('sidebar-fixed')
      return this.fixed
    },
    handleClick(e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
    /* color: #42A5CC; */
  }
</style>
