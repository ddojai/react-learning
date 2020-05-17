import React from 'react';
import MyFrom from './MyFrom';

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string}) => {
    console.log(form);
  };
  return <MyFrom onSubmit={onSubmit} />;
};

export default App;