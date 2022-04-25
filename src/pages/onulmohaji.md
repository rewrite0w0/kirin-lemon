---
title: 오늘뭐하지?
description: 오늘뭐하지?
---

# 오늘뭐하지?

## 개요

<!-- 이미지 -->

<!-- [![image](/img/onulmohaji.png)](https://play.google.com/store/apps/details?id=com.react_native_todo_list) -->

메모장 애플리케이션

## 환경

- 언어
  - JavaScript
- 라이브러리
  - React Native
  - @react-native-async-storage/async-storage
  - uuid

## 구현

- 입력을 받아, 정보를 uuid로 id 부여, react-native-async-storage에 저장
- FlatList로 렌더링
- ALL, ACTIVE, DONE 버튼으로 전체목록, 활성목록, 종료목록 확인
- ALL은 활성 -> 종료, 그리고 수정 시간으로 정렬
- ACTIVE, DONE은 활성, 종료로 구성 및 수정 시간으로 정렬
- 가벼운 터치로 ACTIVE / DONE 상태 변경
- 긴 터치로 메모 내용 수정, 삭제 모달창 불러오기
