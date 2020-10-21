import React from "react";
//같은 디렉토리 안에 있을 때는 ./으로 위치가 표시됨
import axios from "axios";
//data fetch를 위한 axios

class App extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    //처리되는데 시간이 좀 걸리는 axios를 기다린다는 의미의 async와 await
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
