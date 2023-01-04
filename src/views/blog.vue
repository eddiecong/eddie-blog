<template>
  <Row style="background: #eee; padding: 20px" :gutter="16">
    <Col span="8">
      <Card :bordered="false">
        <p slot="title">Transformer in short</p>
        <p>
          Transformer in short.
        </p>
      </Card>
    </Col>

    <Col span="8">
      <Card :bordered="false" v-on:click.native="detail">
        <p slot="title">Batch Normalization In GAN</p>
        <p>
          This blog post aims to provide a simple view of batch normalization
          method in Genarative Adversial Network. Includes instance normalization
          and spade.
        </p>
      </Card>
    </Col>

    <Col span="8">
      <Card :bordered="false">
        <p slot="title">Conv in short</p>
        <p>
          Convolution in short.
        </p>
      </Card>
    </Col>
  </Row>
</template>

<script>

export default {
  methods: {

    detail () {
      this.$router.push('./batch-norm')
    }
  }
}
</script>

<style scoped>

.ivu-card {
  height: 200px;
}

</style>
