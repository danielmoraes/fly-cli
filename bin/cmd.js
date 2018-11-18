#!/usr/bin/env node
'use strict'

const minimist = require('minimist')
const { findLowestFares } = require('@danielmoraes/fly')

const argv = minimist(process.argv.slice(2))

const command = argv._[0]

if (command === 'help' || argv.help) {
  help()
} else if (['search'].indexOf(command) === -1) {
  help()
} else if (command === 'version' || argv.version) {
  version()
} else if (command === 'search') {
  if (argv._.length !== 4) {
    help()
  } else {
    const origin = argv._[1]
    const destination = argv._[2]
    const date = argv._[3]
    search(origin, destination, date)
  }
}

function version () {
  console.log(
    require('../package.json').version +
    ' (' + require('fly/package.json').version + ')'
  )
}

function help () {
  console.log(function () {
  /*
Usage:
    fly-cli [command] <options>
Example:
    fly-cli search sao rio 2019-01-01
Commands:
    search <origin> <destination> <date>  Find the lowest fares by source
  */
  }.toString().split(/\n/).slice(2, -2).join('\n'))
}

async function search (origin, destination, date) {
  try {
    const lowestFares = await findLowestFares(origin, destination, date)
    console.log(lowestFares)
  } catch (e) {
    console.log(e.message)
  }
}
