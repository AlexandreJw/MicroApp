<template>
    <div class="reloadView">
        <a-progress :showInfo="false" :percent="percent" strokeColor="#ED6D1F"/>
    </div>
</template>
<script>
export default {
    name: 'Reload',
    data () {
        return {
            percent: 0,
        }
    },
    mounted() {
        const T = setInterval(() => {
            if (this.percent >= 100) {
                clearInterval(T)
            }
            this.percent += 2
        })
    }
}
</script>
<style scoped lang="less">
.reloadView {
    /deep/ .ant-progress-line {
        position: absolute;
        top: -8px;
        right: 0;
        height: 4px;
    }
    /deep/ .ant-progress-outer {
        height: 4px;
    }
    /deep/ .ant-progress-bg {
        border-radius: 0 !important;
    }
    /deep/ .ant-progress-inner {
        height: 4px;
        border-radius: 0;
    }
}

</style>
