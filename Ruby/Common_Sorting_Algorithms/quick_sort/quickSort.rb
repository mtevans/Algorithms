def quicksort(array)
  return [] if array.length == 0
  right = []
  left = []
  pivot = array[0]
  i = 1
  
  while i < array.length
    if array[i] < pivot
      left.push(array[i])
    else
      right.push(array[i])
    end
    i += 1
  end
  sorted_left = quicksort(left)
  sorted_right = quicksort(right)

  return sorted_left + [pivot] + sorted_right

end

p quicksort([5,2,7,9,4])
