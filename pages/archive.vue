<template>
  <div class="c-archive">
    <div class="c-archive__header">
      <nuxt-link to="/profile">
        <animated-link class="c-bezier">
          Profile
        </animated-link>
      </nuxt-link>
      <nuxt-link to="/">
        <animated-link class="c-bezier">
          Close
        </animated-link>
      </nuxt-link>
    </div>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        direction: 'horizontal',
        smooth: true,
        getSpeed: true,
        lerp: 0.08,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
        // Other options
      }"
    >
      <div class="c-archive__main" ref="horizontalMain">
        <div>
          <div class="archive__intro">
            <p>
              This archive contains video clips, art and pictures related to
              Korty and her work, respective owners of each piece of work have
              been credited. Contact us for content removal
            </p>
            <h1>
              “I try not to do everything, but I make sure I try everything.”
            </h1>
            <nuxt-link to="/" class="home-link">
              <animated-link class="c-bezier">
                Go to Home
              </animated-link>
            </nuxt-link>
            <button class="credits-link">
              <div class="c-inner">
                <animated-link class="c-bezier">
                  credits
                </animated-link>
              </div>
            </button>
          </div>
          <div class="archive__images">
            <div class="c-image sm">
              <!-- <img
                data-scroll
                data-scroll-speed="-0.8"
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921592/Korty/Rectangle_34_faqgls.jpg"
                alt=""
              /> -->
              <div
                data-scroll
                data-scroll-speed="-0.8"
                class="bg-image"
                style="background-image: url(https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921592/Korty/Rectangle_34_faqgls.jpg);"
              />
            </div>

            <div class="c-image xs">
              <img
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921598/Korty/Rectangle_25_wygie2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
import AnimatedArrow from "../components/AnimatedArrow.vue";
import AnimatedLink from "../components/AnimatedLink/AnimatedLink.vue";
export default {
  components: { AnimatedArrow, AnimatedLink },
  mounted() {
    const mainRef = this.$refs.horizontalMain;
    const scrollWidth = mainRef.scrollWidth;
    mainRef.style.width = scrollWidth;

    this.$nuxt.$emit("update-locomotive");
  }
};
</script>

<style lang="scss" scoped></style>
