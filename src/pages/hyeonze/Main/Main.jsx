import { useState, useEffect } from 'react';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import './Main.scss';

const Main = () => {
  const [feedVal, setfeedVal] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    }).then(res =>
      res.json().then(data => {
        setfeedVal(data);
      })
    );
  }, []);

  return (
    <div className="main">
      {feedVal.map((el, i) => {
        return <Feeds key={el.id} userId={el.userId} img={el.img} />;
      })}
      <MainRight />
    </div>
  );
};

export default Main;
