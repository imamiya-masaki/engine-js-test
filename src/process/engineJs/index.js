
import { getScript, execScript, isBool } from './execScript'
let global = {}
class Engine {
  // いずれ関数受け渡しも実装したいため
  // 現状は関数受け渡しは不可能
  constructor(mainText, ...args) {
    this.mainText = mainText
    this.babelText = this.babelText(mainText)
    this.args = []
    if (args) {
      this.args = args
    }
  }
  get mainText () {
    return this.mainText
  }
  get args () {
    return this.args
  }
  set preLocal (local) {
    this.preLocal = local
  }
  babelParse (text) {
    return babelAST(text)
  }
  run () {
    return getScript(this.babelText, this.args, this.local)
  }
  execRun () {
    return execScript(this.babelText, this.args, this.local)
  }
}
function globalClear () {
  this.global = {}
}
function engineRun (mainText, ...args) {
  return (new Engine(mainText, ...args).run())
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


