<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <!-- LOGO -->
          <div class="footer-logo">
            <img src="../assets/logo.png" alt="" width="100">
          </div>
        </div>
        <div class="col-md-3">
          <!-- BRAND TITLE - NAVIGATION -->
          <div class="footer-nav">
            <h6>Budget Planner</h6>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Developer API</a>
            <a href="">Feedback</a>
          </div>
        </div>
        <div class="col-md-3">
          <!-- ABOUT -->
          <div class="footer-about">
            <h6>About Us</h6>
            <div class="footer-about-group">
              <span><b-icon-geo-alt class="footer-about-item"></b-icon-geo-alt></span>
              <div class="footer-about-item">
                <span>Address</span>
                <p>Taman Cipinang Street, East Jakarta, Indonesia</p>
              </div>
            </div>
            <div class="footer-about-group">
              <span><b-icon-envelope class="footer-about-item"></b-icon-envelope></span>
              <div class="footer-about-item">
                <span>Keep in touch</span>
                <p>hub.iqbaltaufiq@gmail.com</p>
              </div>
            </div>
            <div class="footer-about-group">
              <span><b-icon-telephone class="footer-about-item"></b-icon-telephone></span>
              <div class="footer-about-item">
                <span>Instant Message</span>
                <p>+62 882 2596 xxxx</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <!-- SUBSCRIPTION EMAIL & SOCIAL MEDIA -->
          <h6>Social Media</h6>
          <div class="social">
            <a href="mailto:hub.iqbaltaufiq@gmail.com"><img src="../assets/logo/mail.png" alt="" title="Send us an email"></a>
            <a href="https://github.com/iqbaltaufiq"><img src="../assets/logo/github.png" alt="" title="GitHub"></a>
            <a href=""><img src="../assets/logo/twitter.png" alt="" title="Twitter"></a>
            <!-- <a href=""><img src="../assets/logo/instagram.png" alt="" title="Instagram"></a> -->
            <a href=""><img src="../assets/logo/pinterest.png" alt="" title="Pinterest"></a>
            <a href=""><img src="../assets/logo/discord.png" alt="" title="bxrute#2529"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center mt-3">
      <div class="col">
        <p class="copy">&copy; 2020 MIT Licensed | Created with <b-icon-suit-heart-fill></b-icon-suit-heart-fill> by <a href="https://github.com/iqbaltaufiq/">Iqbal Taufiq</a> | Powered by <a href="https://www.vuejs.org">Vue</a> & <a href="https://www.getbootstrap.com">Bootstrap</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 30px 50px 10px;
  background: white;
}
h6 {
  text-transform: uppercase;
  font-weight: bold;
  color: #aaa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.footer-nav a {
  display: block;
  text-decoration: none;
  color: #c0c0c0;
  padding: 2px 0px;
  font-size: 0.9em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.footer-nav a:hover {
  color: #777;
}
.footer-about-group {
  display: grid;
  grid-template-columns: 1fr 8fr;
  align-items: top;
  font-size: 0.9em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.footer-about-item span {
  color: #aaa;
  font-weight: bold;
}
.footer-about-item p {
  color: #bcbcbc;
}
p.copy, p.copy a {
  color: #aaa;
  font-family: monospace;
}
p.copy a {
  font-weight: bold;
}
div.social img {
  width: 25px;
  margin: 0px 5px;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.85;
}
div.social img:hover {
  opacity: 1;
}
</style>
