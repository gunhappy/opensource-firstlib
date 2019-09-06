#!/usr/bin/env node

import program from 'commander'
import Package from '../package.json'

export function add(a: number, b: number) {
  return a + b
}

program.version(Package.version).parse(process.argv)
