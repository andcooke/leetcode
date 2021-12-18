class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            second = i + 1
            for j in range(second, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]