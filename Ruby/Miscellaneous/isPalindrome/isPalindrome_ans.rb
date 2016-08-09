# This solution takes less time and memory than rebuilding the string backward and
# comparing the two

def isPalindrome?(string)
  length = string.length - 1
   0.upto(string.length - 1) do |i|
     if string[i] != string[length - i]
       return false
     end
  end
  return true
end

#boring answer
def isPalindrome?(string)
  self == self.reverse
end
