# Hello World for Docker in Node.js

This is a simple Docker container, to test a Node.js webserver in a Docker environment.

## Usage

```bash
$ docker run --network host weejewel/hello-world-node
$ docker run -p 3000:3000 weejewel/hello-world-node
$ docker run -p 3001:3000 weejewel/hello-world-node
$ docker run -p 3000:4000 -e PORT=4000 weejewel/hello-world-node
```

## Environment Variables

| Variable | Description                | Default |
|----------|----------------------------|---------|
| `PORT`   | Port the server listens on | `3000`  |