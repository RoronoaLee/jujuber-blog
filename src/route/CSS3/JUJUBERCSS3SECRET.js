import React, {Component} from 'react';
import Article from '../../component/Article/Article';
let html = (<div><h1>序</h1>
<p>探究CSS</p>
<pre><code>{`let a = 1;
let b = 2;
`}</code></pre>
<table>
<thead>
<tr>
<th>标题</th>
<th>属性</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2</td>
</tr>
</tbody>
</table>
</div>);
export default class JUJUBERCSS3SECRET extends Component{
  render() {
    return (
      <Article title='CSS3 探究' time='Sun, 09 Sep 2018 04:09:28 GMT' category='CSS3' content={html}/>
    )
  }
}