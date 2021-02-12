import { getScript, execScript, isBool } from './execScript'
let global = {}
class Global {
  constructor () {
    this.global = {}
  }
  valueSet (name, arg) {
    this[name] = arg
  }
  funcSet (name, mainText) {

  }
}
class Engine {
  // いずれ関数受け渡しも実装したいため
  // 現状は関数受け渡しは不可能
  constructor(mainText, ...args) {
    this.mainText = mainText
    this.babelText = this.babelParse(mainText)
  }
  set preLocal (local) {
    this.preLocal = local
  }
  babelParse (text) {
    return babelAST(text)
  }
  run (...args) {
    return getScript(this.babelText, args, this.preLocal)
  }
  execRun (...args) {
    return execScript(this.babelText, args, this.preLocal)
  }
}
function globalClear () {
  this.global = {}
}
function engineRun (mainText, ...args) {
  return (new Engine(mainText).run(...args))
}
function rawRun (mainText) {
  let header = 'function rawRun () {'
  let footer = '}'

  return (new Engine(header + mainText + footer).run())
}
function babelAST (script) {
  // これそのまま移植しているからengineJsで動くかどうかは不明
  const { parse } = require('@babel/parser') 
  const ast = parse(script)
  if (ast && ast.program && ast.program.body && ast.program.body[0]) {
    // 一行解析
    return ast.program.body[0]
  }
}

export { engineRun, rawRun, global }


