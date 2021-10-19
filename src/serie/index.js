import "./serie.css"
import React, { useState, useEffect} from 'react';


const Serie = ({serie}) =>{
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if(index < serie.length ){
                setIndex(index => index + 1);
            }else{
               setIndex(0) ;
               clearInterval(interval);
            }
              }, 2000);
        return () => {
            console.log ("index =  "+index);
            clearInterval(interval);}
      }, [index]);// eslint-disable-line react-hooks/exhaustive-deps


    return(

       <div className="container" >
            <span> {serie[index]}</span>
        </div>
    );
}

export default Serie;