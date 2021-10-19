
import Serie from "../serie";
import React, { useState , useEffect} from 'react';
import { useParams } from "react-router-dom";


const RandomSerie = () => {
    const { indexArray } = useParams();
    const { min } = useParams();
    const { max } = useParams();


    const [serie, setSerie] = useState([]);
    useEffect(()=>{
        setSerie( createRandomList(indexArray,min,max));
    },[indexArray] // eslint-disable-line react-hooks/exhaustive-deps
    )


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }
  
      function createRandomList(ARRAY_LENGTH,min,max){
           const randomArray = []
           for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(getRandomIntInclusive(min, max))}
         return randomArray;
      } 

    const [visible, setVisible] = React.useState(false)

    function calculResultat(serie){
        return Array.from(serie).reduce( (x , currentValue) => x + currentValue)
    }
    if(serie){
        return(
            <div className="container">
                <div  className="col-md-12 text-center">
                  <button  className="button" onClick={() => setVisible(!visible)}>
                   {visible ? 'Cacher le résultat' : 'Montrer le résultat'}
                   </button>
                     {visible && 
                        <div className="col-md-10 mt-5 resultat" > {calculResultat(serie)}</div>
                     }
                 </div>           
                {!visible &&
                <div className="col-md-10 mt-5 serie">
                <Serie serie={serie}/>
                </div>  
                 }
            </div>
        )
    };
    return <div> No serie</div>

};

export default RandomSerie;