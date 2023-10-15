<template>
  <div class="rain-animation">
    <div
      v-for="(drop, index) in drops"
      :key="index"
      class="drop"
      :style="{ left: drop.x + 'px', top: drop.y + 'px' }"
    ></div>
  </div>
</template>

<style scoped>
.rain-animation {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #b3e0ff;
}
.drop {
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: #4682b4;
  opacity: 0;
  animation: fall 2s infinite, spread 2.5s ease-in-out;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh);
  }
  100% {
    transform: translateY(300vh);
  }
}

@keyframes spread {
  0% {
    height: 10px;
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    height: 30px;
    opacity: 0;
    transform: scaleX(1.5);
  }
}
</style>

<script>
export default {
  data() {
    return {
      drops: [],
    };
  },
  mounted() {
    this.interval = setInterval(this.createDrop, 100); // Add a new drop every 200 milliseconds
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear the interval when the component is destroyed
  },
  methods: {
    createDrop() {
      const drop = {
        x: Math.random() * window.innerWidth,
        y: -10, // Start above the screen
      };
      this.drops.push(drop);
      // Remove the first drop after the animation completes
      setTimeout(() => {
        this.drops.shift();
      }, 600000);
    },
  },
};
</script>
