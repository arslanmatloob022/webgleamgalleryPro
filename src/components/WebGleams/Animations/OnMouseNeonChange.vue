<template>
  <div class="neon-light" @mousemove="moveLight">
    <div class="neon-glow" :style="lightStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightX: 0,
      lightY: 0,
      colors: ["#f06", "#0f6", "#06f", "#f60", "#60f", "#6f0"], // Neon colors
    };
  },
  computed: {
    lightStyle() {
      return {
        left: `${this.lightX}px`,
        top: `${this.lightY}px`,
        width: "10px", // Neon light width
        height: "10px", // Neon light height
        background: this.colors[Math.floor(Math.random() * this.colors.length)],
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        boxShadow: "0 0 10px 5px #ffffff", // Neon light effect
        zIndex: "9999",
      };
    },
  },
  methods: {
    moveLight(event) {
      this.lightX = event.clientX - 10; // Adjusting position to center the neon light
      this.lightY = event.clientY - 15;
    },
  },
};
</script>

<style scoped>
.neon-light {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  cursor: default;
}
</style>
