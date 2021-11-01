<template>
  <div class="SearchForm">
      <Form layout="inline">
          <form-item v-for="item in config" :key="item.key" :label="item.label || ''" >
              <a-input v-if="item.type==='input'" v-bind="item.attrs" @change="searchChangeInput($event, item.key)"/>
              
               <a-select v-if="item.type==='select'" v-bind="item.attrs"  @change="searchChangeSelect($event, item.key)">
                  <Option v-for="option in item.option" :key="option.value" :value="option.value">
                    {{option.label}}
                  </Option>
                </a-select>
          </form-item>
          <form-item>
              <Button>重置</Button>
          </form-item>
          <form-item>
              <Button type="primary" @click="search">查询</Button>
          </form-item>
      </Form>
  </div>
</template>
<script>
import {input as AInput, Button, Select as ASelect, Form} from 'ant-design-vue'
export default {
  name: 'SearchForm',
  props: {
    config: Array
  },
  components: {AInput, Button, ASelect, Option: ASelect.Option, Form, FormItem: Form.Item},
  data () {
    return {
      searchData: {}
    }
  },
  methods: {
    searchChangeInput(event, key) {
      this.searchData[key] = event.target.value
    },
    searchChangeSelect(value, key) {
       this.searchData[key] = value
    },
    search() {
      this.$emit('search', this.searchData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.SearchForm {
  margin-bottom: 32px;
  ul {
    display: flex;
  }
  .ant-select, .ant-input {
    width: 200px;
  }
}
</style>