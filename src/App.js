import React from 'react'
import styled from 'styled-components/macro'
import TodoList from './component/TodoList'
const Component=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 1rem;
background-color: #fafafa;
min-height:100vh;
`
const Wrapper=styled.div`
width:100%;
max-width:800px;
display: flex;
flex-direction: column;
align-items: center;
`
const Header=styled.h1`
font-weight:400;
font-size:2.5rem;
text-transform:uppercase;
font-family: 'Courier New', Courier, monospace;
`
function App() {
  return (
    <Component>
      <Wrapper>
        <Header>TO DO List</Header>
        <TodoList/>
      </Wrapper>
    </Component>
  );
}

export default App;
