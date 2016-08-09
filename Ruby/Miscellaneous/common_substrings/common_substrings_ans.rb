# This runs in O(m * n**2) time.

def common_substrings(str1, str2)
  longest_substring = ""

  start_idx = 0
  while start_idx < str1.length
    # don't consider substrings that would be too short to beat
    # current max.
    len = longest_substring.length + 1

    while (start_idx + len) <= str1.length
      end_idx = start_idx + len
      substring = str1[start_idx...end_idx]
      longest_substring = substring if str2.include?(substring)

      len += 1
    end

    start_idx += 1
  end

  longest_substring
end
