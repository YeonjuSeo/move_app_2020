import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('tomato'));
//(중요)React Application은 한 번에 하나의 component만 rendering 가능
//그러므로 모든 것은 ./App에 들어가야한다.
