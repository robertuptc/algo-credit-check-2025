def credit_check(str):
    reversed_list = reversed(list(str))
    is_valid = times_two(reversed_list)
    
    return 'The number is valid!' if is_valid else 'The number is invalid!'

def times_two(r_list):
    new_arr = []
    count = 0
    
    for i, n in enumerate(r_list):
        if i % 2 == 0:
            new_arr.append(int(n))
            count += int(n)
        else:
            if int(n) * 2 > 9:
                list_of_digits = list(str(int(n) * 2))
                digit_one = int(list_of_digits[0]) 
                digit_two = int(list_of_digits[1])
                new_arr.append(digit_one + digit_two )
                count += (digit_one + digit_two)
            else:
                new_arr.append(int(n) * 2)
                count += int(n) * 2
    return count % 10 == 0
