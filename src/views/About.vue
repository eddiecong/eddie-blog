<template>
  <div class="layout">
    <Layout style="height: 100%">
      <Content style="margin: 50px; width: 100%">
        <Content style="margin: 30px; width: 80%">
          <span style="font-size: 25px; font-weight: bold; padding: 10px 10px 10px 0px;"> Education </span>
          <Timeline style="padding: 10px">
            <TimelineItem>
              <p class="time">2015.9 - 2019.6</p>
              <div style="line-height: 60px; height: 60px;">
                <img src="../assets/sysu-logo.png" style="vertical-align:middle;">
                <span style="font-size: 14px; font-weight: bold; padding: 10px;"> Sun Yat-Sen University </span>
              </div>
              <ul style="padding: 10px 10px 0px 20px; list-style-type: disc">
                <li>Bachelor of Information and Computing Science</li>
                <li>Research in NLP (emotional analysis)</li>
              </ul>
            </TimelineItem>

            <TimelineItem>
              <p class="time">2019.9 - 2020.6</p>
              <div style="line-height: 60px; height: 60px;">
                <img src="../assets/hkbu-logo.png" style="vertical-align:middle;">
                <span style="font-size: 14px; font-weight: bold; padding: 10px;"> Hong Kong Baptist University </span>
              </div>
              <ul style="padding: 10px 10px 0px 20px; list-style-type: disc">
                <li>Master of Advanced Information System</li>
                <li>Research in autonomous deep learning</li>
              </ul>
            </TimelineItem>
          </Timeline>

          <span style="font-size: 25px; font-weight: bold; padding: 10px 10px 10px 0px;"> Working </span>
          <Timeline style="padding: 10px">
            <TimelineItem>
              <p class="time">2020.8 - 2022.1</p>
              <div style="line-height: 60px; height: 60px;">
                <img src="../assets/pantheonlab.png" style="vertical-align:middle;">
                <span style="font-size: 14px; font-weight: bold; padding: 10px;"> Pantheon Lab Limited, Hong Kong SAR </span>
                <span style="font-size: 14px; font-weight: bold; padding: 10px;"> (AI Developer) </span>
              </div>
              <ul style="padding: 10px 10px 0px 20px; list-style-type: disc">
                <li>Conduct audio driven talking faces generation</li>
                <li>Develop and deploy series of face relevant algorithms</li>
              </ul>
            </TimelineItem>

            <TimelineItem>
              <p class="time">2022.1 - now</p>
              <div style="line-height: 60px; height: 60px;">
                <img src="../assets/hkbu-logo.png" style="vertical-align:middle;">
                <span style="font-size: 14px; font-weight: bold; padding: 10px;"> Hong Kong Baptist University </span>
                <span style="font-size: 14px; font-weight: bold; padding: 10px;"> (Senior Research Assistant) </span>
              </div>
              <ul style="padding: 10px 10px 0px 20px; list-style-type: disc">
                <li>Unsupervised genenomous binning based on graph neural network</li>
              </ul>
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
