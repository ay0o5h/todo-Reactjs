import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Filter from './filter';
import Input from './input';
import List from './list';
import { v4 as uuidv4} from 'uuid'
const Wrapper = styled.div`
background-color:#fff;
border-radius:.375rem;
box-shadow : 0 5px 10px 0 rgba(0,0,0,0.15);
min-width:400px;
`
 
class TodoList extends Component {
    state= {
        mode:'All',
        Items: [
            {
                id:1,
                label:'first task',
                complete:false
            },
            {
                id:2,
                label:'second task',
                complete:false
            },
            {
                id:3,
                label:'third task',
                complete:false
            }
        ]
    }
    onComplete = (id) => () => {
        const newItems=[...this.state.Items]
        const filterMode=newItems.filter((item) => item.id ===  id)[0]
       filterMode.complete = !filterMode.complete
        this.setState({
            Items:newItems
        })
    }
    handleModeChange = mode=> () => {
        this.setState({mode})
    }
  
    onDelete = (id) => () => {
       const filterItems = this.state.Items.filter(item => item.id !== id)
       this.setState({
        Items:filterItems
    })
    }
    addTask = (value) => {
        console.log(value)
        const task = {
            id :uuidv4(),
            label:value,
            complete:false
        }
        const newItem = [task,...this.state.Items]
        this.setState({
            Items:newItem
        })
    }
    render() {
        const {mode,Items} = this.state

        const filtersItem = []
        if ( mode === 'Complete'){
            filtersItem=Items.filter(item => item.complete=== true) 
        }else if( mode === 'Active'){
            filtersItem=Items.filter(item => item.complete=== false)
        } 
        // }else {
        //     filtersItem=Items
        // }
        return (
            <Wrapper>
                <Filter 
                mode={filtersItem}
                 onModeChange={this.handleModeChange}
                 
                />
                <Input addTask={this.addTask}/>
                <List onDelete={this.onDelete}  onCompelet={this.onComplete} Items={Items}/>
            </Wrapper>
        )
    
}
}
export default TodoList;