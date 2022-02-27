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
  });

  return (
    <div className="main">
      {feedVal.map(el => {
        return (
          <Feeds
            key={el.id}
            writer={el.userId}
            profileImg={el.profileImg}
            img={el.img}
            comments={el.comment}
          />
        );
      })}
      <MainRight />
    </div>
  );
};

export default Main;
