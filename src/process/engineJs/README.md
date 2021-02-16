#readme

An easy way to execute Javascript source code made up of strings.

    import { rawRun } from 'exec-engine-js'
    let exec = rawRun(strings)

example.

    import { rawRun } from 'exec-engine-js'

    let strings = "let a = 30 \n return a"
    let exec =  rawRun(strings)
    console.log(exec) // 30
    console.log(typeof exec) //number




If you have any bugs or requests, please contact us
https://github.com/imamiya-masaki/engine-js-test