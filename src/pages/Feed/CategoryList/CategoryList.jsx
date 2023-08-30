import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function CategoryList(props) {
    const buttonList = [
        {
            categoryName: 'kFood',
            buttonText: '한식',
        },
        {
            categoryName: 'picnic',
            buttonText: '피크닉',
        },
        {
            categoryName: 'caffee',
            buttonText: '카페',
        },
        {
            categoryName: 'lodgment',
            buttonText: '숙박',
        },
        {
            categoryName: 'westernFood',
            buttonText: '양식',
        },
        {
            categoryName: 'leisureActivity',
            buttonText: '레저・액티비티',
        },
        {
            categoryName: 'japaneseFood',
            buttonText: '일식',
        },
        {
            categoryName: 'historicalSite',
            buttonText: '역사유적',
        },
        {
            categoryName: 'camping',
            buttonText: '캠핑',
        },
        {
            categoryName: 'bunsikChicken',
            buttonText: '분식/치킨',
        },
        {
            categoryName: 'cultureAndArt',
            buttonText: '문화예술',
        },
        {
            categoryName: 'naturalAttractions',
            buttonText: '자연명소',
        },
    ];

    const [ selectedCategoryName, setSelectedCategoryName ] = useState();
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const widthOfButtons = "720px";
    const scrollSpeed = 100;

    function click(categoryName) {
        if(selectedCategoryName === categoryName) {
            setSelectedCategoryName("");
        }else{
            setSelectedCategoryName(categoryName);
        }
    }

    const buttonContainer = useRef();

    function getMinScrollPosition() {// minScrollPosition ~ 0 => 스크롤 가능 범위
        try{
            const buttonContainerWidth = buttonContainer.current.offsetWidth;
            const sContainerWidth = buttonContainer.current.parentElement.offsetWidth;
            const minScrollPosition = sContainerWidth - buttonContainerWidth;
            return minScrollPosition;
        } catch(e) {
            return 123123123;//의미 없음
        }
    }

    function leftButtonClick() {
        const newScrollPosition = Math.min(scrollPosition + scrollSpeed, 0);
        buttonContainer.current.style.transform = `translateX(${newScrollPosition}px)`;
        setScrollPosition(newScrollPosition);
    };
    
    function rightButtonClick() {
        const minScrollPosition = getMinScrollPosition();
        const newScrollPosition = Math.max(scrollPosition - scrollSpeed, minScrollPosition);
        buttonContainer.current.style.transform = `translateX(${newScrollPosition}px)`;
        setScrollPosition(newScrollPosition);
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer(widthOfButtons)}>
                <button css={S.SLeftButton(scrollPosition !== 0)} onClick={leftButtonClick}>{'<'}</button>
                <div css={S.SButtonContainer} ref={buttonContainer}>
                    {buttonList.map((item) => {
                        return (<button css={S.SButton(selectedCategoryName === item.categoryName)} onClick={() => click(item.categoryName)}>{item.buttonText}</button>)
                    })}
                </div>
                <button css={S.SRightButton(scrollPosition !== getMinScrollPosition())} onClick={rightButtonClick}>{'>'}</button>
            </div>
        </div>
    );
}

export default CategoryList;