import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FiCrosshair } from 'react-icons/fi';

function Header(props) {
    const selectedButtonName = "all";

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SButtons}>
                    <div>
                        <button css={S.SButton(selectedButtonName === 'all')}>전체</button>
                    </div>
                    <div>
                        <button css={S.SButton(selectedButtonName === 'following')}>팔로잉</button>
                    </div>
                    <div>
                        <button css={S.SButton(selectedButtonName === '​​interestArea')}>
                            <svg viewBox="0 0 10 10">
                                <path d="M5.8 0.2L5.8 4.2 9.8 4.2 9.8 5.8 5.8 5.8 5.8 9.8 4.2 9.8 4.2 5.8 0.2 5.8 0.2 4.2 4.2 4.2 4.2 0.2z"></path>
                            </svg> 관심지역
                        </button>
                    </div>
                </div>
                <div css={S.SLocationButtonContainer}>
                    <button css={S.SLocationButton}>
                        <FiCrosshair />현위치
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;