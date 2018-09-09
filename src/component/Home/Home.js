import './Home.css';
import React, {Component} from 'react';
import ArticleEntry from '../ArticleEntry/ArticleEntry';

export default class Home extends Component {

constructor (props) {
  super(props);
  this.state = {
    json : JSON.parse(this.props.json), //所有数据
    pageSize : 2, //每次新增的条数
    totalNum : 0, // 数据length
    listToShow: [], // 最终渲染的数组
    currentNum: 0 // 当前一共有多少
  };
  this.handleClick.bind(this)
}


componentDidMount () {
  let state = this.state;
  state.pageSize = 2;
  state.totalNum = state.json.length;
  state.currentNum = state.pageSize;
  state.listToShow = state.json.slice(0, state.currentNum);
  this.setState(state);
}

  handleClick(e) {
      let state = this.state;
      state.currentNum += state.pageSize;
      if (state.currentNum >= state.totalNum) {
        state.currentNum = state.totalNum;
        let dom = e.target;
        dom.style.display = 'none';
      }
      state.listToShow = state.json.slice(0, state.currentNum);
      this.setState(state);
      this.render()
  }


  
  
  render() {
    return (
        <div>
      <section className="home-posts">
          {this.state.listToShow.map(item => (<ArticleEntry title={item.title} category={item.category} time={item.time}
                                      path={item.path} content={item.content}/>))}
      </section>
          <div onClick={this.handleClick.bind(this)} style={{width:"100px", height: "100px"}}>瀑布流 </div>
        </div>
    )
  }
}
