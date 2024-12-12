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

# Inserting the more elements in the list than removing the element
lst = [1, 2, 3, 4, 5, 6]
lst[0:2] = [10, 20, 30, 40, 50]
print(lst)  # Output: [10, 20, 30, 40, 50, 3, 4, 5, 6 ]

# * Inserting at the odd position
# lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# lst[::2] = [10, 20, 30]
# print(lst) #! Output: Error

#  * Correct way: When using a step in slice assignment (e.g., lst[start:end:step]), the number of elements in the slice being replaced must match the number of elements provided for the replacement.
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lst[::2] = [10, 20, 30, 40, 50]
print(lst)  # Output: [10, 2, 20, 4, 30, 6, 40, 8, 50, 10]