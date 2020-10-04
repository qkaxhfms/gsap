# SCROLL TRIGGER

GSAP를 익히기 위한 개인적인 공개 SCROLLTRIGGER 예제입니다.

## 특수속성

<br>

### animation

timeline-scrolltrigger로 제어해야하는 gsap tween 또는 timeline instance,
ScrollTrigger당 하나의 애니메이션만 제어되지만 모든 애니메이션을 단일 타임라인(최상)으로 래핑하거나 원하는 경우 여러 ScrollTrigger을 만들 수 있다.

<br>

### end

ScrollTrigger의 끝위치를 결정한다.

<br>

### markers

문제해결 중에 도움이 되는 마커를 추가합니다.

<br>

### once

ScrollTrigger는 끝 위치에 도달하자마자 자체를 kill()합니다.

### onEnter

스크롤 위치가 "시작"을 지나 앞으로 이동할 때

## onEnterBack

스크롤 위치가 "끝"을 지나 뒤로 이동할 때

### onLeave

스크롤 위치가 "끝"을 지나 앞으로 이동할 때

### onLeaveBack

스크롤 위치가 "시작"을 지나 뒤로 이동할 때

<br>

### pin

스크롤트리거가 활성화되어 있는 동안 고정되어야하는 요소
