
def bfs(target, &prc)

  prc ||= Proc.new{|node| node.value === target}
  stack = [self]

  until stack.empty?
    node = stack.shift
    return node if prc.call(node)
    stack.concat(node.children)
  end


  nil
end
