class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * [
     *  {
     *    dict: {},
     *    anagrams: [],
     *  }
     * ] 
     * 
     */
    groupAnagrams(strs) {
        //groups array will be iterated over for every string
        let groups = [];
        for (let str of strs) {
            let anagramExists = true; //default to true for anagram check
            console.log("Here is the string: ", str);
            console.log("Groups: ", groups)
            for (let group of groups) {
                anagramExists = true
                if (group.anagrams[0].length != str.length) {
                    console.log("Moving to next group...")
                    anagramExists = false;
                    continue;
                }
                let compareDict = {...group.dict};
                console.log(`${str} is of length`);
                console.log(`anagramExists should be true: ${anagramExists}`)
                console.log(compareDict);
                for (let char of str) {
                    console.log(compareDict[char])
                    if (compareDict[char]) {
                        compareDict[char]--;
                    } else {
                        console.log(compareDict)
                        anagramExists = false;
                        break;
                    }
                }
                console.log(anagramExists)
                if (anagramExists) {
                    group.anagrams.push(str)
                    break;
                }
            }
            if (anagramExists == false || groups.length == 0) {
                let strDict = {}
                for (let char of str) {
                    if (strDict[char]) {
                        strDict[char] += 1;
                    } else {
                        strDict[char] = 1;
                    }
                }
                groups.push({
                    dict: strDict,
                    anagrams: [str]
                })
            }
        }
        return groups.map(group => (group.anagrams))
    }
}
