
def dfs(target, &prc)

  prc ||= Proc.new{|node| node.value === target}
  return self if prc.call(self)
  children.each do |child|
    result = child.dfs(target, &prc)
    return result unless result.nil?
  end
  nil
end
