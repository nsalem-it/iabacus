
import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Form,FormGroup , FormControl, Button } from 'react-bootstrap';
import RandomSerie from './random-Serie';

const LevelFilter = () => {const [filtre, setFiltre] = useState({
  longueur: "",
  min: "",
  max: ""
});
const [serie,setSerie] = useState(createRandomList(0,0,0));

// useEffect(() => {
    // setSerie(serie);
    // console.log ("serie 1 =  "+ (serie));
// }, []);

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

const history = useHistory();

const onChange = (e) => {
  setFiltre({ ...filtre, [e.target.id]: e.target.value });
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log(filtre);
  const indexArray =filtre.longueur;
  const min =filtre.min;
  const max =filtre.max;
  setSerie(createRandomList(indexArray,min,max));
  console.log ("serie 1 =  "+ serie);
  //history.push(`/randomSerie/${serie}`);
  //send
};
return (
  <div className="container">
    <div className="col-md-10 mt-5 nav">
<Form className='d-flex'>
  <FormGroup htmlFor="inlineFormInputLongueur">
    <FormControl type="text" placeholder="Longueur" onChange={onChange} value={filtre.longueur} id="longueur"/>
  </FormGroup>{' '}
  <FormGroup htmlFor="inlineFormInputMin">
    <FormControl type="text" placeholder="minimum" onChange={onChange} value={filtre.min} id="min"/>
  </FormGroup>{' '}
  <FormGroup htmlFor="inlineFormInputMax">
    <FormControl type="text" placeholder="maximum" onChange={onChange} value={filtre.max} id="max"/>
  </FormGroup>{' '}
  <Button  disabled={!filtre.longueur || !filtre.min || !filtre.max} onClick={onSubmit}>Générer </Button>
</Form>
</div>
<RandomSerie serie= {serie}/>
</div>
);

   }
 
export default LevelFilter;