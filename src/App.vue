<template>
  <div id="app">
    <!-- content -->
    <div id="main">
      <!-- left sect -->
      <section id="sidebar" class="sidebar text-center">
        <div class="logo mt-3">
          <img src="./assets/logo.png" alt="" width="100px">
        </div>
        <hr width="80%">
        <ul>
          <li><router-link to="/"><b-icon-folder2-open class="mr-2"></b-icon-folder2-open>Monthly Overwiew</router-link></li>
          <li><router-link to="/about"><b-icon-folder-plus class="mr-2"></b-icon-folder-plus>Budget Plan</router-link></li>
          <li><router-link to=""><b-icon-people class="mr-2"></b-icon-people>Financial Advise</router-link></li>
        </ul>
      </section>
      <!-- right sect -->
      <section id="content" class="content">
        <router-view/>
      </section>

    </div>
    <!-- footer => component -->
  </div>
</template>

<style scoped>
  #main {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 2fr 8fr;
  }
  .content {
    background-color: #fafafa;
    height: 100vh;
    overflow-y: auto;
  }
  ul {
    list-style-type: none;
    text-align: left;
  }
  li {
    margin-bottom: 10px;
  }
  li a{
    color: #aaa;
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  li a:hover {
    color: deeppink;
  }
</style>
