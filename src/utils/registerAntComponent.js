import Vue from 'vue'
import { 
    FormModel, Button, Input,  Table, Select, Pagination, LocaleProvider, Spin, Modal, Alert, Message, Descriptions, Row, Col, Form,
    Tabs, Tree, Menu, Icon, Switch, Progress
} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(Select);
Vue.use(Select.Option);
Vue.use(Select.OptGroup);
Vue.use(Pagination)
Vue.use(LocaleProvider)
Vue.use(Spin)
Vue.use(Modal)
Vue.use(Alert)
Vue.use(Descriptions)
Vue.use(Descriptions.Item)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Form.Item)
Vue.use(FormModel)
Vue.use(FormModel.Item)
Vue.use(Tabs)
Vue.use(Tabs.TabPane)
Vue.use(Tree)
Vue.use(Menu)
Vue.use(Menu.Item)
Vue.use(Icon)
Vue.use(Switch)
Vue.use(Progress)
Vue.prototype.$message = Message