## Marvel Snap (Mobile)

## Marvel Snap 게임의 카드 정보를 확인하고 덱을 만들어 볼 수 있는 서비스

#### 소요기간 2023.02.07 -> 2023.02.21 (2주)

### Update

```
- 덱생성 페이지 가상의 카드덱이 10개 모두 찼을 경우 안내메세지 출력
- 덱생성 페이지 카드를 클릭하면 가상의 덱에 채워지고 그레이 스케일로 추가됨을 보여줌
- 덱생성 페이지 카드 추가할때마다 로컬 스토리지에 저장해서 다음에 들어왔을때 동기화 완료
```

> 공식적으로 지원해주는 API가 개발중이므로 임의로 데이터를 만들어서 진행하였고 추후에 API 지원되면 카드를 늘릴 계획입니다!

### Deployment Vercel: https://marvel-vert-nine.vercel.app/chlist

### 실행 방법

```
$ npm i && npm start
```

### Technology

- React
- TypeScript
- CSS
  - StyledComponents

#### 반응형

```
- Mobile (Iphone 13 pro 기준)
```

### 구현

- 오픈 API가 없어 데이터를 임의로 생성
- 카드 이름으로 검색
- 카드 상세보기 페이지에 카드 정보 확인
- 가상 카드 덱 생성 기능
- 가상 카드덱을 로컬 스토리지에 저장하여 동기화

#### 초기 화면

<img src="https://user-images.githubusercontent.com/96061695/230086414-d7aa05af-d2f5-4aaa-abca-139fae015088.jpg" width="300px" />

#### 카드 상세보기

<img src="https://user-images.githubusercontent.com/96061695/230086557-90810a76-af0a-4768-a16b-c0497667f887.jpg" width="300px" />

#### 카드 검색

<img src="https://user-images.githubusercontent.com/96061695/230086746-26265c61-2f50-4df0-b924-bae7a98d2c6b.jpg" width="300px" />

#### 가상 덱생성 페이지

<img src="https://user-images.githubusercontent.com/96061695/230086967-f207f5c2-bd4c-441f-909c-944ae89aef77.jpg" width="300px" />

#### 가상 덱생성

<img src="https://user-images.githubusercontent.com/96061695/230087537-4f43b8e7-0784-4d51-a6ec-39b6def2b553.jpg" width="300px" />
