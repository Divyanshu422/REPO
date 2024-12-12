# in operator

text = "Hello, world!"
print("world" in text)  # Output: True
print("Python" in text)  # Output: False

# not in operator

my_list = [1, 2, 3, 4]
print(5 not in my_list)  # Output: True
print(3 not in my_list)  # Output: False

# Using in conditional statement

my_list = [1, 2, 3, 'Divyanshu']

if 'Divyanshu' in my_list:
    print('the result is present')
else:    
    print('result is absent')