## React Web Game

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