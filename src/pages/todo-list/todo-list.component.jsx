import React from 'react';

import AddItem from '../../components/add-item/add-item.component';
import ListItems from '../../components/list-items/list-items.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import Input from '../../components/input/input.component';

import './todo-list.styles.scss';

class ToDoList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      input: '',
      isEditing: false,
      progress: 0,

    }
  }

  componentDidMount() {
    let all = localStorage.getItem('items') != null ? JSON.parse(localStorage.getItem('items')) : []
    this.setState({ items: all }, () => this.setProgress(this.state.items))
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items))
  }

  onEditing = () => {
    this.setState({ isEditing : !this.state.isEditing })
  }

  onChange = e => { 
    this.setState({input: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    const item = { id: new Date().getTime(), text: this.state.input, isCompleted: false}
    if (!this.state.input.length) { return false }
    this.setState((state) => ({ 
      items : state.items.concat(item),
      input: ''
    }), () => this.setProgress(this.state.items))
  }

  onClick = id => { 
    let updated = this.state.items.map(item => {
      if (item.id === id) { item.isCompleted = !item.isCompleted }
      return item
    })
    this.setState({ items: updated }, () => this.setProgress(updated))
  }

  onDelete = id => { 
    let filtered = this.state.items.filter(item => {
      if (item.id !== id) { return item }
    })
    this.setState({ items: filtered }, () => this.setProgress(filtered))
  }

  setProgress = items => {
    let progressBar = document.querySelector(".progress")

    if (items.length >= 1) {
      let checked = items.filter(item => { return item.isCompleted })
      let progress = checked.length / items.length
      this.setState({ progress: Math.floor(progress * 100) })
      progressBar.classList.remove("hidden")
    } else {
      progressBar.classList.add("hidden")
    }
  }

  render() {
    return (
      <form className="todo-list-container" onSubmit={(e) => this.onSubmit(e)}>
        <div className='add-item'>
          <AddItem onEditing={this.onEditing} />
          <Input {...this.state} onChange={this.onChange} />
        </div>
        <div className='list-items'>
          <ListItems {...this.state} onClick={this.onClick} onDelete={this.onDelete} />
        </div>

        <ProgressBar { ...this.state } />
      </form>
    );
  }
}

export default ToDoList;
