import React from 'react'
import styled from 'styled-components/macro'

const Component=styled.div`

border-bottom :1px solid #e2ebf0;
display:flex;
`
const Button =styled.button`
background-color:${props => props.selected ? '#edf2f7' :'#fff'};
border:0;
flex:1;
padding:.75rem;
font-weight:${props => props.selected ?500 :400};
transition: all .25s ease-in-out;
&:first-of-type {
    border-radius: .375rem 0 0 0;
border-right: 1px solid #e2ebf0;
}
&:last-of-type {
    border-radius: 0 .375rem  0 0;
border-right: 1px solid #e2ebf0;
}
&:focus{
    outline:0;
}
&:hover{
    cursor: pointer;
    background-color:#e2ebf0
}
`
const buttons= [
    {
        value:'All',
        label:'All'
    },
    {
        value:'Active',
        label:'Active'
    },
    {
        value:'Complete',
        label:'Complete'
    }
]
const Filter = ({mode,onModeChange}) => {
    return(
        <Component>
           {buttons.map(({label,value}) => {
               return (
                   <Button 
                   key={value}
                   onClick={onModeChange(value)} 
                   selected={mode === value} >
                       {label}
                   </Button>
               )
           })}
        </Component>
    )
}
export default Filter;