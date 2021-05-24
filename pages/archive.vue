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
        direction: 'horizontal'
        // Other options
      }"
    >
      <div class="c-archive__main">
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
          <div class="archive__images"></div>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
import AnimatedArrow from "../components/AnimatedArrow.vue";
import AnimatedLink from "../components/AnimatedLink/AnimatedLink.vue";
export default {
  components: { AnimatedArrow, AnimatedLink }
};
</script>

<style lang="scss" scoped></style>
