import React, { Component } from 'react';
import Header from './header/Header';
import MovieList from './movie-list/MovieList';
import MovieDetail from './movie-detail/MovieDetail';
import MovieElement from './movie-list/MovieElement';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [{
        title: 'One Piece',
        img: 'https://images5.alphacoders.com/104/thumb-1920-1046568.jpg',
        details: 'TV | 24 min. | Action, Aventure, Comédie, Fantaisie',
        description: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.'
      }, 
      {
        title: 'Naruto',
        img: 'https://www.ixpap.com/images/2021/03/desktop-naruto-wallpaper-ixpap-2.jpg',
        details: 'TV | 23 min. | Action, Aventure, Comédie',
        description: 'Moments prior to Naruto Uzumakis birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubis rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.'
      }, 
      {
        title: 'Fairy Tail',
        img: 'https://www.geekgeneration.fr/wp-content/uploads/2020/08/7a7392e7d1c42998a2dcc8125dd3f89a.jpg',
        details: 'TV | 24 min. | Action, Aventure, Comédie, Fantaisie',
        description: 'In the mystical land of Fiore, magic exists as an essential part of everyday life. Countless magic guilds lie at the core of all magical activity, and serve as venues for like-minded mages to band together and take on job requests. Among them, Fairy Tail stands out from the rest as a place of strength, spirit, and family.'
      }, 
      {
        title: 'Bleach',
        img: 'https://cdn-www.bluestacks.com/bs-images/Banner_Bleach-Immortal-Soul.jpg',
        details: 'TV | 24 min. | Action, Aventure, Comédie',
        description: 'Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigos family from the assailant. To save his family, Ichigo accepts Rukias offer of taking her powers and becomes a Soul Reaper as a result.'
      }, 
    ],
      selectedMovie: 0,
    }
  }


  updatedSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title;
    })
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return(
      <div className="App d-flex flex-column">
          <Header />
          <div className="d-flex flex-row flex-fill pt-4">
            <MovieList movies={ this.state.movies } updatedSelectedMovie={ this.updatedSelectedMovie } />
            <MovieDetail movie={ this.state.movies[this.state.selectedMovie] } />
          </div>
      </div>
    );
  }
}

export default App;