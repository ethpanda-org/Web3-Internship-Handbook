# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Web3 Internship Handbook** documentation site built with VuePress 2.x and the Plume theme. The project is a collaborative educational resource created by ETHPanda and LXDAO to help newcomers enter the Web3 industry through comprehensive learning materials, career guidance, and practical knowledge.

## Development Commands

```bash
# Start development server
npm run docs:dev

# Start development server with clean cache
npm run docs:dev-clean

# Build for production with clean cache
npm run docs:build

# Preview built site locally
npm run docs:preview

# Update VuePress
npm run vp-update
```

## Architecture & Structure

### Core Configuration Files
- `docs/.vuepress/config.ts` - Main VuePress configuration with bundler and theme setup
- `docs/.vuepress/plume.config.ts` - Plume theme configuration importing navbar and notes
- `docs/.vuepress/navbar.ts` - Navigation bar configuration for zh/en locales
- `docs/.vuepress/notes.ts` - Main content structure and sidebar configuration

### Content Organization
The handbook is structured in 5 main parts:

1. **入门导读** (`/part1/`) - Introduction to blockchain, Ethereum, industry knowledge, work habits
2. **Web3 行业知识** (`/part2/`) - Position types, smart contract internship, community operations, security
3. **行业前辈访谈录** (`/part3/`) - Industry expert interviews (Logic, Jason, Julie)
4. **面试准备与行业岗位推荐** (`/part4/`) - Resume writing, interview prep, job platforms
5. **附录** (`/part5/`) - Glossary, resources, FAQ, tools

### Internationalization
- Primary language: Chinese (`/`)
- Secondary language: English (`/en/`)
- Locale-specific navbar and notes configurations

### Deployment
- GitHub Actions workflow deploys to GitHub Pages on pushes to `main` branch
- Build artifacts stored in `docs/.vuepress/dist/`
- Base URL configured as `/Web3-Internship-Handbook/`

## Key Features
- Bilingual support (Chinese/English)
- VuePress Plume theme with customizations
- Mermaid diagrams and flowcharts enabled
- Dark mode support
- Local search functionality
- PDF embedding support
- Custom Vue components in `docs/.vuepress/theme/components/`

## Development Notes
- Node.js ^20.6.0 || >=22.0.0 required
- Uses ES modules (`"type": "module"`)
- Sass preprocessing enabled
- TypeScript support included
- Changes to `.vuepress/config.ts` restart dev server, changes to `plume.config.ts` hot reload

## Content Guidelines
- Markdown files use frontmatter for metadata
- Images stored in `docs/web3-handbook/images/` with organized subdirectories
- Navigation structure defined in `notes.ts` controls sidebar generation
- Custom components available for enhanced formatting