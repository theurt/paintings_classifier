# Python program to rename all file
# names in your directory
import os
 

for count, f in enumerate(os.listdir()):
    f_name, f_ext = os.path.splitext(f)
    f_name = "surrealisme." + str(count)
 
    new_name = f'{f_name}{f_ext}'
    os.rename(f, new_name)