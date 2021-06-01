import { gsap } from "gsap";
import { map, lerp, clamp, getMousePos } from "../utils";
// const images = Object.entries(require("../img/*.jpg"));

// track the mouse position
let mousepos = { x: 0, y: 0 };
// cache the mouse position
let mousePosCache = mousepos;
let direction = {
  x: mousePosCache.x - mousepos.x,
  y: mousePosCache.y - mousepos.y
};

// update mouse position when moving the mouse, add check to see if the page has mounted
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", ev => (mousepos = getMousePos(ev)));
}

export default class HoverVideo {
  constructor(el) {
    // el is the <a> with class "menu__item"
    this.DOM = { el: el };
    // position in the Menu
    // this.inMenuPosition = inMenuPosition;
    // menu item properties that will animate as we move the mouse around the menu
    this.hoverProperties = {
      // translationX
      tx: { previous: 0, current: 0, amt: 0.08 },
      // translationY
      ty: { previous: 0, current: 0, amt: 0.08 },
      // Rotation angle
      rotation: { previous: 0, current: 0, amt: 0.08 }
    };
    this.layout();
    // initialize some events
    this.initEvents();
  }

  // create the HTML structure
  layout() {
    // this is the element that gets its position animated (and perhaps other properties like the rotation etc..)
    this.DOM.reveal = this.DOM.el.querySelector(".hover-reveal");
    this.DOM.revealInner = this.DOM.el.querySelector(".hover-reveal__inner");
    this.DOM.revealAsset = this.DOM.el.querySelector(".hover-reveal__video");
  }
  // calculate the position/size of both the menu item and reveal element
  calcBounds() {
    this.bounds = {
      el: this.DOM.el.getBoundingClientRect(),
      reveal: this.DOM.reveal.getBoundingClientRect()
    };
  }
  // bind some events
  initEvents() {
    this.mouseenterFn = () => {
      // show the video element
      this.showVideo();
      // this.DOM.revealAsset.autoplay = true;
      // this.DOM.revealAsset.load();
      this.firstRAFCycle = true;
      // start the render loop animation (rAF)
      this.loopRender();
    };
    this.mouseleaveFn = () => {
      // stop the render loop animation (rAF)
      this.stopRendering();
      // hide the video element
      this.hideVideo();
    };

    this.DOM.el.addEventListener("mouseenter", this.mouseenterFn);
    this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn);
  }
  // show the video element
  showVideo() {
    // kill any current tweens
    gsap.killTweensOf(this.DOM.revealInner);
    gsap.killTweensOf(this.DOM.revealAsset);

    this.tl = gsap
      .timeline({
        onStart: () => {
          // set a high z-index value so video appears on top of other elements
          gsap.set(this.DOM.el, { zIndex: 4 });

          // show the video element
          this.DOM.reveal.style.opacity = 1;
        }
      })
      // animate the video wrap
      .to(this.DOM.revealInner, 0.2, {
        ease: "Sine.easeOut",
        startAt: { x: direction.x < 0 ? "-100%" : "100%" },
        x: "0%"
      })
      // animate the video element
      .to(
        this.DOM.revealAsset,
        0.2,
        {
          ease: "Sine.easeOut",
          startAt: { x: direction.x < 0 ? "100%" : "-100%" },
          x: "0%"
        },
        0
      );
  }
  // hide the video element
  hideVideo() {
    // kill any current tweens
    gsap.killTweensOf(this.DOM.revealInner);
    gsap.killTweensOf(this.DOM.revealAsset);

    this.tl = gsap
      .timeline({
        onStart: () => {
          gsap.set(this.DOM.el, { zIndex: 1 });
        },
        onComplete: () => {
          gsap.set(this.DOM.reveal, { opacity: 0 });
        }
      })
      .to(this.DOM.revealInner, 0.2, {
        ease: "Sine.easeOut",
        x: direction.x < 0 ? "100%" : "-100%"
      })
      .to(
        this.DOM.revealAsset,
        0.2,
        {
          ease: "Sine.easeOut",
          x: direction.x < 0 ? "-100%" : "100%"
        },
        0
      );
  }
  // start the render loop animation (rAF)
  loopRender() {
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => this.render());
    }
  }
  // stop the render loop animation (rAF)
  stopRendering() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
  // translate the item as the mouse moves
  render() {
    this.requestId = undefined;
    // calculate position/sizes the first time
    if (this.firstRAFCycle) {
      this.calcBounds();
    }

    // calculate the mouse distance (current vs previous cycle)
    const mouseDistanceX = clamp(
      Math.abs(mousePosCache.x - mousepos.x),
      0,
      100
    );
    // direction where the mouse is moving
    direction = {
      x: mousePosCache.x - mousepos.x,
      y: mousePosCache.y - mousepos.y
    };
    // updated cache values
    mousePosCache = { x: mousepos.x, y: mousepos.y };

    // new translation values
    // the center of the video element is positioned where the mouse is
    this.hoverProperties.tx.current =
      Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width / 2;
    this.hoverProperties.ty.current =
      Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height / 2;
    // new rotation value
    this.hoverProperties.rotation.current = this.firstRAFCycle
      ? 0
      : map(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 60 : -60);

    // set up the interpolated values
    // for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
    this.hoverProperties.tx.previous = this.firstRAFCycle
      ? this.hoverProperties.tx.current
      : lerp(
          this.hoverProperties.tx.previous,
          this.hoverProperties.tx.current,
          this.hoverProperties.tx.amt
        );
    this.hoverProperties.ty.previous = this.firstRAFCycle
      ? this.hoverProperties.ty.current
      : lerp(
          this.hoverProperties.ty.previous,
          this.hoverProperties.ty.current,
          this.hoverProperties.ty.amt
        );
    this.hoverProperties.rotation.previous = this.firstRAFCycle
      ? this.hoverProperties.rotation.current
      : lerp(
          this.hoverProperties.rotation.previous,
          this.hoverProperties.rotation.current,
          this.hoverProperties.rotation.amt
        );

    // set styles
    gsap.set(this.DOM.reveal, {
      x: this.hoverProperties.tx.previous,
      y: this.hoverProperties.ty.previous,
      rotation: this.hoverProperties.rotation.previous
    });

    // loop
    this.firstRAFCycle = false;
    this.loopRender();
  }
}
