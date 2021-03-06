## React Web Game

- multiplication-table: 구구단
- word-relay: 끝말잇기
- number-baseball: 숫자야구

#### React를 사용하는 이유

- 웹에서도 앱처럼 부드럽고 빠른 사용자 경험이 좋은 사이트를 만들 수 있다.
- 중복을 최소화하고, 재사용 가능한 컴포넌트를 생성해서 유지보수 하기가 좋다.
- 데이터를 화면에 랜더할 때 데이터와 화면을 일치시키는 것이 매우 좋아진다. 

#### React CDN

```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

#### Babel CDN

```javascript
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

#### Webpack

- Webpack은 여러 개의 파일들을 합쳐서 하나의 파일로 만들고자 할 때 사용한다.
- 예를들면 수 십개에서 수 백개의 자바스크립트 파일을 합쳐허 하나의 자바스크립트 파일로 만들 수 있다.
- 파일을 합치면서 바벨을 적용하거나 불필요한 코드들을 제거해서 최적화시킬 수 있다.

#### Babel 설치

- @babel/core: 기본적인 바벨을 사용하기 위한 필수적인 파일들을 가지고 있는 패키지이다. 최신 문법들을 오래된 문법으로 바꿔준다.
- @babel/preset-env: 사용자의 브라우저 환경에 맞게 자동으로 최신 문법들을 오래된 문법으로 바꿔준다.
- @babel/preset-react: 리액트의 JSX문법을 읽고 바꿔준다.
- babel-loader: 바벨과 웹팩을 연결해준다.

#### webpack.config.js

- 웹팩에 대한 설정을 하는 파일이다.
- webpack을 실행하기 위해서는 터미널에 webpack을 실행한다.
- webpack명령어가 터미널에 등록되어있지 않다면 package.json에 script부분에 지정해주거나 npx를 앞에 붙여서 실행할 수 있다.
- webpack.config.js파일에는 웹팩이 JSX파일을 읽고 처리할 수 있도록 바벨 및 여러 규칙들을 설정해줘야 한다.
- webpack.config.js파일은 노드가 실행해주는 파일이기 때문에 require가 아닌 import문법을 사용하면 에러가 난다.

```javascript
// webpack.config.js
const path = require("path");
const webpack = require('webpack');

module.exports = {
  // name: 웹팩 설정 파일의 이름을 지정해준다.
  name: "word-relay-setting",

  // mode: 현재 개발 또는 배포 중인지 대한 설정을 해준다.
  // 실서비스에서는 development을 production으로 변경해준다.
  mode: "development",

  // devtool: 소스 맵 생성 여부와 방법을 지정한다.
  // 개발단계일 떄는 eval, 배포단계일 때는 hidden-source-map을 사용할 수 있다.
  devtool: "eval",

  // resolve: 현재 이 웹팩 설정 파일이 읽어올 파일들에 대한 확장자명을 지정해준다.
  // 아래와 같이 [".js", ".jsx"]를 지정하게 되면 entry에 파일 확장자명을 붙이지 않아도 js와 jsx파일을 자동으로 읽는다.
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // module: module에는 entry에서 지정한 파일들을 가져와서 읽고, 그 파일들에 아래 규칙을 통해 모듈을 적용한 후, output에 반환한다.
  // rules: rules에는 웹팩이 실행할 여러 규칙들을 지정할 수 있다.
  // test: test에는 그 규칙들을 지정할 파일들을 지정할 수 있다.
  // /\.jsx?/: 정규표현식을 사용해서 js파일 또는 jsx파일에 룰을 적용하겠다는 의미이다.
  // loader: "babel-loader"는 변환할 파일에, 바벨 로더를 적용하겠다고 지정해줬다. 
  // 바벨 로더를 적용해주게 되면 js나 jsx문법에 바벨을 적용해서 최신 문법을 오래된 문법으로 변경해주도록 한다.
  // options에 presets에는 바벨이 실행해야 할 preset 옵션들을 지정해준다.
  // 우리가 설치한 @babel/preset-env, @babel/preset-react preset들을 지정해준다.
  // @babel/preset-env는 옛날 브라우저를 지원하기 위한 옵션이다.
  // preset은 여러 개의 플러그인들이 합쳐진 모음이다.
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        // options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        // 위의 옵션에서 @babel/preset-env에 추가적인 설정들을 주고 싶다면 아래와 같이 세분화해서 추가 설정들을 줄 수 있다.
        // targets: { browsers: ["> 1% in KR"] }에는 웹팩으로 변환한 코드가 지원할 브라우저에 대한 설정을 해줄 수 있다.
        // https://github.com/browserslist/browserslist
        options: {
          presets: [["@babel/preset-env", { targets: { browsers: ["> 1% in KR"] }, debug: true }], "@babel/preset-react"],
        },
      },
    ],
  },

  // 플러그인은 추가적으로 웹팩에 추가 기능들을 가지고 있는 플러그인들을 넣고 싶을 때 사용할 수 있다.
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  // entry: 합칠 파일들을 넣는 부분으로 app안에 배열로 합칠 파일들을 넣어준다.
  // 원래는 app안에 index.jsx와 WoredRelay.jsx파일을 합치기 때문에 두 파일을 모두 적어줘야 한다.
  // 하지만 index.jsx에서 WordRelay.jsx파일을 불러오기 때문에, index.jsx만 넣어줘도 된다. (뒤에 확장자명 생략 가능)
  entry: {
    app: ["./index"],
  },

  // output: 위에 entry에서 지정한 파일들을 하나로 합쳐서 출력해주는 부분이다.
  // path: 합친 파일들을 담을 폴더 경로를 지정한다.
  // filename: 합친 파일들을 저장할 파일의 이름을 지정해준다.
  // path.join()메서드를 사용해서 파일들을 합쳐서 하나로 출력할 폴더를 지정한다.
  // 현재 이 webpack.config.js파일이 위치한 경로를 의미하는 __dirname + dist폴더에 합친 파일들을 담도록 한다.
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
};
```

