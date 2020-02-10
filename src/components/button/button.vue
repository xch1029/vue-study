<template>
  <button
    type="button"
    :class="buttonCls"
    :disabled="!!this.disabled"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script>
const prefix = "xch-btn";

export default {
  name: "XchButton",
  props: {
    circle: Boolean,
    noBorder: Boolean,
    disabled: Boolean,
    color: String,
    textColor: String,
    size: {
      type: String,
      validator(value) {
        return ["l", "m", "s", "xs"].indexOf(value) != -1;
      }
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  },
  computed: {
    buttonCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-circle`]: !!this.circle,
        [`${prefix}-no-border`]: this.noBorder === true,
        [`${prefix}-${this.color}`]: !!this.color,
        [`${prefix}-text-${this.textColor}`]: !!this.textColor,
        [`${prefix}-${this.size}`]: !!this.size
      };
    }
  }
};
</script>
