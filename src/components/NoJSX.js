import React from 'react'


const NoJsx = () => 
React.createElement('div',{id: 'myId'}, 
    React.createElement('h1',null,'hi from no JSX functional component'));


export default NoJsx