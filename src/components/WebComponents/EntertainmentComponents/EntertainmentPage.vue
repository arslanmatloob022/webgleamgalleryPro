<template>
  <div class="homepage">
    <!-- <video-player-vue :videoSrc="videoSrc" /> -->
    <div class="hero">
      <!-- Insert hero image here -->
      <img src="@/assets/Images/ent1.jpg" alt="Hero Image" />
      <div class="hero-content">
        <h1>Welcome to our Entertainment World</h1>
        <p>Discover the latest movies, music, and articles.</p>
        <a href="#trending" class="btn">Explore Now</a>
      </div>
    </div>

    <section id="trending" class="trending-section">
      <h2>Trending</h2>
      <div class="trending-content">
        <!-- Trending movies -->
        <!-- Inside the Trending Movies section -->
        <div class="trending-category">
          <h3>Trending Movies</h3>
          <div class="movie" v-for="movie in movies" :key="movie.id">
            <img :src="movie.image" :alt="movie.alt" />
            <p class="movie-title">{{ movie.title }}</p>
            <p class="movie-description">
              {{ movie.description }}
            </p>
          </div>
        </div>

        <!-- Inside the Trending Music section -->
        <div class="trending-category">
          <h3>Trending Music</h3>
          <div class="album" v-for="music in musics" :key="music.id">
            <img :src="music.image" :alt="music.alt" />
            <p class="album-title">{{ music.title }}</p>
            <p class="album-artist">{{ music.artist }}</p>
          </div>
        </div>

        <!-- Inside the Trending Articles section -->
        <div class="trending-category">
          <h3>Trending Articles</h3>
          <div class="article" v-for="article in articles" :key="article.id">
            <img :src="article.image" :alt="article.alt" />
            <p class="article-title">{{ article.title }}</p>
            <p class="article-description">
              {{ article.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderSpace from "./HeaderSpace.vue";
export default {
  name: "Homepage",
  components: {
    HeaderSpace,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          image: require("@/assets/Images/mov1.jpg"),
          alt: "Hollywood Movie",
          title: "Animated",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 2,
          image: require("@/assets/Images/mov1.jpg"),
          alt: "Hollywood Movie",
          title: "Animated",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 3,
          image: require("@/assets/Images/mov1.jpg"),
          alt: "Hollywood Movie",
          title: "Animated",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 4,
          image: require("@/assets/Images/mov1.jpg"),
          alt: "Hollywood Movie",
          title: "Animated",
          description: "THis is the Movies release in 2023",
        },
      ],
      musics: [
        {
          id: 1,
          image: require("@/assets/Images/music1.jpg"),
          alt: "Songs Albums",
          title: "English Songs",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 2,
          image: require("@/assets/Images/music1.jpg"),
          alt: "Songs Albums",
          title: "Indian Songs",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 3,
          image: require("@/assets/Images/music1.jpg"),
          alt: "Songs Albums",
          title: "Pakistani Songs",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 4,
          image: require("@/assets/Images/music1.jpg"),
          alt: "Songs Albums",
          title: "Talligue Songs",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 5,
          image: require("@/assets/Images/music1.jpg"),
          alt: "Songs Albums",
          title: "Russian Songs",
          description: "THis is the Movies release in 2023",
        },
        {
          id: 6,
          image: require("@/assets/Images/music1.jpg"),
          alt: "Songs Albums",
          title: "Latin Songs",
          description: "THis is the Movies release in 2023",
        },
      ],
      articles: [
        {
          id: 1,
          image: require("@/assets/Images/art1.jpg"),
          alt: "What will next With Imran Khan ?",
          title: "Pakistan Watch",
          description: "What will next With Imran Khan ?",
        },
        {
          id: 2,
          image: require("@/assets/Images/art1.jpg"),
          alt: "What will next With Imran Khan ?",
          title: "Pakistan Watch",
          description: "What will next With Imran Khan ?",
        },
        {
          id: 3,
          image: require("@/assets/Images/art1.jpg"),
          alt: "What will next With Imran Khan ?",
          title: "Pakistan Watch",
          description: "What will next With Imran Khan ?",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Header styles */
.homepage {
  margin: 0;
}
.hero {
  height: 240px;
  margin: 0;
  position: relative;
  background-image: url("@/assets/Images/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}
/*filter: blur(8px);
  -webkit-filter: blur(8px);*/

.hero img {
  max-width: 100%;
  height: 55%;
  border-radius: 3%;
  opacity: 0.7;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 20px 0;
  backdrop-filter: sepia(90%);
}

.hero p {
  font-size: 1.2rem;
}

h2 {
  padding: 10px;
  color: #f9f9f9;
  background-color: #333;
  text-align: center;
}
h3 {
  border-radius: 2px;
  padding: 10px;
  background-color: #c91e1e;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5733;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
}

/* Trending section styles */
.trending-section {
  padding: 50px 0;
}

.trending-category {
  padding: 20px;
  margin: 20px 0;
}

.trending-category h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Individual content item styles (movies, music, articles) */
.movie,
.album,
.article {
  display: inline-block;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  overflow: -moz-hidden-unscrollable;
}

.movie img {
  width: 287px;
  max-height: 170px;
}
.album img {
  width: 178px;
  max-height: 120px;
}
.article img {
  width: 396px;
  max-height: 220px;
}
/* Additional CSS for Trending Movies, Music, and Articles */

/* Movie styles */
.movie {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.movie img {
  max-width: 100%;
  height: auto;
}

.movie-title {
  font-weight: bold;
  margin: 10px 0;
}

.movie-description {
  font-size: 0.9rem;
}

/* Album styles */
.album {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.album img {
  max-width: 100%;
  height: auto;
}

.album-title {
  font-weight: bold;
  margin: 10px 0;
}

.album-artist {
  font-size: 0.9rem;
}

/* Article styles */
.article {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.article img {
  max-width: 100%;
  height: auto;
}

.article-title {
  font-weight: bold;
  margin: 10px 0;
}

.article-description {
  font-size: 0.9rem;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .movie,
  .album,
  .article {
    margin: 10px;
    width: 100%;
    max-width: 300px; /* Adjust as needed */
  }
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .hero {
    padding: 50px 0;
  }

  .hero h1 {
    font-size: 1.2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .btn {
    font-size: 0.6rem;
  }

  .trending-category {
    margin: 10px 0;
  }

  .trending-category h3 {
    font-size: 1rem;
  }

  .movie,
  .album,
  .article {
    margin-right: 10px;
  }
  h2 {
    font-size: 1.2rem;
  }
}
</style>
