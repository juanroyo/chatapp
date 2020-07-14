import React from 'react';


function Form() {

  return (
    <div class="display" >
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Nombre de la receta</label>
        <input class="form-control" type="text" placeholder="Readonly input here…" readonly/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Tiempo de preparacion</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>10 - 20 Minutos</option>
          <option>20 - 30 Minutos</option>
          <option>30 - 40 Minutos</option>
          <option>40 - 50 Minutos</option>
          <option>50 - 60 Minutos</option>
          <option>1 - 1:30 Horas</option>
          <option>1:30 - 2 Horas</option>
          <option>2 - + 3 Horas</option>
        </select>
      </div>
      <div class="form-group">
      <label for="exampleFormControlTextarea1">Ingredientes</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Preparación</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
    </div>
  );
}

export default Form;
