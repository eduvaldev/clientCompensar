import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MainControlerActions = () => {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div className="menuInf">
      <button onClick={goBack} type="button" className="menuInf__boton">
        <i className="icon-arrow-left" />
        Atràs
      </button>
      <Link to="/inicio">
        <button type="button" className="menuInf__boton">
          <i className="icon-home" />
          Inicio
        </button>
      </Link>
    </div>
  );
};

export default MainControlerActions;
