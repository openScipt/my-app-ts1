import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

const html = "<img onerror='alert(\"hacked!\")' src='invalid-image' />"

const jsHacked = "javascript: alert('hacked!')"

function App() {

  return (
    <>
      {/* 
        我们实际想通过一个图片通过onerror黑系统，react把变量中的html转化成了字符串，没有执行html代码，而是以字符串展示了出来，react通过转化成字符串防止了攻击，但是通常不会那么啥，通过传入函数作为事件处理方式
       */}
      <div>{html}</div>
      <a href={jsHacked}>mywebsit</a>
      <ul>
        {robots.map(item => <Robot id={item.id} email={item.email} name={item.name} />)}
      </ul>
    </>
  );
}

export default App;
