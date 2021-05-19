<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
      // Other options
    }"
  >
    <div class="c-profile">
      <div class="c-profile__header">
        <nuxt-link to="/">
          <AnimatedLink class="c-bezier">
            Close
          </AnimatedLink>
        </nuxt-link>
        <nuxt-link to="/archive">
          <AnimatedLink class="c-bezier">
            Archive
          </AnimatedLink>
        </nuxt-link>
      </div>

      <div class="c-profile__hero">
        <div class="hero__image">
          <img
            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620936288/Korty/image_5_pgl6zc.jpg"
            alt=""
            data-scroll-speed="1"
          />
        </div>
        <div class="hero-content">
          <h1 class="hero-content__title">
            K<span class="fraunces">o</span>rty e<span class="fraunces"
              >o.</span
            >
          </h1>
          <div class="hero-content__caption">
            <p>Korty EO.</p>
            <p>January 23, 2021</p>
            <p>by @jag_ubani</p>
          </div>
        </div>
      </div>

      <div class="c-profile__headline">
        <h2 class="headline__text">
          <span>Eniola <span class="fraunces">Korty</span> Olanrewaju</span>
          <span>Eniola <span class="fraunces">Korty</span> Olanrewaju</span>
          <span>Eniola <span class="fraunces">Korty</span> Olanrewaju</span>
        </h2>
      </div>
      <div class="c-profile__intro">
        <div class="intro__image">
          <img
            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621171243/Korty/Rectangle_15_anvqaw.jpg"
            alt=""
          />
          <p class="c-caption">
            Korty EO. &nbsp; <span>December 19, 2020</span>
          </p>
        </div>
        <div class="intro__text">
          <div class="inner">
            <h2>is a Lagos based freelance filmmaker & youtuber</h2>
            <p class="para-1">
              —in love with music and stories. On her youtube channel; she makes
              interviews, vlogs, and other experimental videos. She has
              previously worked at some of the best content studios in West
              Africa.
            </p>
            <p>
              Eniola Korty, you may know her online as Korty Eo, leaves no room
              for error when it comes to creating. Korty has an impressive
              resume, as she credits being a graphic designer, model, artist,
              filmmaker, and now YouTuber. Her honest and frank storytelling,
              combined with her engaging and beautiful B-roll shots of her
              hometown, make for an engaging and captivating channel.
            </p>
          </div>
        </div>
      </div>
      <div class="c-profile__editorial">
        <div class="editorial__image">
          <p class="c-caption">
            Korty EO. & TG OMORI &nbsp; <span>April 10, 2021</span>
          </p>
        </div>
        <div class="editorial__content first">
          <div class="left">
            <h2>
              “The inspiration behind my art is life itself. I like to take
              pictures as a hobby because I’m fascinated by nature and
              travelling. Converting these pictures into art is like breathing
              life into something. The thought of this alone encourages me.”
            </h2>
            <p class="c-caption">
              – Korty EO. &nbsp; <span>March 16, 2018</span>
            </p>
          </div>
          <div class="right">
            <p>
              Korty left her family home in Ibadan for Lagos after getting an
              offer to become a writer at a newly formed media company, Zikoko.
              Work was going well, until she got bored and literally said “fuck
              shit, I wants to make videos”. She is mostly self taught, it
              definitely didn’t hurt to have unlimited access to the internet.
              She had a little more creative freedom when she finally left for
              her own apartment after living with relatives for a year.
            </p>
          </div>
        </div>
        <div class="editorial__content second">
          <div class="left">
            <p>
              She later joined Empawa Africa, (a digital company to support new
              and upcoming african artistes) in January 2020 as a content lead
              where she had creative freedom on a couple of projects. She soon
              left to pursue a freelance filmmaking career and started a youtube
              channel document her life.
            </p>
          </div>
          <div class="right">
            <div class="image">
              <img
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621285427/Korty/Rectangle_17_ve1u5y.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="c-profile__work">
        <div class="c-profile__work--desktop" ref="works">
          <div class="work__intro">
            <div class="inner">
              <div class="image-con">
                <div class="intro__image">
                  <img
                    src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621360631/Korty/155970126_722279075123050_2581246909765747927_n_1_ieppbb.jpg"
                    alt=""
                  />
                </div>
                <p class="c-caption">
                  Korty EO. &nbsp;
                  <span>March 23, 2021 &nbsp; by @umithedolphin</span>
                </p>
              </div>

              <div class="intro__desc">
                <h1>W<span class="fraunces">O</span>RK</h1>
                <p class="first-para">
                  Korty Eniola has worked accross fashion, entertainment and
                  media industries as a writer, editor, visual desiger, model,
                  content producer and now filmmaker.
                </p>
                <div class="intro__cta">
                  <arrow />
                  <p>Here are some featured projects, Keep scrolling to see.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="work__companies">
            <div class="nike-gt">
              <div class="nike">
                <div class="nike__left">
                  <h2>NIKE</h2>
                  <div class="nike__image1">
                    <img
                      src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406261/Korty/Rectangle_19_o44i0q.jpg"
                      alt="air max 200's"
                      class="skewElem"
                    />
                  </div>
                  <a href="/" target="_blank">
                    <arrow />
                  </a>
                </div>
                <div class="nike__right">
                  <div class="nike__image2">
                    <img
                      src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406261/Korty/Rectangle_20_hkfszk.jpg"
                      alt="air max 200's"
                      class="skewElem"
                    />
                  </div>
                  <p>
                    Collaboration with Peter Johnson for his custom Air Max 200s
                    “Balance Diet”.
                  </p>
                </div>
              </div>
              <div class="gt">
                <div>
                  <div class="gt__image">
                    <img
                      src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406260/Korty/Rectangle_21_itahct.jpg"
                      alt="GTBank logo"
                    />
                  </div>
                  <div class="gt__desc">
                    <h3>GTBANK</h3>
                    <p>Winning project pitch video for GTBank headquarters</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="empawa">
              <div class="empawa__image">
                <img
                  src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621443387/Korty/Rectangle_22_zkazsw.jpg"
                  alt="Oxlade at Empawa"
                  class="skewElem"
                />
              </div>
              <div class="empawa__desc">
                <p>
                  Worked as a content lead at Empawa Africa, single handedly
                  directing and producing shows.
                </p>
                <a href="/" target="_blank">
                  <arrow />
                </a>
              </div>
              <h1>EMPAWA</h1>
            </div>

            <div class="zikoko-ga">
              <div class="googlearts">
                <h3>GOOGLE ARTS <br />& CULTURE</h3>
                <p>
                  Worked on production for a documentary on music for Google
                  Arts and Culture.
                </p>
              </div>
            </div>
          </div>
          <div class="work__quote">
            <h1>End of Page</h1>
          </div>
        </div>
        <div class="c-profile__work--mobile show-mobile"></div>
      </div>
      <div class="c-profile__"></div>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "../components/AnimatedLink/AnimatedLink.vue";
