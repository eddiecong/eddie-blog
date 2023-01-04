<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <MenuItem name="home" to="/">
              HOME
            </MenuItem>
            <MenuItem name="about" to="/about">
              ABOUT
            </MenuItem>
            <MenuItem name="blog" to="/blog">
              BLOG
            </MenuItem>
          </Menu>
        </Header>
      </Layout>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

</style>
