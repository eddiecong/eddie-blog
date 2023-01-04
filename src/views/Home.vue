<template>
  <div class="layout" style="height: 100%">
    <Row style="background: #eee; padding: 20px; height: 100%" :gutter="16">
      <Col span="8">
        <Content style="margin: 30px">
          <img src="../assets/eddie.png">
          <h2 style="width: 300px; text-align: center"> Weicong(Eddie) Gao </h2>
        </Content>
      </Col>
      <Col span="16">
        <Content style="margin: 30px">
          <h1 style="margin: 25px 0px">About Me:</h1>
          <h2>
            Hi! I'm Eddie, welcome to my blog. I'm a machine learning engineer
            and researcher in computer vision and robotics.
          </h2>
          <h2 style="margin: 10px 0px">Working close with:</h2>
          <a href="https://github.com/desmondchchan" class="teamate">Desmond Chan</a>
          <a href="https://github.com/KevinHuang619" class="teamate">Kevin Huang</a>
          <a href="https://github.com/SamuelBroughton" class="teamate">Sam Broughton</a>
          <h2 style="margin: 25px 0px 10px"> Current Research Aspect: </h2>
          <h2>Face Synthesis, Talking Face Generation, Graph Neural Network</h2>
          <div>
            <a href="https://www.linkedin.com/in/eddie-gao-61033b1b3/">
              <img class="icon" src="../assets/linkedin.png">
            </a>
            <a href="https://github.com/eddiecong">
              <img class="icon" src="../assets/github.png">
            </a>
          </div>
        </Content>
      </Col>
    </Row>

  </div>
</template>

<style scoped>

img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

.icon {
  width: 30px;
  height: 30px;
  margin: 20px 10px;
}

.teamate {
  font-size: 20px;
  font-weight: bold;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: blue;
  padding: 10px;
}

</style>
