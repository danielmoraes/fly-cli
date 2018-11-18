<h1 align="center">
  <img src="https://dmoraes.org/fly.png" alt="fly-cli" width="150"></a>
  <br>
  Fly CLI
  <br>
  <br>
</h1>

<h4 align="center">Airfare search engine for the command line.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@danielmoraes/fly-cli"><img src="https://img.shields.io/npm/v/@danielmoraes/fly-cli.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@danielmoraes/fly-cli"><img src="https://img.shields.io/npm/dm/@danielmoraes/fly-cli.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<br>

To use Fly from Node.js, see [fly](https://github.com/danielmoraes/fly).

### Install

To install a `fly-cli` command line app, run:

```bash
npm install @danielmoraes/fly-cli -g
```

### Usage

```bash
$ fly-cli
Usage:
    fly-cli [command] <options>
Example:
    fly-cli search sao rio 2019-01-01
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
