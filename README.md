# Project Name

> Project description

## Related Projects

  - https://github.com/team419/photo-gallery-module
  - https://github.com/team419/comments-module
  - https://github.com/team419/reservations-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- React 16.8.6
- Express 4.16.4
- Body Parser 1.19.0
- MySQL 5.7.25

## Development

### Installing Dependencies

From within the root directory:

```sh
brew install mysql@5.7
npm install -g webpack
npm install
mysql.server start
mysql -u root < schema.sql
```
In a new terminal window
```
npm run seed
npm run react-dev
```
In another new terminal window
```
npm start
```
Navigate to localhost:3418 to run component

