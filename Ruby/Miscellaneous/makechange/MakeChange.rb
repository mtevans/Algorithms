

def make_change(amount, coins = [10,7,1])
  return [] if amount == 0
  best_change = nil

  coins.each do |coin|
    next if coin > amount
    change = [coin]
    best_of_rest = make_change(amount - coin, coins)
    change += best_of_rest
    if best_change.nil? || change.count < best_change.count
      best_change = change
    end
  end

  best_change
end
make_change(14)

# easy one

# recursion
def make_change(amount, coins = [25,10,5,1])
  change = []
  first_coin = coins[0]
  count = amount / first_coin
  count.times {change << first_coin}
  amount = amount - count * first_coin
  if amount > 0
    change += make_change(amount, coins.drop(1))
  end
  change
end
make_change(99)

# part 1
def make_change(amount, coins = [25,10,5,1])
  change =[]
  coins.each do |coin|
    count = amount/coin
    count.times{change << coin}
    amount = amount - (count * coin)
  end
  p change
end
make_change(99)