#### Webpack Dev Server

- Webpack Dev Server를 사용해서 핫리로딩을 사용할 수 있다.
- Webpack Dev Server는 webpack.config.js파일에 있는 코드를 빌드한 후, 그 결과물을 메모리와 dist폴더에 저장해놓고 실행해준다.
- Webpack Dev Server는 기본적으로 리로딩을 시켜주지만 아래 플러그인들을 설치하게 되면, 핫리로딩을 통해 변경된 부분이 있으면 감지해서, 저장했던 결과물을 수정해준다.
- `"serve": "webpack serve --env development"`

#### Reloading vs Hot Reloading

- Reloading은 단순히 새로고침을 해주는 것이다. 새로고침을 하게 되면 기존 브라우저가 가지고 있는 데이터가 다 날아가고, 새로 화면을 띄우는 것이다.
- Hot Reloading은 기존 데이터를 유지하면서 새로 화면을 띄우는 것이다.
- Hot Reloading을 사용하기 위해 @pmmmwh/react-refresh-webpack-plugin와 react-refresh플러그인을 설치해준 것이다.

#### js와 jsx의 차이

- 사실 리액트를 할 때 js로 해도 되고, jsx로 해도 상관없지만 jsx를 사용해서 이 파일은 리액트 전용 파일이라고 좀 더 명시적으로 알려줄 수 있다.

#### index.html

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const element = React.createElement;

      class LikeButton extends React.Component {
        // constructor함수는 컴포넌트가 실행될 때 가장 먼저 실행되는 부분이다.
        constructor(props) {
          super(props);
          this.state = {
            liked: false,
          };
        }

        render() {
          // <button>Like</button>
          return element("button", { onClick: () => this.setState({ liked: true }) }, this.state.liked ? "💖" : "💔"); 
        }
      }
    </script>
    <script>
      ReactDOM.render(element(LikeButton), document.querySelector("#root"));
    </script>
  </body>
</html>
```

#### shouldComponentUpdate

- this.setState({})를 사용해서 state값을 변경할 때, 값이 바뀌지 않아도 리액트에서 리랜더링하는 문제가 있다.
- 해당 문제는 성능 이슈에도 영향을 주는 부분이기 때문에 값이 바뀌지 않았을 때는 리액트가 리랜더링하지 않도록 해줘야 한다.
- 그 때 사용할 수 있는 메서드가 shouldComponentUpdate가 있다.
- shouldComponentUpdate는 true나 false를 리턴하게 해주면 되는데, true가 기본 값으로 값이 바뀌지 않아도 리랜더링한다.
- false로 바꿔줘서 값이 바뀌지 않을 때는 리랜더링하지 않도록 해준다.

```javascript
import React from "react";

class RenderTest extends React.Component {
  state = {
    count: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContent) {
    return this.state.count !== nextState.count;
  }

  handleOnClick = () => {
    this.setState({});
  };

  render() {
    console.log("랜더링", this.state);

    return (
      <div>
        <button onClick={this.handleOnClick}>버튼</button>
      </div>
    );
  }
}

export default RenderTest;
```

#### PureComponent

- PureComponent는 위의 shouldComponentUpdate의 기능을 가지고 있는 컴포넌트이다. 아래와 같이 PureComponent로 사용할 수 있다.
- PureComponent는 state에 바뀐 부분이 있는지 확인하고 true나 false를 반환한다.
- 단 배열이나 객체처럼 조금 복잡하고 참조관계가 있는 구조가 생기면 PureComponent도 문제가 있다.
- 컴포넌트가 복잡해지면 PureComponent가 제대로 동작하지 않는 경우도 있고, state값이 바뀌어도 랜더링되지 않도록 직접 커스터마이징해서 사용하는 경우도 있기 때문에 PureComponent만이 아닌 shouldComponentUpdate를 사용하는 경우도 많다.

```javascript
import React from "react";

class RenderTest extends React.PureComponent {
  state = {
    count: 0,
  };

  handleOnClick = () => {
    this.setState({});
  };

  render() {
    console.log("랜더링", this.state);

    return (
      <div>
        <button onClick={this.handleOnClick}>버튼</button>
      </div>
    );
  }
}

export default RenderTest;
```

#### memo

- UI 성능을 향상시키기 위해, React는 고차 컴포넌트(Higher Order Component, HOC) React.memo()를 제공한다. 
- 랜더링 결과를 메모이징(Memoizing)함으로써, 불필요한 리랜더링을 방지할 수 있다.
- 컴포넌트를 memo()로 감싸주게 되면, React는 컴퍼넌트를 랜더링하고 결과를 메모이징한다. 
- 그리고 다음 랜더링이 일어날 때 props가 같다면, React는 메모이징된 데이터를 재사용한다.
- 즉, 메모이징한 데이터를 재사용함으로써, React에서 리랜더링을 할 때, 가상 DOM에서 달라진 부분을 확인하지 않아 성능 향상을 얻을 수 있다.