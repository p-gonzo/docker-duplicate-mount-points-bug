# Docker [BUG]: `Duplicate mount points`

## Background:

- We are developing a white-labeled application that uses Docker Compose to switch between static assets.
- We have a separate .yml file per-application to do the asset linking

## Usage (On Docker 2.0.0.3 on OSX):

- Running `docker-compose -f docker-compose-one.yml up` in the root of this directory
     - Outputs `Hello Assets One!` at `http://localhost:3000`

- Running `docker-compose -f docker-compose-two.yml up` in the root of this directory
     - Outputs `Hello Assets Two!` at `http://localhost:3000`

## Bug in latest version of Docker (After upgrading to 2.1.0.0):
- Running `docker-compose -f docker-compose-one.yml up` in the root of this directory produces the error:
    ```bash
    ERROR: Duplicate mount points: [/usr/src/app/web/static, /Users/phil/Desktop/docker-duplicate-mount-points-bug/web/assets_two:/usr/src/app/web/static:rw]
    ```
- Running `docker-compose -f docker-compose-one.yml up` in the root of this directory produces the error:
    ```bash
        ERROR: Duplicate mount points: [/usr/src/app/web/static, /Users/phil/Desktop/docker-duplicate-mount-points-bug/web/assets_two:/usr/src/app/web/static:rw]
    ```

## Notable Upgrades between 2.0.0.3 and 2.1.0.0:
- Docker 19.03.1
- Docker Compose 1.24.1
- Kubernetes 1.14.3
- Compose on Kubernetes 0.4.23
- Docker Machine 0.16.1
- linuxkit v0.7
- Linux Kernel 4.9.184
- Kitematic 0.17.6
- Qemu 4.0.0 for cross compiling for ARM
- Alpine 3.10
- Docker Credential Helpers 0.6.3
