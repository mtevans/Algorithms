
def bfs(target, &prc)

  prc ||= Proc.new{|node| node.value === target}
  nodes = [self]

  until nodes.empty?
    node = nodes.shift
    return node if prc.call(node)
    nodes.concat(node.children)
  end


  nil
end
