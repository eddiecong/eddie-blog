<template>
  <div class="blog-container">
    <div class="wrapper">

      <!-- title info -->
      <h1 class="title">Batch Normalization</h1>

      <!-- time info -->
      <div class="time">
        <span class="date">
          2022-4-24
        </span>
      </div>

      <!-- detail preview info -->
      <div class="detail">
        <mavon-editor v-model="content"
          defaultOpen="preview"
          :toolbarsFlag="false"
          :subfield="false">
        </mavon-editor>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      content: 'testing the usage of the form'
    }
  }
}
</script>

<style scoped>

.wrapper {
  padding: 20px;
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
}

.title {
  text-align: center;
  font-weight: 500;
  font-size: 28px;
}

.time{
  margin: 10px 0 40px;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
</style>
