# 개인적으로 깨달은 점

## 코드

1.  `````html
    <div
      className="w-[30rem] h-[30rem] from-violet-600 to-white/0 bg-linear-[270deg]"
    ></div>
    ````html
    `````

## 적기

1. from은 시작하는 색
2. to는 끝나는 색
3. 기본은 top에서 bottom으로, from에서 %가 높아지면 from의 하위 부분은 gradient 효과가 없는 violet(원본색)으로 채워지고 그 이후부터 gradient 효과가 나온다.
4. to에선 gradient가 나타날 한계지점, 100%의 경우 100%까지 gradient 효과가 나오며 10%의 경우는 10%까지 나온다.
5. linear의 deg값은 그만큼 배경색의 gradient 효과를 회전시켜준다. 배경색에 한정된 rotate 효과.
