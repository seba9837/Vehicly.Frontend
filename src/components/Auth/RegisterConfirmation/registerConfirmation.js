import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

const RegisterConfirmation = (props) => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { accConfirmCode } = useParams();

  useEffect(() => {
    setLoading(true);
    confirmAcc();
  }, []);
  const confirmAcc = async () => {
    const resp = await axios.post('/api/v1/auth/confirm', {
      confirmationCode: accConfirmCode,
    });
    console.log(resp);
    await new Promise((resolve) => setTimeout(resolve, 100));
  };
  return (
    <div>
      {loading && <div>Spinner</div>}
      {redirect && <Redirect to='/' />}
    </div>
  );
};

export default RegisterConfirmation;
