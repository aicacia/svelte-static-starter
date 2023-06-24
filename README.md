# aicacia static starter

## Tools

- [tailwind css](https://tailwindcss.com/docs)
- [svelte kit](https://kit.svelte.dev/docs)
- [icons](https://lucide.dev/icons)

## Docker

- build docker image `docker build -t static-starter:0.1.0-alpine-3.18 .`
- `docker run --restart unless-stopped --name streams-ui -d -p 5173:80 static-starter:0.1.0-alpine-3.18`
