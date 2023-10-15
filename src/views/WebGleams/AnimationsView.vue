<template>
  <div class="container-box">
    <div class="media">
      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/11.png" alt="login form" />
        <img src="@/assets/ComponentsImages/12.png" alt="login form" />
      </div>

      <!-- v-if="showFormById === 1" @closeLoginForm="closeLoginForm" -->

      <anim-gradient class="screen"></anim-gradient>
    </div>
    <div class="text-content">
      <h3>Login and Signup Forms</h3>
      <p>
        Authentication and Autherization in any Application are the process are
        done by Login and Signup forms.<br />login/Signup froms are the first
        major component of the Web Application are developed by Web Frontend
        Developers and Secured by Backend Wed Developers.<br />
        So here we offers all types of Login/Signup forms for all types of
        Applications. <br />Here we present you a simple, responsive and
        attractive Login/Signup forms. And you can text them clicking on
        <b>Show Forms</b> Buttons.
      </p>

      <div class="links">
        <button class="code-btn">Get Source Code</button>
        <button class="tutorial-btn">
          Watch Tuttorial For Full Understanding
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AnimGradient from "@/components/WebGleams/Animations/AnimGradient.vue";
import CandleLight from "@/components/WebGleams/Animations/CandleLight.vue";
import FireworksVue from "@/components/WebGleams/Animations/Fireworks.vue";
import FlyingBalloons from "@/components/WebGleams/Animations/FlyingBalloons.vue";
import MouseCircle from "@/components/WebGleams/Animations/MouseCircle.vue";
import NeonOnMouse from "@/components/WebGleams/Animations/NeonOnMouse.vue";
import OnMouseNeonChange from "@/components/WebGleams/Animations/OnMouseNeonChange.vue";
import ParticlesAnim from "@/components/WebGleams/Animations/ParticlesAnim.vue";
import RainingAnim from "@/components/WebGleams/Animations/RainingAnim.vue";
import SideParticles from "@/components/WebGleams/Animations/SideParticles.vue";
import SmallBlood from "@/components/WebGleams/Animations/SmallBlood.vue";
import SpiderNetVue from "@/components/WebGleams/Animations/SpiderNet.vue";
import StarsAnim from "@/components/WebGleams/Animations/StarsAnim.vue";
import StarsInSkyVue from "@/components/WebGleams/Animations/StarsInSky.vue";
import WaterBubblesVue from "@/components/WebGleams/Animations/WaterBubbles.vue";
import WaveAnim from "@/components/WebGleams/Animations/WaveAnim.vue";

export default {
  name: "AnimationsView",
  data() {
    return {
      showFormById: null,
    };
  },
  components: {
    AnimGradient,
    CandleLight,
    FireworksVue,
    FlyingBalloons,
    MouseCircle,
    NeonOnMouse,
    OnMouseNeonChange,
    ParticlesAnim,
    RainingAnim,
    SideParticles,
    SmallBlood,
    SpiderNetVue,
    StarsAnim,
    StarsInSkyVue,
    WaterBubblesVue,
    WaveAnim,
  },
  methods: {
    showLoginForm(id) {
      if (!this.showFormById) {
        this.showFormById = id;
      } else {
        this.showFormById = null;
      }
    },
    closeLoginForm() {
      this.showFormById = null;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #aab1af;
}
.container-box {
  margin-top: 20pt;
  width: 100%;
  display: -webkit-flex;
  height: max-content;
  background-color: #54b497;
}
.media {
  width: 50%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  padding: 20pt 20pt;
  background-color: #f7fffe;
}
.media-header {
  padding: 2px 8px;
  width: 100%;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}
.showBtn {
  padding: 4pt 6pt;
  border-radius: 4px;
  font-size: 0.8rem;
  background-color: #f26419;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.showBtn:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 1px 1px #f26419;
}
.media-header h3 {
  font-family: "Playfair Display", "AR One Sans", sans-serif;
  color: #f26419;
}
.screen {
  width: 90%;
  height: 100%;
}
.form-imgs {
  width: 100%;
  padding: 10px 30px;
  background-color: #fff;
  display: -webkit-flex;
  border-radius: 8px;
  gap: 26px;
}
.form-imgs img {
  width: 50%;
  height: 260pt;
}
.media button {
  margin: 20px;
}
.text-content {
  padding: 40pt;
  width: 50%;
  background-color: #f7fffe;
}
.text-content p {
  font-family: "Onest", "AR One Sans", sans-serif;
  font-size: 1.2rem;
}
.links {
  display: -webkit-flex;
  gap: 12pt;
}
.links button {
  border-radius: 6px;
  padding: 4pt 6pt;
  color: #ffffff;
  transition: all 0.2s ease-in-out;
}
.code-btn {
  border: #1370eb;
  background-color: #267ff3;
}
.tutorial-btn {
  border: #b2071d;
  background-color: #b2071d;
}

.links button:hover {
  transform: scale(1.02);
}

@media screen and (max-width: 868px) {
  .container-box {
    flex-direction: column;
  }
  .media {
    width: 100%;
    height: 50%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8pt 6pt;
  }
  .showBtn {
    padding: 2pt 4pt;
  }
  .media-header h3 {
    font-family: "Playfair Display", "AR One Sans", sans-serif;
    color: #0055c5;
    font-size: 1.2rem;
  }

  .form-imgs img {
    width: 140pt;
    height: 160pt;
  }
  .text-content {
    padding: 10pt;
    width: 100%;
  }
  .text-content p {
    font-family: "Onest", "AR One Sans", sans-serif;
    font-size: 0.7rem;
  }
  .links {
    display: -webkit-flex;
    gap: 8pt;
  }
  .links button {
    border-radius: 4px;
    padding: 2pt 4pt;
    font-size: 0.8rem;
  }
}
</style>
