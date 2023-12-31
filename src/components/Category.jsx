import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { styled } from 'styled-components'
import {NavLink} from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
           <FaPizzaSlice />
           <h4>Italian</h4>
       </Slink >
        <Slink to={'/cuisine/American'}>
           <FaHamburger />
           <h4>American</h4>
       </Slink>
        <Slink to={'/cuisine/Thai'}>
           <GiNoodles />
           <h4>Thai</h4>
       </Slink>
        <Slink to={'/cuisine/Japanese'}>
           <GiChopsticks />
           <h4>Japanese</h4>
       </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

    @media only screen and (max-width: 450px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 2rem 11rem;
    }
    @media only screen and (max-width: 380px) {
        margin: 2rem 10rem;
    }
`
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2rem;
    margin-bottom: 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transform: sacle(0.8);

    h4{ 
        color: #fff;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }&.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }

   
`

export default Category
