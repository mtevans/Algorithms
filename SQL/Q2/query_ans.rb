# q1

SELECT
  COUNT(*)
FROM
  users;

User.count

# q2

SELECT
  COUNT(*)
FROM
  users
WHERE
  users.active = true;

User.where(:active => "TRUE").count

# q3

SELECT
  COUNT(*)
FROM
  users
WHERE
  users.last_login BETWEEN :time_period_start AND :time_period_end ;

User.where(last_login: (time_period_start..time_period_end)).count
