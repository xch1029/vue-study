<template>
  <div id="app">
    <ButtonShow />
    <DividerShow />
  </div>
</template>
<script>
import ButtonShow from "./views/ButtonShow";
import DividerShow from "./views/DividerShow";
export default {
  name: "App",
  components: {
    ButtonShow,
    DividerShow
  }
};
</script>
