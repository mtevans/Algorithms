def digital_root(num)
  while num >= 10
    num = digital_root_step(num)
  end

  num
end

def digital_root_step(num)
  root = 0
  while num > 0
    root += (num % 10)

    num /= 10
  end

  root
end

#recursive solution

def digital_root_recur num
  return num if num < 10
  digital_root_recur((num % 10) + (num / 10))
end
