# 이슈

1. tailwindcss 공식문서를 아무리 뒤져봐도 이전에 확인했던 방법, container의 사이즈 커스텀이 나오지 않았다.
2. 브라우저 사이즈를 resize하자 그정도가 작은 경우에는 문제가 없었지만, 심해지면 양옆의 슬라이드들이 삐져나왔다.

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

# 해결

1. tailwind를 설정해주는 global.css 파일에서 **@theme**에 **--breakpoint-[원하는 변수명]**을 추가했다.
2. useSwiper를 이용함으로써 pagination을 좀 더 원하는대로 커스텀이 가능했다.
