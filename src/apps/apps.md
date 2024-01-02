---
layout: layouts/base.njk
title: Apps
templateClass: tmpl-page
eleventyNavigation:
  key: Apps
  order: 1
---

## iTunes Music Artwork searcher

🚀 [View online →](https://mdm-itunes-search.surge.sh/)

💻[Repo](https://github.com/MartinDM/iTunes-Artwork-Searcher)

[![Album posters](/img/album-artwork-search.png)](https://mdm-itunes-search.surge.sh/)

I recently made myself some posters of my favourite albums and needed some high quality album art to use for my designs...

![Album posters](/img/posters.jpeg)

I was able to get them via the Apple iTunes database using their API, so thought it would be a fun idea to turn it into an app.

I imagined if I had a need for searchable album artwork for creative projects, surely others might!

I started with some Figma wireframes and a spec I'd set for myself such as the entity type and sizes I wanted to make available.

Built with React and Vite with Chakra UI components.

## Resource tracker

🚀 [View online →](https://martin-asset-list.surge.sh/)

💻 [Repo →](https://github.com/MartinDM/asset-list)

[![Album posters](/img/asset-tracker.png)](https://martin-asset-list.surge.sh/)

This was a fun coding exercise to add hardware items to a list with some business rules I set myself, such as implementing unique IDs per asset, and an undo function.

The state of the list also persists between refresh using local storage.
