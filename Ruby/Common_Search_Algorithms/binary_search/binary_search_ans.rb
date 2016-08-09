def bsearch(array, target)
  return nil if array.empty?
  split_idx = array.length / 2
    case target <=> array[split_idx]
    when -1
      bsearch(array.take(split_idx), target)
    when 0
      split_idx
    when 1
      right = bsearch(array.drop(split_idx + 1), target)
      (right.nil?) ? nil : right + split_idx + 1
    end
end


puts bsearch([1, 2, 3], 1) # => 0
puts bsearch([2, 3, 4, 5], 3) # => 1
puts bsearch([2, 4, 6, 8, 10], 6) # => 2
puts bsearch([1, 3, 4, 5, 9], 5) # => 3
puts bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
puts bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
puts bsearch([1, 2, 3, 4, 5, 7], 6) # => n
