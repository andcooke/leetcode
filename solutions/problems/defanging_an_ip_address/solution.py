class Solution:
    def defangIPaddr(self, address: str) -> str:
        ans = ''
        for dong in address:
            if dong == '.':
                ans = ans + '[.]'
            else:
                ans = ans + dong
        return ans