import Arrow from "../components/Arrow.vue";
import { snap } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { AnimatedLink, Arrow },
  mounted() {
    const worksRef = this.$refs.works;

    this.initScrolltrigger();
    this.marqueeAnimation();
    this.heroImageAnimation();
    this.worksAnimation(worksRef);

    const locomotive = this.$refs.scroller.locomotive;
    locomotive.on("scroll", e => {
      if (typeof e.currentElements["hey"] === "object") {
        let progress = e.currentElements["hey"].progress;
        // console.log(progress);
        // ouput log example: 0.34
        // gsap example : myGsapAnimation.progress(progress);
      }
    });
  },
  methods: {
    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y;
        },
        scrollLeft(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });
    },

    marqueeAnimation() {
      gsap.to(".headline__text", {
        scrollTrigger: {
          trigger: ".c-profile__headline",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top 90%",
          end: "bottom 10%"
          // markers: true
        },
        xPercent: -50
      });
    },
    heroImageAnimation() {
      gsap.to(".hero__image img", {
        scrollTrigger: {
          trigger: ".c-profile__headline",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top bottom",
          end: "bottom center"
        },
        scale: 1.17
        // ease: "none"
      });
      gsap.to(".hero__image", {
        scrollTrigger: {
          trigger: ".c-profile__headline",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top bottom",
          end: "bottom center"
        },
        y: 20
        // ease: "none"
      });
    },
    worksAnimation(container) {
      let isScrollForward = true;
      const proxy = { skew: 0, bounce: 1 },
        skewSetter = gsap.quickSetter(".skewElem", "skewX", "deg"),
        // scaleSetter = gsap.quickSetter(".scaleEl", "scaleY"),
        clamp = gsap.utils.clamp(-30, 30),
        scaleClamp = gsap.utils.clamp(0.95, 1.1);

      gsap.to(container, {
        x: () => {
          return -(container.scrollWidth - window.innerWidth);
        },
        ease: "none",
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          scroller: this.$refs.scroller.locomotive.el,
          pin: true,
          scrub: 1,
          start: "top top",
          onUpdate: self => {
            let skew = clamp(self.getVelocity() / -100);
            // const bounce = scaleClamp(
            //   1 - Math.abs((self.getVelocity() / -300) * 0.25)
            // );

            const direction = self.direction;

            const snapDifference =
              self.progress * self.end - (self.end - window.innerWidth);

            if (isScrollForward) {
              if (snapDifference > window.innerWidth * 0.1) {
                self.scroll(self.end);
                isScrollForward = false;
              }
            }

            if (
              direction === -1 &&
              snapDifference > window.innerWidth * 0.2 &&
              snapDifference < window.innerWidth * 0.9
            ) {
              const snapProgress =
                window.innerWidth / (container.scrollWidth - window.innerWidth);
              const differenceEndStart = self.end - self.start;
              const snapDeduction = snapProgress * differenceEndStart;

              self.scroll(self.end - (snapDeduction + 2));

              setTimeout(() => {
                isScrollForward = true;
              }, 1000);
            }

            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;
              // proxy.bounce = bounce;
              gsap.to(proxy, {
                skew: 0,
                scaleY: 0,
                duration: 0.7,
                ease: "power3",
                overwrite: true,
                onUpdate: () => {
                  skewSetter(proxy.skew);
                  // scaleSetter(proxy.bounce);
                }
              });
            }
          },
          end: () => "+=" + container.offsetWidth
          // markers: true
        }
      });
      // console.log(anim.);

      gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

      ScrollTrigger.addEventListener("refresh", () => {
        this.$nuxt.$emit("update-locomotive");
      });

      ScrollTrigger.refresh();
    }
  }
};
</script>

<style lang="scss" scoped></style>
