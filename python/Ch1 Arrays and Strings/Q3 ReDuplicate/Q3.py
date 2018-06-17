def exp3(s1):
    s2=''
    charAt=0
    while charAt<len(s1):
        if  not s1[charAt] in list(s2):
            s2+=s1[charAt]
        charAt+=1
    print('return String is:',s2)
    return s2