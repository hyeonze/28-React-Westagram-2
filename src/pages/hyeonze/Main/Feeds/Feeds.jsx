import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineComment, AiOutlineUpload } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GrBookmark } from 'react-icons/gr';
import './Feeds.scss';
import Comments from './Comment/Comments';

export default function Feeds({ profileImg, writer, img, comments }) {
  const [commentVal, setCommentVal] = useState(comments);
  let addedCommentVal = [...commentVal];
  const [currInputVal, setCurrInputVal] = useState('');
  const userId = useSelector(store => store.userId);

  const handleInput = e => {
    const { value } = e.target;
    if (e.keyCode === 13) uploadComment();
    setCurrInputVal(value);
  };

  const uploadComment = e => {
    e.preventDefault();
    if (!currInputVal) return;
    addedCommentVal.push({
      id: addedCommentVal.length + 1,
      userId: userId.userId,
      value: currInputVal,
      time: '방금전',
    });
    setCommentVal(addedCommentVal);
    setCurrInputVal('');
  };

  const handleDelete = e => {
    const { id } = e.target.parentNode.parentNode;
    addedCommentVal = addedCommentVal.filter(el => el.id !== Number(id));
    setCommentVal(addedCommentVal);
  };

  return (
    <div className="feeds">
      <article>
        <div className="top_menu">
          <span>
            <img src={profileImg} alt="프로필" />
            {writer}
          </span>
          <span>
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <img src={img} alt="무화과" />
        <div className="bottom_menu">
          <span>
            <AiFillHeart className="" />
          </span>
          <span>
            <AiOutlineComment className="" />
          </span>
          <span>
            <AiOutlineUpload className="" />
          </span>
          <span>
            <GrBookmark className="" />
          </span>
        </div>
        <div className="comments">
          <span>4 Likes</span>
          <Comments commentArr={commentVal} handleDelete={handleDelete} />
        </div>
        <form className="add_comments">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="input_upload"
            onChange={handleInput}
            value={currInputVal}
          />
          <button
            className={currInputVal ? 'activated' : ''}
            onClick={uploadComment}
          >
            게시
          </button>
        </form>
      </article>
    </div>
  );
}
