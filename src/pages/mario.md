---
title: 고장났단마리오
description: 프로젝트 고장났단마리오
---

# 고장났단마리오

<iframe width="420" height="315" src="https://www.youtube.com/embed/6vx_JwwLTXQ" allowfullscreen ></iframe>

## 개요

- Hitachi-LG Data Storage 2D LiDAR 활용 경진대회
- 배관 이상 검출 목적 원격 조종 탐사로봇

## 환경

- 언어
  - C, C++
- H/W
  - 2D LiDAR(LDS-01)
  - Raspberry Pi 3B++
  - NP02D
- S/W
  - Raspbian
  - ROS/kinetic
  - OpenGL
  - WiringPi
  - lds_driver

## 구현

- 배관을 탐사할 탐사로봇 제작
- TCP/IP 소켓통신을 활용한 Server/Client 구현
- 탐사로봇 Controller 구현
- 수신된 값을 OpenGL을 통해 Mapping

## 상세

- 시스템 구성
  고장났단 마리오는 두 개의 2D LiDAR센서를 이용하여 배관을 탐색, 데이터를 서버로 전송하여 Mapping 및 원격 조종을 할 수 있도록 구현되어 있다.

- 원격조종
  TCP/IP 소켓통신으로 탐사로봇이 PC와 연결되면 탐사로봇이 보내주는 2D LiDAR(X)의 값을 확인하며 사용자가 조작, SoftPWM를 통하여 로봇의 속도를 제어하였다.

- Mapping
  탐사로봇에서 2D LiDAR(X), 2D LiDAR(Y) 값을 각 X축 Mapping, Y축 Mapping을 하여 사용자에게 제공한다.

- Server
  PC에 TCP/IP 소켓통신으로 구축, 3개의 쓰레드가 있으며, 데이터를 받는 쓰레드, 원격조종과 Mapping을 위한 쓰레드로 구성되어 있다.

- Client
  탐사로봇에 TCP/IP 소켓통신으로 구축, 2개의 쓰레드로 구성, 2D LiDAR(X), 2D LiDAR(Y) 값을 각 X축, Y축으로 하여 데이터를 받은 뒤 서버로 보내주는 쓰레드, 서버에서 명령을 받아 조종 받는 쓰레드이다.
