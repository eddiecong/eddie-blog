<template>
  <div class="layout">
    <Layout style="height: 100%">
      <Content style="margin: 50px; width: 100%">
        <Content style="margin: 30px; width: 80%">
          <Timeline>
            <TimelineItem>
              <p class="time">2015.9 - 2019.6</p>
              <img src="../assets/sysu-logo.png">
              <p>Sun Yat-Sen University</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2019.9 - 2020.6</p>
              <img src="../assets/hkbu-logo.png">
              <p>Hong Kong Baptist Unversity</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2020.8 - 2022.1</p>
              <img src="../assets/pantheonlab.png">
              <p>Pantheon Lab Limited, Hong Kong SAR</p>
            </TimelineItem>
          </Timeline>
        </Content>
      </Content>

    </Layout>

  </div>
</template>

<style scoped>

img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.time {
  font-size: 14px;
  font-weight: bold;
}
</style>
