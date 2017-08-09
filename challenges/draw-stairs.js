function DrawStairs(count = 0, space = "     ", ast = "*"){
  if(count === 6){return;}
  space = count === 0 ? space : space.slice(count)
  ast = count === 0 ? ast : ast + "*"
  console.log(space + ast)
  count++
  DrawStairs(count,space,ast)
}
DrawStairs()