<template>
  <div class="tokyo_tm_contact">
    <div class="tokyo_tm_title">
      <div class="title_flex">
        <div class="left">
          <span>Contact</span>
          <h3>Get in Touch</h3>
        </div>
      </div>
    </div>
    <!-- End Title -->

    <div class="map_wrap">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.902326880377!2d72.52927871416654!3d23.0254532349516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cf75f23e8d%3A0x1fb23b359dce1155!2sParishram%20Apartment!5e1!3m2!1sen!2sin!4v1656229477505!5m2!1sen!2sin"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.902326880377!2d72.52927871416654!3d23.0254532349516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cf75f23e8d%3A0x1fb23b359dce1155!2sParishram%20Apartment!5e1!3m2!1sen!2sin!4v1656229477505!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <!-- End Google Map -->

    <!-- <div class="tokyo_tm_about">
      <div class="description">
        <div class="right">
          <ul>
            <li>
              <p>
                <span>Address:</span>Ave 11, New York, USA
              </p>
            </li>
            <li>
              <p>
                <span>Email:</span>
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <span>Phone:</span>
                <a href="tel:+770221770505">+77 022 177 05 05</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>-->

    <div class="fields">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form ref="form" class="contact_form" @submit.prevent="handleSubmit(onSubmit)">
          <div class="first">
            <ul>
              <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                <li>
                  <input v-model="formData.name" type="text" placeholder="Name" autocomplete="off" />
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>

              <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                <li>
                  <input
                    type="text"
                    rules="required|email"
                    v-model="formData.email"
                    placeholder="email"
                  />
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>
              <ValidationProvider name="message" rules="required" v-slot="{ errors }">
                <li>
                  <textarea v-model="formData.message" placeholder="Message"></textarea>
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>
            </ul>
          </div>
          <div class="tokyo_tm_button">
            <button type="submit" class="ib-button">Send Message</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <!-- END FIELDS -->
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import emailjs from "emailjs-com";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
      console.log(this.$refs.form);

      try {
        emailjs.send("service_hzdnqln", "template_moky2rk", {
          from_name: this.formData.name,
          email_id: this.formData.email,
          message: this.formData.message
        },"iLU6AfRMh3WBh6fs1");
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      (this.formData.name = ""),
        (this.formData.email = ""),
        (this.formData.message = "");
    }
  }
};
</script>
