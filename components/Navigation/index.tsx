import React, { useEffect, useState } from 'react';

type Props = {
  message: string;
};

const Index = ({ message }: Props): JSX.Element => {
  const [nav, setNav] = useState([]);

  const getData = async () => {
    const response = await fetch(
      'http://localhost:3000/api/globals/navigation',
    );
    const data = await response.json();

    setNav(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(nav);

  return <div>{message}</div>;
};

export default Index;
