# Concatenation of list using + operator.
# By concatenation -> Original list is not changed

list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = list1 + list2
print(result)  # Output: [1, 2, 3, 4, 5, 6]

# Concatenation directly -> will result into the error -> Not allowed
# list1 = [1,2,'Divyanshu']
# result = list1 + 4; #! Error
# print(result) 

# * Solution to the Above problem of direct concatenation 
list1 = [1,2,'Divyanshu']
result = list1 + ['tyagi']
print(result)   # [1, 2, 'Divyanshu', 'tyagi']

# Using append method which is used to add single element in the add
result2 = list1.append(4)
print(result2)  # None
print(list1)    # [1, 2, 'Divyanshu', 4]

# Extend method:
list1 = [1, 2, 3] 
list2 = [4, 5, 6] 
list1.extend(list2) 
print(list1)    # Output: [1, 2, 3, 4, 5, 6]


