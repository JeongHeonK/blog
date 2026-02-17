# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # 개발 서버 (http://localhost:4321/blog/)
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
```

린트/테스트 설정 없음. 빌드 성공 여부로 검증.

## Architecture

Astro + Starlight 기반 정적 기술 블로그. GitHub Pages에 배포 (`main` push 시 자동).

- **base path**: `/blog` — 모든 내부 링크에 `/blog/` 접두사 필요
- **locale**: 한국어 단일 로케일 (`root`)
- **콘텐츠**: `src/content/docs/` 아래 MDX 파일, 디렉토리별 시리즈 분류
- **사이드바**: `astro.config.mjs`의 `sidebar`에서 `autogenerate`로 디렉토리 기반 자동 생성
- **커스텀 컴포넌트**: `src/components/ThemeSelect.astro` (아이콘 토글 방식으로 Starlight 기본 테마 셀렉터 오버라이드)
- **스타일**: `src/styles/custom.css`에서 Starlight CSS 변수 오버라이드 (색상, 폰트, 간격)
- **폰트**: Pretendard(본문) + JetBrains Mono(코드)

## Content Conventions

- 시리즈 글 파일명: `{순번}-{slug}.mdx` (예: `01-composition.mdx`)
- 메인 페이지(`src/content/docs/index.mdx`)에서 `LinkCard` 컴포넌트로 각 시리즈 첫 글 링크
- 새 시리즈 추가 시 `astro.config.mjs`의 `sidebar` 배열에도 항목 추가 필요
