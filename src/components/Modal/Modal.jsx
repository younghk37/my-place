import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../store/modalStatusStore';

function Modal(props) {
    const [ isModalOpen, setIsModalOpen ] = useRecoilState(isModalOpenState);

    return (
        <div css={S.SLayout(isModalOpen)}>
            <div css={S.SContainer}>
                <div css={S.SMain}>
                    <div>이 서비스는 위치 정보를 사용하는 서비스입니다.</div>
                    <div>위치 정보 사용 동의를 하시겠습니까?</div>
                </div>
                <div css={S.SFooter}>
                    <button onClick={() => {setIsModalOpen(false)}}>아니오</button>
                    <button onClick={() => {setIsModalOpen(false)}}>예</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;