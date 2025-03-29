# 경일게임아카데미 클론코딩(이전 페이지)

## 주목표

- 반응형 웹사이트
- 코딩작성 속도 늘리기
- 간단한 계획 스케줄링과 함께 코딩

### 스택

next, framer-motion, swiper, react, tailwind, github, @heroicons/react

### 기타

- 매일 커밋을 진행하며 모든 작업은 main 브렌치에 저장되고, 작업은 새로운 브렌치를 작성하여 squash하는 방식으로 진행된다.
- 단, 일요일은 쉬며 진행상황을 올리지 않는다. 일요일이 아닌 날에 개인사정으로 진행을 못한 경우에는 날짜 밑에 간단한 사유를 적어 커밋한다.
- issue는 issue.md 파일에 저장, 해결과정 또한 issue.md 파일에서 기재한다.

- 25/03/24

  swiper.css 커스텀했습니다.

### 코딩시작 - 25/3/18

- **1주차 목표**: header와 오른쪽에 고정된 메뉴바 작성
- **2주차 목표 이후**: 주마다 2 section씩 반응형을 포함하여 코딩하기

#### 25/03/18

1. aside 완성.

#### 25/03/19

1. header 완성.
2. aside, z-index 추가.

#### 25/03/20

1. header fix, 줄맞추기.
2. header fix, subMenu의 p-4 -> py-4.
3. 첫번째 section의 슬라이드 작성중.(issue 발생)

#### 25/03/21

1. 슬라이드 이슈 해결 및 section1(슬라이드) 완성.
2. header의 반응형으로 인한 소형 모바일 환경에서 menu의 잘못된 height를 고침.
3. page에서 반응형으로 인한 소형 모바일 환경에서의 잘못된 top-padding을 고침.
4. @heroIcons/react 라이브러리 추가.
5. font 라이브러리 발견, pretendard 폰트로 변경.
6. section_2 작성중.

#### 25/03/22

1. section_2 작성중.
2. inview 애니메이션 이슈 발생 및 해결.
3. 요소의 height 이슈 발생 및 해결.

#### 25/03/24

1. swiper.css 커스텀
   .swiper-slide_custom {
   width: 90%;
   height: 80%;
   opacity: 0.5;
   margin: 0 auto;
   transition-duration: 0.8s;
   }
   .swiper-slide-active {
   height: 100%;
   scale: 1;
   transition-duration: 0.8s;
   opacity: 1;
   }
2. useInViewAnime.ts 수정.
3. motion-framer을 이용한 일부 애니메이션을 css transition으로 수정.
4. slide 파트 완성.

#### 25/03/25

1. section2 완성
2. useInViewAnime 잘못된 조건식 수정.
3. selection css.
4. section3 완성(간단한 구조)
5. useInViewAnime, section1 componentWillUnmount 타이밍의 함수 추가.
6. section4 작성 진행중.

#### 25/03/26

1. section4 작성 완료
2. section5 골조 완성
3. section5 슬라이드 처음 loop 떄 속도가 느려지는 현상, 추가적인 수정 필요.

#### 25/03/27

1. section5 완성.
2. section6 작성중.(whitespace-pre-line으로 공백과 줄바꿈 유지, 데이터 변경 필요)
3. useEffect를 한번만 호출하기 위해, 커스텀훅 useInViewAnime_p_arr 신규 작성.

#### 25/03/28

1. section6 완성.
2. hotfix, inview 애니메이션 수정함.
3. section7 완성(애니메이션, 슬라이드 없는 간단한 구조)
4. section8 작성 진행중

#### 25/03/29

1. section8 작성 완료.
2. footer 작성 완료.
3. favicon, title 변경.

## 결산

1. 1주차 03/18~03/22(헤더, 사이드바, section1 작성완료, section2 작성 시작)
2. 2주차 03/24~03/29(section3~section8, footer 작성완료)
3. 총 12일(작업 진행한 날, 11일)

## 느낀점

클론코딩을 진행하면서 여러 이슈가 발생했고, 혼자서 코드를 작성했다면 써보지 않을 태그부터 라이브러리, css 속성들을 다양하게 쓸 수 있던 유익한 시간이었다. 다음에는 속도를 더 높여 일주일 내로 하나를 작성하는 수준에 도달했으면 좋겠다.
