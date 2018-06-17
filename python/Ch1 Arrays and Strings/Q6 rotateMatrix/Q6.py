def exp6(intN):
    import random
    matrix=[[random.randint(1,10) for i in range(intN)] for j in range(intN)]
    print(matrix)
    returnMat=[[matrix[j][i] for j in range(intN)] for i in range(intN)]
    print(returnMat)
    return returnMat