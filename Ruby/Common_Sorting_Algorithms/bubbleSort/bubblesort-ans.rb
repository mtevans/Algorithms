def bubbleSort(array)
sorted = false

while !sorted
  sorted = true

  i = 0
  while i < array.length - 1
    if array[i] > array[i + 1]
      hold = array[i]
      array[i] = array[i + 1]
      array[i + 1] = hold
      sorted = false
    end
    i += 1
  end
end

return array

end


p bubbleSort([4,2,5,6,1])
