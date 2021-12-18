class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        # declare a variable x and set it to 0
        x = 0
        # iterate over the input operations
        for i in operations:
            # if we see ++x or x++
            if i == '++X' or i == 'X++':
                # increase x by 1
                x = x + 1
            # else if we see --x or x--
            elif i == '--X' or i == 'X--':
                # decrease x by 1
                x = x - 1
            else:
                x = x
        return x