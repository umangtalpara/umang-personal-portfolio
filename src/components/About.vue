<template>
  <div class="tokyo_tm_about">
    <div class="about_image">
      <!-- <img src="../assets/img/slider/1.jpg" alt="about" /> -->
      <img src="../assets/img/slider/Full-Stack.webp" alt="about" />
    </div>
    <!-- End .about_image -->

    <div class="description">
      <h3 class="name">Umang Patel<br><small>Web Developer</small></h3>
      <div class="description_inner">
        <div class="left">
          <p>
            Hello, I am a Web Developer based in India and having experience in the development of Web-based Applications using NodeJs Express MongoDB Vue. Computer science engineering professional with expertise in implementing, designing, and analyzing software solutions. Strengths include: development and design, problem solving and being result oriented / client focused.
          </p>
          <div class="tokyo_tm_button">
            <button class="ib-button" @click="showModal">Read More</button>
          </div>
        </div>
        <!-- End .left -->

        <div class="right">
          <ul>
            <li>
              <p><span>Birthday:</span>05.05.2000</p>
            </li>
            <li>
              <p><span>Age:</span>22</p>
            </li>
            <li>
              <p><span>Address:</span>Shivranjani Flyover Ahmedabad, Gujarat 380015</p>
            </li>
            <li>
              <p>
                <span>Email:</span
                ><a href="mailto:mail@gmail.com">patelumang607@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <span>Phone:</span
                ><a href="tel:+770221770505">+91 9723455615</a>
              </p>
            </li>
            <li>
              <p><span>Study:</span>Parul university (B.Tech)</p>
            </li>
            <li>
              <p><span>Freelance:</span>Available</p>
            </li>
          </ul>
          <!-- End ul -->
        </div>
        <!-- End .right -->
      </div>
    </div>

    <!-- Start Modalbox -->
    <transition name="fade">
      <!-- Modal -->
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
          @click.stop
        >
          <div class="modal-content">
            <div class="tokyo_tm_modalbox_about">
              <div class="close" @click="closeModal">
                <img
                  class="svg"
                  src="../assets/img/svg/cancel.svg"
                  alt="cancel-img"
                />
              </div>
              <!-- End .close -->
              <div class="my_box">

                <div class="left">
                   <div class="about_title">
                    <h3>Full-Stack Developer Skills</h3>
                  </div>
                  <!-- End .abut_title -->
                  <div class="tokyo_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">Node.Js, Express.Js</span
                        > 
                        <!-- <span class="number">95%</span>-->
                        </span> 
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">Vue.Js, Vuetify</span
                        >
                        <!-- <span class="number">80%</span> -->
                        </span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">MongoDB, Mongoose</span
                        >
                        <!-- <span class="number">90%</span> -->
                        </span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                  </div>
                  <!-- End .tokyo_progress -->
                </div>
                <!-- End .left -->
                <div class="right">
               
                  <div class="tokyo_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">MySql, Sequelize</span
                        >
                        <!-- <span class="number">95%</span> -->
                        </span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Git, GitLab, GitHub</span
                        >
                        <!-- <span class="number">90%</span> -->
                        </span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Axios, MicroService</span
                        >
                        <!-- <span class="number">85%</span> -->
                        </span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End .right -->
              </div>
              <div class="counter">
                <div class="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div class="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                <!-- End ul -->
              </div>
              <!-- End .counter -->
              <div class="partners">
                <div class="about_title">
                  <h3>Our Framework and technology</h3>
                </div>
                <Brand />
              </div>
              <!-- End .partner -->
            </div>
            <!-- End .tokyo_tm_modalbox_about -->
          </div>
        </div>
      </div>
    </transition>
    <!-- End Modalbox -->
  </div>
</template>

<script>
import Brand from "./Brand";
export default {
  components: {
    Brand,
  },
  data() {
    return {
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss"></style>
