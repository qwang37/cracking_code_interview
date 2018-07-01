def exp8(s1,s2):
    testStr=s2*2
    if len(s1)==len(s2) and testStr.find(s1):
        print('Rotation!!!')
        return True
    else:
        print('Not Rotation!')
        return False