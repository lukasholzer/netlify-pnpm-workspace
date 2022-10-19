# This is a sample mono repository built with pnpm workspaces

- `packages/astro-blog` contains a blog built with astro

  The blog consists of static pages
  Deployed here: https://app.netlify.com/sites/pnpm-workspaces-astro-blog/overview

- `packages/nextjs-website` contains a website built with next.js

  The website is a server-side rendered page
  Deployed here: https://app.netlify.com/sites/pnpm-workspaces-nextjs-website/overview

- `packages/components` contains shared react components for both websites

## How this repo was created:

1. Run `pnpm init`
2. Create a `pnpm-workspace.yaml`

   With the following content:

   ```yaml
   packages:
     - packages/*
   ```

3. Create the Astro blog
   1. Run `mkdir packages && cd packages`
   2. Run `pnpm create astro@latest`
      1. name the site `astro-blog`
      2. choose the blog template
   3. move in the directory `cd astro-blog`
   4. Add missing peer dependency `pnpm add -D rollup`
4. Create the Next.js website
   1. Go to the `packages` folder
   2. Run `pnpm create next-app --typescript`
