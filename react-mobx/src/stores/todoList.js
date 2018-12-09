import { observable, action, computed } from "mobx";
class TodoList {
   // 利用
  @observable todos = []

  // action 用来改变store的数据
  @action push() {
    console.info('action push')
    const id = this.todos.length + 1
    this.todos.push({
        id,
        name: 'Tast' + id
    })
  }
  // computed 根据store中某个值的变化而自动执行
  @computed get allIdCount() {
    return this.todos.reduce((init, item) => {
        return init + item.id
    }, 0)
  }
}

export default new TodoList()