class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        ans = []
        total = 0
        for iteration in nums:
            total += iteration
            ans.append (total)
        
        return ans                
            