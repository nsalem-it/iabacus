
import React, { useState , useEffect} from 'react';


const RandomSerie = ({serie}) => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = React.useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log ("serie 2 =  "+ (serie));
            if(index < serie.length ){
                setIndex(index => index + 1);            
            }else{
               setIndex(0) ;
               clearInterval(interval);
            }
              }, 3000);
        return () => {
            console.log ("index =  "+ index);
            clearInterval(interval);}
      }, [serie,index]);// eslint-disable-line react-hooks/exhaustive-deps


    // function isNumeric(num){
        // return !isNaN(num);
    //   };

    function calculResultat(serie){
        if(!serie.length>0  ){ return 0;} 
        else{return Array.from(serie).reduce( (x , currentValue) => x + currentValue);}
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
               <span> {serie[index]}</span>
                </div>  
                 }
            </div>
        )
    };
    return <div> No serie</div>

};

export default RandomSerie;