import React from "react";
//같은 디렉토리 안에 있을 때는 ./으로 위치가 표시됨
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    //react의 모든 element들은 다르게 보일 필요가 있다.
    //그래서 아래의 컴포넌트들과는 id로 구분
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7,
  },
];

//우리가 받은 정보가 우리가 원한 정보가 맞는지 확인하는 함수
//그것을 위한 PropTypes.
// 사용하기 위해 함수이름은 꼭 propTypes라고 지어줘야함.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  //필수라고 써주지 않았으므로 한 componenet에서 rating이 없어도 경고되지 않음
  rating: PropTypes.number,
};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div> //alt는 대체텍스트같은 것...
  );
}

function App() {
  return (
    //dish=> means object인 dish가 argument인 function(dish)
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
