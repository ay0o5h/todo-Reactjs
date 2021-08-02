import React from 'react'
import styled from 'styled-components/macro'

const Component=styled.div`
padding:1rem;
`
const Item=styled.div`
 display:flex;
 align-items:center;

 &:not(:last-of-type){
     margin-bottom:.5rem;
 }
`
const ButtonsStyle=`
background-color: transparent;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 0;
  font-size: .9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
  }
`
const Compelet=styled.button`
${ButtonsStyle};
border:${props => props.complete ? '0' :
'1px solid #e2e8f0'
}

`
const Label=styled.p`
  margin: 0 0 0 0.5rem;
  flex:1;
  color:${props => props.complete ? 'gray':
    '#000000' 
  };
  text-decoration:${props => props.complete ? 'line-through':
  'none' 
}; 
  &:hover {
    cursor: pointer;
    color:#4a5568;
  }
`
const Delete=styled.button`
${ButtonsStyle};
border:0;
`
const List = ({Items,onCompelet,onDelete}) => {
    return(
        <Component>
           {Items.map(item => {
               return(
                   <Item key={item.id} >
                       <Compelet 
                      onClick={onCompelet(item.id)}
                        complete={item.complete}>
                           {item.complete && <span>✅</span>}
                       </Compelet>
               <Label>{item.label}</Label>
                 <Delete   onClick={onDelete(item.id)} >❌</Delete>
                   </Item>
               )
           })}
        </Component>
    )
}
export default List;