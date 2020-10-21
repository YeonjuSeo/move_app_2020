import React from "react";
import axios from "axios";
//data fetch를 위한 axios
import Movie from "./movies";
//같은 디렉토리 안에 있을 때는 ./으로 위치가 표시됨

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //처리되는데 시간이 좀 걸리는 axios를 기다린다는 의미의 async와 await
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    //==this.setSate({movies:movies}); 왼쪽은 state의 movies 오른쪽은 axios에서 온 movie
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
