<template>
  <transition  name="slide">
    <div class="modal" v-if="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close"  @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==='1'" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-else-if="btnType==='2'" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型： 小small 中middle 大large 表单 form
    modalType: {
      type: String,
      default: 'form'
    },
    title: String,
    // 按钮类型 1确定按钮 2取消按钮 3确定和取消
    btnType: {
      type: String,
      default: '1'
    },
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/modal.scss';
@import '@/styles/button.scss';
</style>
