class SetOfStacks():
    def __init__(self):
        self.items = [[]]
    def push(self,item):
        stackNum=0
        done=False
        while not done:
            try:
                if len(self.items)==stackNum:
                    self.items.append([])
                self.items[stackNum].append(item)
            except IndexError as e:
                stackNum+=1
            else: done=True
    def pop(self):
        stackNum = len(self.items)-1
        done = False
        while not done:
            try:
                if stackNum<=-1:
                    done=True
                self.items[stackNum].pop()
            except IndexError as e:
                self.items.pop()
                stackNum-=1
