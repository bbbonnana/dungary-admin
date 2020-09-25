import Vue from 'vue'
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  Form,
  FormItem,
  Input,
  Pagination,
  Tabs,
  TabPane,
  Message,
  Loading
  // Row,
  // Col
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Loading.directive)
// Vue.use(Row)
// Vue.use(Col)

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 500 }
Vue.prototype.$ms = Message
