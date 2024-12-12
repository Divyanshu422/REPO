#   Modifying the content of list using the slice Operator

# Original list
my_list = [0, 1, 2, 3, 4, 5]

# Replace elements at index 2 to 4 with [20, 30, 40]
my_list[2:5] = [20, 30, 40]
print(my_list)  # Output: [0, 1, 20, 30, 40, 5]


# Insert elements at index 2 -> insert elements into the list by specifying a slice with the same start and end index.
my_list[2:2] = [10, 11, 12]
print(my_list)  # Output: [0, 1, 10, 11, 12, 20, 30, 40, 5]


# Reversing the list in place:lst = [1, 2, 3, 4, 5, 6]
lst = [1, 2, 3, 4, 5, 6]
lst[:] = lst[::-1]  # Reverse the list
print(lst)  # Output: [6, 5, 4, 3, 2, 1]

# Clearing the list
lst = [1, 2, 3, 4, 5, 6]
lst[:] = []  # Clear all elements
print(lst)  # Output: []

# Replacing the entire list:
lst = [1, 2, 3, 4, 5, 6]
lst[:] = [7, 8, 9]  # Replace all elements
print(lst)  # Output: [7, 8, 9]

#  Inserting the element at a particular index in the list using the slice
lst = [1, 2, 3, 4, 5, 6]
lst[2:2] = [7, 8]  # Insert at index 2
print(lst)  # Output: [1, 2, 7, 8, 3, 4, 5, 6]
