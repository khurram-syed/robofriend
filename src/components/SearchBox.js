import React from 'react';
import 'tachyons'

const SearchBox = ({onsearchchange})=>{
  return (
      <div>
        <input  className ="ma2 pa3 ba b--green bg-lightest-blue"
           type= "search"
           placeholder="find the robofriend"
           onChange ={onsearchchange} />
      </div>
  );
}
export default SearchBox;