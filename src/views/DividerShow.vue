<template>
  <div>
    <xch-divider />
    <p>
      <span>添加</span>
      <xch-divider type="vertical" />
      <span>删除</span>
      <xch-divider type="vertical" />
      <span>重命名</span>
      <xch-divider type="vertical" />
      <span>其他</span>
    </p>
    <xch-divider>这是一条带文字说明的分割线</xch-divider>
    <xch-divider size="small">这是一条带文字说明的分割线（小号）</xch-divider>
    <xch-divider orientation="left">这是一条带文字说明的分割线（居左）</xch-divider>
    <xch-divider orientation="right">这是一条带文字说明的分割线（居右）</xch-divider>
    <xch-divider dashed></xch-divider>
    <xch-divider dashed>这是一条带文字说明的分割线(虚线)</xch-divider>
    <xch-divider dashed orientation="left">这是一条带文字说明的分割线（居左+虚线）</xch-divider>
    <xch-divider dashed orientation="right">这是一条带文字说明的分割线（居右+虚线）</xch-divider>
  </div>
</template>

<script>
export default {
  name: "DividerShow"
};
</script>
