#!/usr/bin/env node
import commander from 'commander'
import inquirer from 'inquirer'

export function add(a: number, b: number) {
  return a + b
}

commander.version('1.0.0')

commander
  .command('love <thing>')
  .option('-h, --hate <thing>')
  .action((thing, option) => {
    console.log(`I love ${thing}`)
    if (option.hate) {
      console.log(`I hate ${option.hate}`)
    }
  })

commander.command('ask').action(async () => {
  const answers = await inquirer.prompt([
    {
      choices: ['React', 'Vue', 'Angular'],
      message: 'What is the best framework',
      name: 'framework',
      type: 'list',
    },
  ])
  if (answers.framework === 'React') {
    console.log('Yes You are 10x Engineer')
  } else {
    console.log('Fuck you monkey')
  }
})

commander.parse(process.argv)
