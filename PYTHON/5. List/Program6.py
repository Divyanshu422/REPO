# In Python, the replication operator is represented by the asterisk (*). It is used to create a new list that repeats the elements of an existing list a specified number of times.

my_list = [1, 2, 3]

# Replicate the list 3 times
replicated_list = my_list * 3
print(replicated_list)  # Output: [1, 2, 3, 1, 2, 3, 1, 2, 3]

# Note -> the multiplication factor need to integer not the float
# replicated_list = my_list * 2.5 # ! Error 

