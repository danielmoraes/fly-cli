<h1 align="center">
  <br>
  <img src="https://dmoraes.org/fly.png" alt="fly-cli" width="200"></a>
  <br>
  Fly CLI
  <br>
  <br>
</h1>

<h4 align="center">Airfare search engine for the command line.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@danielmoraes/fly-cli"><img src="https://img.shields.io/npm/v/@danielmoraes/fly.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@danielmoraes/fly-cli"><img src="https://img.shields.io/npm/dm/@danielmoraes/fly.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<br>

### Install

To install a `fly`
[command line app](https://github.com/danielmoraes/fly-cli), run:

```bash
npm install @danielmoraes/fly-cli -g
```

### Usage

```bash
$ fly-cli
Usage:
    fly [command] <options>
Example:
    fly search sao rio 2019-01-01
Commands:
    search <origin> <destination> <date>  Find the lowest fares by source
```

To make a query:

```bash
$ fly-cli search sao rio 2019-01-01
{ sources:
   [ { sourceName: 'Avianca', lowestFare: 169 },
     { sourceName: 'Azul', lowestFare: 187.1 },
     { sourceName: 'Gol', lowestFare: 175.17 },
     { sourceName: 'Latam', lowestFare: 195.84 } ],
  lowestFare: 169 }
```

### License

MIT. Copyright (c) [Daniel Moraes](https://dmoraes.org).
