# react-mobx-demo

### 解决装饰器的问题

Error: The ‘decorators’ plugin requires a ‘decoratorsBeforeExport’ option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the ‘decorators-legacy’ plugin instead of ‘decorators’.
解决办法：
``` 
npm install babel-plugin-transform-decorators-legacy  --save-dev
npm install  @babel/plugin-proposal-decorators --save-dev
```

修改package.json
```
"babel": {
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ],
    "presets": [
      "react-app"
    ]
},
```

如果用的是vscode有提示报错 “experimentalDecorators”
解决办法：
点击Visual Studio Code左下角的配置按钮(或者文件>首选项>配置)，打开用户设置窗口，在搜索框内输入“experimentalDecorators”
```
"javascript.implicitProjectConfig.experimentalDecorators": false  
// 把false改成true 重启编辑器就可以了
```


### 创建用mobx作为状态管理的页面

1. 写一个store文件，用observable观察对应的数据
```
@observable todos = []
```

2. 页面中引用

```
import TodoList from './stores/todoList'

ReactDOM.render(<App todoList ={TodoList} />, document.getElementById('root'));
```

3. component
```
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>todoList的length是{this.props.todoList.todos.length}</p>
        </div>
      </div>
    );
  }
}
```

4. 添加action，改变store的值
```
// todoList.js
// action 用来改变store的数据
  @action push() {
    console.info('action push')
    const id = this.todos.length + 1
    this.todos.push({
        id,
        name: 'Tast' + id
    })
}
// App.js
<button onClick={() => this.props.todoList.push()}>点我添加</button>
```

5. 添加computed
```
// todoList.js
// computed 根据store中某个值的变化而自动执行
  @computed get allIdCount() {
    return this.todos.reduce((init, item) => {
        return init + item.id
    }, 0)
  }
// App.js
<p>todoList的task的id 总和 是{this.props.todoList.allIdCount}</p>
```

更多api未完待续...
