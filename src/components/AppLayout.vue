<template>
  <div class="layout">
    <Header :title="pageTitle" />
    <NavigationFile />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from "../../src/components/HeaderFile.vue";
import NavigationFile from "../../src/components/NavigationFile.vue";

export default {
  name: "Layout1",
  components: {
    Header,
    NavigationFile,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  padding: 20px;
  background-color: #f9f9f9;
  flex: 1;
}
</style>