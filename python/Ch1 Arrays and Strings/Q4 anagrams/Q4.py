def exp4(s1,s2):
    if not len(s1)==len(s2):
        print('not Anagrams!')
        return False
    elif all(sorted(list(s1))[i]==sorted(list(s2))[i] for i in range(len(s1))):
        print('Anagrams!')
        return True
    else:
        print('not Anagrams!')
        return False