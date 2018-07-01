def exp1(s1):
    keyEnt=sorted(list(s1))
    if all(keyEnt[i]!=keyEnt[i+1] for i in range(len(keyEnt)-1)):
        print('Unique')
    else:
        print('Not unique!!')