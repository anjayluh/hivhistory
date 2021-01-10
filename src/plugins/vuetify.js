import 'font-awesome/css/font-awesome.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import East from '@/components/icons/East.vue'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        // iconfont: 'fa4',
        iconfont: 'md',
        values: {
            East: {
                component: East
            },
        }
    },
    cons: {},
})