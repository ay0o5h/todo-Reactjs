import React,{Component} from 'react'
import styled from 'styled-components/macro'

const Wrapper=styled.div`
display:flex;
border-bottom :1px solid #e2ebf0
`
const StyleInput = styled.input`
border:0;
width:100%;
padding:1rem;

&:focus {
    outline:0;
}
`

const Button = styled.button`
border:0;
border-left :1px solid #e2ebf0;
background-color:#68d391;
color:#fff;
&:hover {
    cursor: pointer;
}
`


class Input extends Component {
    state={
        value:'',
        edit:false
    }
    handleChange = (e) => {
        const newValue=e.target.value
        this.setState({
            value:newValue
        })
        if ( newValue === ''){
            this.setState({
                edit:false
            }) 
        }else {
            this.setState({
                edit:true
            }) 
        }
    }
    handleKey = (e) => {
        if(e.key === 'enter'){
            this.handleSubmet()
        }
    }
    handleSubmet=() => {

        this.props.addTask(this.state.value)

        this.setState({
            value:'',
            edit:false
        })
    }
  render(){
    return(
      <Wrapper>
          <StyleInput
          type="text"
          placeholder="add item"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKey}
           />
           {this.state.edit && <Button onClick={this.handleSubmet} >add</Button>}
      </Wrapper>
        )
  }
}
export default Input;