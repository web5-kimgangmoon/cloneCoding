# 개인적으로 깨달은 점

## 코드

1.  ````html
    <div
      className="w-[30rem] h-[30rem] from-violet-600 to-white/0 bg-linear-[270deg]"
    ></div>
    ```html
    ````

2.  tailwind css가 v4 버전으로 들어서면서, container center 옵션 등 많은 옵션이 사라지고, tailwindcss를 import한 css 파일에서 직접 수정하도록 변경되었다. @utility container(공식문서에서 직접 찾음)[https://tailwindcss.com/docs/upgrade-guide#container-configuration]
3.  css shadow

```css
.test {
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}
```

## 적기

1. 1번째

   1. from은 시작하는 색
   2. to는 끝나는 색
   3. 기본은 top에서 bottom으로, from에서 %가 높아지면 from의 하위 부분은 gradient 효과가 없는 violet(원본색)으로 채워지고 그 이후부터 gradient 효과가 나온다.
   4. to에선 gradient가 나타날 한계지점, 100%의 경우 100%까지 gradient 효과가 나오며 10%의 경우는 10%까지 나온다.
   5. linear의 deg값은 그만큼 배경색의 gradient 효과를 회전시켜준다. 배경색에 한정된 rotate 효과.

2. 3번쨰

   1. 기본 box-shadow

   1. 첫번째 두번쨰 매개변수, shadow를 놓을 요소를 기준으로 right 이동, bottom 이동.
   1. 세번째 매개변수, shadow의 blur
   1. 네번째 매개변수, shodow의 너비와 높이 증가. 왼쪽과 위쪽으로.
   1. 색깔은 그림자의 색
   1. 콤마를 찍고 여러개의 shadow 지정가능.

   1. inset 옵션: 반전. 예를 들어 요소의 아래쪽에 생긴 그림자의 높이만큼이 요소 안쪽의 위쪽에 생기며, 요소의 오른쪽에 생긴 그림자의 너비만큼이 요소 왼쪽에 생긴다.
