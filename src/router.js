import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/views/Timeline.vue'
import TimelineDetails from '@/views/timeline/TimelineDetails.vue'
import About from '@/views/About.vue'
import Chapters from '@/views/Chapters.vue'
import Quiz from '@/views/Quiz.vue'
import Contact from '@/views/Contact.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            name: 'timeline',
            path: '/',
            component: Timeline,
            children: [{
                name: 'timeline-details',
                path: 'details/:title/:chapter',
                component: TimelineDetails,
            }]
        },
        {
            name: 'about',
            path: '/about',
            component: About,
        },
        {
            name: 'chapters',
            path: '/chapters',
            component: Chapters,
        },
        {
            name: 'quiz',
            path: '/quiz',
            component: Quiz,
        },
        {
            name: 'contact',
            path: '/contact',
            component: Contact,
        }
    ],
    linkActiveClass: "active"
})