# 이슈

1. tailwindcss 공식문서를 아무리 뒤져봐도 이전에 확인했던 방법, container의 사이즈 커스텀이 나오지 않았다.
2. 브라우저 사이즈를 resize하자 그정도가 작은 경우에는 문제가 없었지만, 심해지면 양옆의 슬라이드들이 삐져나왔다.
3. 클론코딩한 사이트의 font가 유료 사이트나 아니면 따로 복잡한 절차없이 라이브러리 상에서 쉽게 구할 수 있는 font라는 사실을 눈치챘다.
4. motion-framer를 이용한 inveiw 애니메이션 구현. 클론코딩 사이트에선 요소가 화면에 있음에도 애니메이션이 제자리로 돌아가게 구현되어 있었다.
5. 원본 페이지에 상대적인 속성들만 가득(h-full, fit-content)한데, 어째선지 height가 0이 아니라 자리를 제대로 차지하고 있었다.
6. 한 번의 view에 3개의 슬라이드가 보이면서 동시에 width의 style은 Swiper 컴포넌트가 임의로 지정하지 않도록 되어있었지만, 원본 페이지처럼 구현할 방법을 찾지 못했다. 무조건 width가 swiper 컴포넌트에 의해 임의적으로 지정되었다.

# 경과

1. 각종 사이트를 참고하고 찾아본 결과, 이유는 tailwind의 버전업그레이드 떄문이라는 사실을 깨달았다. 그래서 그 후 공식문서에서 확인한 후 새롭게 커스터마이징 하는 방법을 찾았다.
2. loop 옵션 종료

   1. 한참을 찾다가 loop 옵션을 끄고, resize를 시도하니까 당장의 문제는 해결됐지만 다른 문제가 생겼다.
   2. pagination의 갯수가 양옆에 슬라이드 기능을 위해 추가한 요소들만큼 늘어났다.
   3. 양옆을 absoulte로 해주는 방법, pagination의 update시에 렌더링을 시도하는 방법 등을 시도해봤으나 실패했다.
   4. virtual slide를 시험해보는 중.(실패했다. 성능향상을 위한 슬라이드)
   5. useSwiper 사용.

      - https://github.com/nolimits4web/swiper/issues/5574
      - 이전에 작성했던 코드 사용. calcBoundMove(calcBoundaryMove)

3. font를 npm으로 설치하고 공식문서 상에 적힌대로 시도해봤자 소용이 없었다.
4. 이전에 코딩에서 이용해봤던 훅과 이벤트들을 기억하고 있었지만, 그 방식대로는 소용이 없었다.

   1. 만약 isInview를 통해 코딩할 경우, 화면에 들어왔을 떄와 나갔을 때의 조건을 다르게 설정해줘야 하고 밑에서 위로 올라올 때는 애니메이션이 동작되지 않아야 하는데 세세한 조건을 설정할 수가 없다.
   2. onViewportEnter로는 RootMargin과 threshold를 자유롭게 지정할 수 없다.
   3. translateY를 쓰니 inview가 변했고, 애니메이션을 적용할 요소 그 자체의 위치를 기준으로 애니메이션을 지정하니 마치 널뛰기를 하듯이 반복적으로 위아래로 이동하는 일이 생겼다.

5. 원본 페이지에서 자식 속성과 부모 속성의 height 속성을 뒤져봤다.
6. chatgpt에도 질문하고, 공식문서도 뒤져본 끝에 slidesPerView의 "auto" 값을 찾았다.

# 해결

1. tailwind를 설정해주는 global.css 파일에서 **@theme**에 **--breakpoint-[원하는 변수명]**을 추가했다.
2. useSwiper를 이용함으로써 pagination을 좀 더 원하는대로 커스텀이 가능했다.
3. 파일탐색기로 node_modules에 존재하는 폰트의 경로를 찾고, 그 경로와 연결시켜줬다. 공식문서상에선 ./fonts/ 경로로 지정되어 있지만, linux 환경이거나 아니면 직접 font를 다운받은 경우를 고려하여 작성한 것으로 보인다.
4. IntersectionObserver와 useEffect를 조합해 조건을 각각 지정해주었다. 부모 요소를 기준으로 translateY를 지정해봤다.
5. 결과적으로 height가 문제가 아니였지만, aspect-ratio 속성을 찾아냈고 해당 속성이 height에 영향을 준다는 사실을 발견했다.
6. slidesPerView를 auto로 지정하고, slide의 width를 적절하게 지정하면 원본 페이지처럼 구현할 수 있었다.
