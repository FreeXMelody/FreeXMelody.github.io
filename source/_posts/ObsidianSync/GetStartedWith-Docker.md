---
title: GetStartedWith-Docker
date: 2023-04-24 20:49:48
tags:
  - Docker
---

Referred [Documentation](https://docs.docker.com/get-started/)

## Let's get started!

### Container

Simply put, a container is a `sandboxed process` on your machine that is isolated from all other processes on the host machine. 

### Container Image

When running a container, it uses an `isolated filesystem`. This custom filesystem is provided by a container image. Since the image contains the container’s filesystem, `it must contain everything needed to run an application` - all dependencies, configurations, scripts, binaries, etc. The image also contains other configuration for the container, such as environment variables, a default command to run, and other metadata.

### Dockerfile

A Dockerfile is simply a `text-based file` with no file extension that contains a script of instructions. Docker uses this script to build a `container image`.

## Instructions Explanation

[FROM](https://docs.docker.com/engine/reference/builder/#from) : a valid `Dockerfile` must start with a `FROM` instruction.
