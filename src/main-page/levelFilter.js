
import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { Form,FormGroup , FormControl, Button } from 'react-bootstrap';

const LevelFilter = () => {const [filtre, setFiltre] = useState({
  longueur: "",
  min: "",
  max: ""
});
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
  history.push(`/randomSerie/${indexArray}/${min}/${max}`);
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
</div>
);

   }
 
export default LevelFilter;