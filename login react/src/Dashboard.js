import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector,  clearState } from './UserSlice';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(localStorage.getItem('token') );
  
  }, []);

  const { username } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      alert("logged in error")
      console.log("logged in error")
      dispatch(clearState());
      history.push('/login');
    }
    else{
      alert("logged in")
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem('token');

    history.push('/login');
  };

  return (
    <div className="container mx-auto">
    
        <Fragment>
          <div className="container mx-auto">
            Welcome back <h3>{username}</h3>
          </div>

          <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </Fragment>
      
    </div>
  );
};

export default Dashboard;
