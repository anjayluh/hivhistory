import '../assets/css/bootstrap.css'
import '../assets/font-awesome/css/font-awesome.css'
import '../assets/css/plugins/select2/select2.min.css'
import '../assets/css/animate.css'
import '../assets/css/custom.css'
import 'vue-select/dist/vue-select.css'
import moment from 'moment'
import Vue from 'vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'
    /* ============
     * jQuery
     * ============
     *
     * Require jQuery
     *
     * http://jquery.com/
     */
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

/* ============
 * Bootstrap
 * ============
 *
 * Require bootstrap
 *
 * http://getbootstrap.com/
 */
require('bootstrap')

require('metismenu')

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

import { SpinnerPlugin } from 'bootstrap-vue'
Vue.use(SpinnerPlugin)

/* import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css' */
import VueToastr from "vue-toastr";


// import VJsoneditor to use: REFACTOR
import VJsoneditor from 'v-jsoneditor/src/index';
Vue.use(VJsoneditor)

// optional set default timeout, the default is 5000 (5 seconds).
Vue.use(VueToastr, {
    /* OverWrite Plugin Options if you need */
    defaultTimeout: 5000,
    defaultProgressBar: false,
    defaultProgressBarValue: 0,
    defaultType: "error",
    defaultPosition: "toast-top-right",
    defaultCloseOnHover: true,
    defaultStyle: { "background-color": "#41d888" },
    defaultClassNames: ["animated", "zoomInUp"]
});

//Global dates: REFACTOR
Vue.filter('formatDateTimeFilter', function(value) {
    if (!value) return ''
    return moment(value).format('DD-MM-YYYY HH:MM')
})
Vue.filter('formatDateFilter', function(value) {
        if (!value) return ''
        return moment(value).format('DD-MM-YYYY')
    })
    // Use dots
Vue.filter('formatDateFilterDotted', function(value) {
        if (!value) return ''
        return moment(value).format('DD.MM.YYYY')
    })
    //: REFACTOR
Vue.filter('formatMoneyFilter', function(amount) {
    if (!amount) return ''
        // check if its a float and keep only two decimals
    let floatPattern = /^([0-9]+)?[.][0-9]+?$/
    if (floatPattern.test(amount)) {
        return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
})

// Truncate long text: REFACTOR
Vue.filter('descriptionSnippet', function(value) {
    if (value.length > 30) return ''
})

// format last run time: REFACTOR
Vue.filter('lastRunDateTimeFormatedDate', function(value) {
    return value ? moment(value).format("DD.MM.YYYY h:mm:ss A") : ''
})