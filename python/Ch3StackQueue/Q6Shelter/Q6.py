class shelter:
    def __init__(self):
        self.dog=[]
        self.cat=[]
    def enQueue(self,item):
        if item=='dog'
            self.dog.insert(0,item)
        else:
            self.cat.insert(0,item)

    def dequeueAny(self):
        if self.dog[len(self.dog)-1]>self.cat[len(self.cat)-1]:
            return  self.dog.pop()
        else:return self.cat.pop()
    def deQueueCat(self):
        return self.cat.pop()
    def deQueueDog(self):
        return self.dog.pop()
    