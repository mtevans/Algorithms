

def bfs(target = nil, &prc)
  raise "Need a proc or target" if [target, prc].none?
  prc ||= Proc.new { |node| node.value == target }

  nodes = [self]
  until nodes.empty?
    node = nodes.shift

    return node if prc.call(node)
    nodes.concat(node.children)
  end

  nil
end
