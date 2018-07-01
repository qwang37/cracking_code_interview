def test5(ERlist):
    i,j=0,0
    Done=False
    while not Done:
        j += 2
        i += 1
        try:
            if ERlist[i]==ERlist[j]:
                break
        except:
            return None
    j=0
    while True:
        i+=1
        j+=1
        try:
            if ERlist[i]==ERlist[j] and ERlist[i+1]==ERlist[j+1] and ERlist[i+2]==ERlist[j+2]:
                return j
        except: return j