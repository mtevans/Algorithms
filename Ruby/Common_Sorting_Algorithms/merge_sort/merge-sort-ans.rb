class Array
  def merge_sort(&prc)
    return self if self.length == 1
    return nil if self.empty?
    split_idx = self.length / 2
    left = self.take(split_idx).merge_sort(&prc)
    right = self.drop(split_idx).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private

  def self.merge(left, right, &prc)
    prc||= Proc.new {|x,y| x<=>y }
    answer = []
    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        answer << left.shift
      when 0
        answer << left.shift
      when 1
        answer << right.shift
      end
    end
    answer
  end
end
