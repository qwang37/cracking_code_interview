def test4(list1,list2):

    if len(list1)<len(list2):
        for n in range(len(list1),len(list2)):
            list1.append(0)
    elif len(list1)>len(list2):
        for n in range(len(list2),len(list1)):
            list2.append(0)
    reList = [0]*(len(list1)+1)
    for i in range(1,len(list1)+1):
        reList[-i]+=list1[-i]+list2[-i]
        if reList[-i]>=10:
            reList[-i]-=10
            reList[-i-1]+=1
        print(reList)
    return reList