[JA](./README.ja.md) / [EN](README.md)

# DUELGROUP official Site

**Official Site of our YouTube channel**

<a href="https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/" target="_blank" rel="noopener noreferrer">
  <img alt="pagetop" src="https://user-images.githubusercontent.com/67569270/140637534-93e5cf14-8553-4e7e-81a7-dcc09953db8c.png" />
</a>

## Environments

- Production: https://www.duelgroupch.com/
- Development: https://dev.duelgroupch.com/

## Description

このサイトはパフォーマンスを求めて Nextjs で構築しています。
News 一覧は NotionAPI（Bata）でデータを Fetch しており、Notion の DB を変更することで動的に更新することが可能です。
また、Video セクションでは YouTube Data API を使用し最新情報を表示しています。

将来的には、NotionAPI ですべてのページを構成することを目標に現在開発中です。

## Dependency

|         | Version          |
| ------- | ---------------- |
| Mac OS  | Catalina 10.15.7 |
| Node    | v16.13.0         |
| Yarn    | v3.1.1           |
| Next.js | v12.0.3          |
| React   | v17.0.2          |
| MUI     | v5.2.2           |
| Hosting | Vercel           |

## Features

- Image automatic generation - https://cloudinary.com/
- Improve the performance of Twitter embed
- Instagram embed
- Optimize Fetch Data Cache
