import React, { useState } from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }

  return (
    <FontStyle onSubmit={submitHandler}>
        <div>
            <FaSearch className='svg1'></FaSearch>

            {input && <FaTimes 
            className='svg2'
            onClick={()=>setInput("")}>
            </FaTimes> }
            
            <input type="text" 
            onChange={(e) => setInput(e.target.value)} 
            value={input} />
        </div>
    </FontStyle>
  )
}

const FontStyle = styled.form`
    margin: 0rem 14rem;

    div{
        position: relative;
        width: 100%;
    }

    input{
        border: none;
        background:  linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: white;
        padding: 1rem 2rem;
        border: none;
        border-radius: 5rem;
        outline: none;
        width: 100%;
    }

    svg.svg1{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    svg.svg2{
        position: absolute;
        top: 50%;
        left: 100%;
        right: 0%;
        transform: translate(-200%, -50%);
        color: white;
        cursor: pointer;
    }
`
export default Search
