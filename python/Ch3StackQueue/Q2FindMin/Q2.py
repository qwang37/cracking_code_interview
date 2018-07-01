class Stack:
    def __init__(self):
        self.items = []
    # the print method is used to test random stack

    def print(self):
        print(self.items)

    def push(self, item):
        self.items.append(item)

    def pop(self):
        try:
            return self.items.pop()
        except IndexError as e:
            print('pop from empty list')
            return None

    def min(self):
        Min=self.pop()

        try:
            while True:
                cur=self.pop()
                if (cur<Min):
                    Min=cur

        except TypeError as e:
            return Min
