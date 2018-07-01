def test1(list1):
    done = False
    i,j = 0,1
    while not done:
        if j >= len(list1):
            i += 1
            j = i+1
        if i >= len(list1)-1:
            return list1
        if list1[i] == list1[j]:
            del list1[j]
        else:
            j += 1