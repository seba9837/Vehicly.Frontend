import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

const RegisterConfirmation = (props) => {
  const [registerConfirmed, setregisterConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { accConfirmCode } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/v1/actions/${accConfirmCode}`).then((res) => {
      console.log(res);
    });
  }, []);

  let confirmationMessage = null;
  return (
    <div>
      {loading && <div>Spinner</div>}
      {registerConfirmed && { confirmationMessage }}
      {redirect && <Redirect to='/' />}
    </div>
  );
};

export default RegisterConfirmation;
