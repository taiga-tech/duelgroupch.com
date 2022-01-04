[JA](README.ja.md) / [EN](README.md)

# DUELGROUP official Site

**Official Site of our YouTube channel**

<a href="https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/" target="_blank" rel="noopener noreferrer">
  <img alt="siteimage" src="https://user-images.githubusercontent.com/67569270/140637534-93e5cf14-8553-4e7e-81a7-dcc09953db8c.png" />
</a>

## Environments

- Production: https://www.duelgroupch.com/
- Development: https://dev.duelgroupch.com/

## Description

This site is built with Nextjs for performance.
The News list uses the Notion API (Bata) to Fetch the data, and it can be updated dynamically by changing the Notion DB.
In addition, the Video section uses the YouTube Data API to display the latest information.

In the future, it is currently under development with the goal of configuring all pages with the Notion API.

## Dependency

|            | Version          |
| ---------- | ---------------- |
| Mac OS     | Catalina 10.15.7 |
| Node       | v16.13.0         |
| TypeScript | v4.5.4           |
| Yarn       | v3.1.1           |
| Next.js    | v12.0.3          |
| React      | v17.0.2          |
| MUI        | v5.2.2           |
| Hosting    | Vercel           |

## Features

- Image automatic generation - https://cloudinary.com/
- Improve the performance of Twitter embed
- Instagram embed
- Optimize Fetch Data Cache
