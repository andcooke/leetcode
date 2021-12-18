class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        # Inputs : a grid representing the wealth of customers
        # Outputs: the greatest sum of wealth of the richest customer
        # Constraints : none
        # Edge cases :  
        ans = 0
        for i in accounts:
            customer = i
            currentWealth = 0
            for j in customer:
                currentWealth = currentWealth + j
                if currentWealth > ans:
                    ans = currentWealth
                
        return ans
        