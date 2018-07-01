def exp7(M,N):
    import random
    matrix = [[random.randint(0,10) for i in range(M)] for j in range(N)]
    Cmatrix=matrix[:]
    print(matrix)
    for j in range(N):
        for i in range(M):
             if Cmatrix[j][i]==0:
                 matrix[j]=[0]*M
                 for k in range(N): matrix[k][i]=0
    print(matrix)