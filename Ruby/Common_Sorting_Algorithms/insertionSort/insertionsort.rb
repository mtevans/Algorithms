def insertionSort(arr)
  i = 0
  while i < arr.length
    keepGoing = true
    j = i - 1
    while j >= 0 && keepGoing
      item = arr[j + 1]
      if item >= arr[j]
        keepGoing = false
      end
      if item < arr[j]
        arr[j + 1] = arr[j]
        arr[j] = item
      end
      j -= 1
    end

    i += 1
  end
  arr
end


p insertionSort([5,1,9,6,3,45,7])
