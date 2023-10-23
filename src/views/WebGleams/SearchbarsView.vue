<template>
  <!-- first searchbar -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>1.</b>Simple Searchbar</h3>
      </div>

      <div class="searchBar">
        <searchbar-one-vue class="searchbar-view"></searchbar-one-vue>
      </div>
    </div>
    <div class="text-content">
      <h3>Simple And Attractive Searchbar</h3>
      <p>
        The simplicity that makes this seachbar more attractive and eye-catching
        is it's light-gray and white color's combination. <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- second searchbar -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>2.</b>Compound Searchbar</h3>
      </div>

      <div class="searchBar">
        <searchbarTwo class="searchbar-view"></searchbarTwo>
      </div>
    </div>
    <div class="text-content">
      <h3>Compound Shaped Search-Bar</h3>
      <p>
        Search-bar with grooved shaped container, containing seprate searchbar
        and search button. <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- third searchbar -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>3.</b>Static Searchbar</h3>
      </div>

      <div class="searchBar">
        <searchbarThird class="searchbar-view"></searchbarThird>
      </div>
    </div>
    <div class="text-content">
      <h3>Static and Curvey Button Search-bar</h3>
      <p>
        Search-bar contaiining a curvey button and search input field<br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- fourth searchbar -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>4.</b>Dynamic Sized Searchbar</h3>
      </div>

      <div class="searchBar">
        <searchbarFour class="searchbar-view"></searchbarFour>
      </div>
    </div>
    <div class="text-content">
      <h3>Static and Curvey Button Search-bar</h3>
      <p>
        Search-bar with flexible size, when you will click and it will start
        searching till the results or enterance of new search-query the size
        will be bigger.<br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- fifth searchbar -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>5.</b>Tank filling Searchbar</h3>
      </div>

      <div class="searchBar">
        <searchbarFive class="searchbar-view"></searchbarFive>
      </div>
    </div>
    <div class="text-content">
      <h3>Tank filling Search-bar</h3>
      <p>
        Modern and unique searchbar with unique functionality. As you start
        entering your search-query as your typing the input-field will start
        getting filled with pink color from left to right.<br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- fifth searchbar -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>6.</b>Reactive Searchbar</h3>
      </div>

      <div class="searchBar">
        <searchbarSix class="searchbar-view"></searchbarSix>
      </div>
    </div>
    <div class="text-content">
      <h3>Reactive Search-bar</h3>
      <p>
        Latest and modern reactive search-bar. the search button will appear as
        you will start entering your search-query.<br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import searchbarOneVue from "@/components/WebGleams/Searchbars/searchbarOne.vue";
import searchbarTwo from "@/components/WebGleams/Searchbars/searchbarTwo.vue";
import searchbarThird from "@/components/WebGleams/Searchbars/searchbarThird.vue";
import searchbarFour from "@/components/WebGleams/Searchbars/searchbarFour.vue";
import searchbarFive from "@/components/WebGleams/Searchbars/searchbarFive.vue";
import searchbarSix from "@/components/WebGleams/Searchbars/searchbarSix.vue";
export default {
  name: "searchbarview",
  components: {
    searchbarOneVue,
    searchbarTwo,
    searchbarThird,
    searchbarFour,
    searchbarFive,
    searchbarSix,
  },
};
</script>
<style scoped>
.container-box {
  background-color: #eeeeee;
  margin-top: 20pt;
  width: 100%;
  display: -webkit-flex;
  height: max-content;
}
.media {
  width: 40%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  padding: 20pt 10pt;
  background-color: #eeeeee;
}

.searchbar-view {
  width: 100%;
  height: max-content;
  border-radius: 10px;
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
  border-radius: 6px;
  font-size: 0.8rem;
  border: 3px solid #57bd8f;
  color: #57bd8f;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
}
.showBtn:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 1px 1px #f26419;
}
.media-header h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #57bd8f;
}
.searchBar {
  width: 100%;
  padding: 10px 30px;
  background-color: #eeeeee;
  display: -webkit-flex;
  border-radius: 8px;
  gap: 26px;
}
.searchBar img {
  width: 50%;
  height: 260pt;
}
.media button {
  margin: 20px;
}
.text-content {
  padding: 20pt;
  width: 60%;
}
.text-content h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 20pt;
  color: #0f0f0f;
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
  transition: all 0.2s ease-in-out;
}
.code-btn {
  background-color: transparent;
  color: #267ff3;
  border: 3px solid #267ff3;
}
.tutorial-btn {
  border: 3px solid #b2071d;
  color: #b2071d;
  background-color: transparent;
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
    font-size: 1.4rem;
    font-weight: bold;
  }

  .searchBar {
    width: 100%;
    height: fit-content;
  }
  .searchBar .searchbar-view {
    width: 100%;
    height: 100%;
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
