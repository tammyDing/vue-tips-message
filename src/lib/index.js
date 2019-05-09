import VueTipsMsg from './vueTipsMessage.vue'

let TipsMsg = {}
TipsMsg.install = function (Vue, options) {
    Vue.prototype.$tips = function (options) {
        Object.assign(options, {})
        const TipsController = Vue.extend(VueTipsMsg)
        const instance = new TipsController().$mount(document.createElement('div'))
        instance.message = options.message
        instance.visible = true
        instance.direction = options.direction
        instance.left = options.left
        instance.top = options.top

        document.body.appendChild(instance.$el)

        setTimeout(() => {
            instance.visible = false
            document.body.removeChild(instance.$el)
        }, 3000)
    },
    Vue.prototype.$tips['show'] = function (message, option) {
        Vue.prototype.$tips(message, option)
    }
}

if (window.Vue) {
    Vue.use(TipsMsg)
}

export default TipsMsg
