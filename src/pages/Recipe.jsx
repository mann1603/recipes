import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

function Recipe() {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    let params = useParams();

    const fetchDetails = async () =>{
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
        };
    
    useEffect(() => {
        fetchDetails();
    },[params.name]);

    if (!details.title) {
        return <div>Loading...</div>;
    }

  return (
    <DetailWrapper
        animate= {{opacity: 1}}
        initial= {{opacity: 0}}
        exit= {{opacity: 0}}
        transition= {{duration: 0.5}}
    >
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>

        <Info>
            <Wrapper>
                <Button 
                    className= {activeTab === 'instructions' ? 'active' : ''} 
                    onClick={() => setActiveTab("instructions")}
                >Instructions
                </Button>
                <Button 
                    className= {activeTab === 'ingredients' ? 'active' : ''} 
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>
            </Wrapper>

            {activeTab === 'instructions' && (
                 <div>
                 <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                 <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
             </div>
            )}
           
            {activeTab === 'ingredients' && (
               <ul>
               {details.extendedIngredients.map(ingredient => {
                   return(
                       <li key={ingredient.id}>{ingredient.original}</li>
                   )
                 })}
               </ul> 
            )}
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    h3{
        font-size: 1rem;
    }
    li{
        font-size: 1rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }

    @media only screen and (max-width: 450px) {
        flex-direction: column;
        margin-top: 4rem;
        img{
            width: 100%;
        }
    }
    `
const Info = styled.div`
    margin-left: 10rem;

    @media only screen and (max-width: 450px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: unset;
    }


`
const Wrapper = styled.div`
    @media only screen and (max-width: 450px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black ;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;

    @media only screen and (max-width: 450px){
        margin: unset;
    }
`

export default Recipe
