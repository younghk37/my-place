import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Route, Routes, Navigate } from 'react-router-dom';
import Feed from './Feed/Feed';
import TimeLine from './TimeLine/TimeLine';
import Review from './Review/Review';

function Main(props) {
    return (
        <div css={S.SLayout}>
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route path='/feed' element={ <Feed /> }/>
            <Route path='/timeLine' element={ <TimeLine /> }/>
            <Route path='/review' element={ <Review /> }/>
            <Route path='/reservationOrOrder' element={ <Feed /> }/>
            <Route path='/save' element={ <Feed /> }/>
          </Routes>
        </div>
    );
}

export default Main;