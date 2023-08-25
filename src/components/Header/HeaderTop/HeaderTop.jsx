import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Link } from 'react-router-dom';
import { SiNaver } from 'react-icons/si';
import { BsTicket } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

function HeaderTop(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLeft}>
                <Link css={S.SNaverIconContainer}>
                    <div css={S.SIconBackground}>
                        <SiNaver css={S.SNaverIcon}/>
                    </div>
                </Link>
                <button css={S.SBrandNameButton}>
                    <span css={S.SBrandName}>MY플레이스</span>
                </button>
            </div>
            <div css={S.SRight}>
                <div css={S.SCouponIconContainer}>
                    <BsTicket css={S.SCouponIcon}/>
                    <span css={S.SCouponText}>쿠폰</span>
                </div>
                <div css={S.SMenuToggleButton}>
                    <HiMenu css={S.SMenuIcon}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;