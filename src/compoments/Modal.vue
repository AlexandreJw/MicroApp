<template>
    <a-modal
      :visible="visible"
      :closable="false"
      @ok="handleOk"
      wrapClassName="tb-modal"
      @cancel="handleCancel"
      :width='width'
      :destroyOnClose="true"
    >
        <slot></slot>
    </a-modal>
</template>
<script>
export default {
    name: 'Modal',
    props: {
        visible: Boolean,
        closable: Boolean,
        width: [String, Number]
    },
    methods: {
        handleOk() {
            this.$emit('ok')
        },
        handleCancel() {
            this.$emit('cancel')
        }
    }
}
</script>
<style lang="scss">
.tb-modal {
    .ant-modal-footer {
        border: 0;
        text-align: center;
    }
}
</style>
