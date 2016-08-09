def shuffle(array)
  new_array = array.dup
  array.each_index do |index|
    # notice how each time it moves the number at `index` out of the
    # way so it may be sampled later.
    rand_index = index + rand(array.length - index)
    new_array[index], new_array[rand_index] =
      new_array[rand_index], new_array[index]
  end
  new_array
end


# Time complexity: O(n).
