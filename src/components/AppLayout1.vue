<template>
  <div class="layout1">
    <Header1 :title="pageTitle" />
    <NavigationFile />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header1 from "@/components/Header1.vue";
import NavigationFile from "@/components/NavigationFile.vue";

export default {
  name: "Layout1",
  components: {
    Header1,
    NavigationFile,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // 在组件加载时输出 Header1 和 NavigationFile 的加载状态
    console.log("Header1 component loaded:", Header1);
    console.log("NavigationFile component loaded:", NavigationFile);
  }
};
</script>

<style scoped>
.layout1 {
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
