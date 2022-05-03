# Python program to rename all file
# names in your directory
import os
import sys

img = "impressionisme"
absolutepath = os.path.abspath(__file__)

fileDirectory = os.path.dirname(absolutepath)
racine = os.path.dirname(fileDirectory)

#Navigate to Strings directory
newPath = os.path.join(fileDirectory, img + "/")   
os.chdir(newPath)

number_file = len(os.listdir())

#70% d'apprentissage
index_min_app = 0
index_max_app = int(number_file*0.70)

#15% de validation
index_min_val = index_max_app +1
index_max_val = int(number_file*0.15) + index_min_val 

#15% de test
index_min_test = index_max_val +1
index_max_test = int(number_file*0.15) + index_min_test
nb = 0
for count, f in enumerate(os.listdir()):

    #Name of the file
    f_name, f_ext = os.path.splitext(f)
    name,num_str = f_name.split(".")
    num = int(num_str)
    f_name = f_name + f_ext

    #Move the file
    if(0 <= num <= index_max_app ) :
        os.rename(f, racine+"/apprentissage/" + f_name)

    elif(index_min_test <= num <= index_max_test):
        os.rename(f, racine+"/test/" + f_name)
    
    elif(index_min_val<= num <= index_max_val):
        os.rename(f, racine+"/validation/" + f_name)
    else:
        pass
    
