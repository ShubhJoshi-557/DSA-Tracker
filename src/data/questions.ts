export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: number;
  name: string;
  difficulty: Difficulty;
  topic: string;
  subtopic?: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  notes?: string;
}

export interface Topic {
  name: string;
  icon: string;
  color: string;
  questions: Question[];
}

// Question difficulty assignments based on LeetCode/GFG ratings
// Organized by topic with concepts building upon each other

export const topics: Topic[] = [
  {
    name: "Sorting",
    icon: "📊",
    color: "#FF6B6B",
    questions: [
      { id: 1, name: "Bubble Sort", difficulty: "easy", topic: "Sorting", subtopic: "Basic Sorts" },
      { id: 2, name: "Insertion Sort Algorithm", difficulty: "easy", topic: "Sorting", subtopic: "Basic Sorts" },
      { id: 3, name: "Selection Sort Algorithm", difficulty: "easy", topic: "Sorting", subtopic: "Basic Sorts" },
      { id: 4, name: "Counting Sort", difficulty: "easy", topic: "Sorting", subtopic: "Non-Comparison Sorts" },
      { id: 5, name: "Radix Sort", difficulty: "medium", topic: "Sorting", subtopic: "Non-Comparison Sorts" },
      { id: 6, name: "Bucket Sort", difficulty: "medium", topic: "Sorting", subtopic: "Non-Comparison Sorts" },
      { id: 7, name: "Merge Sort", difficulty: "medium", topic: "Sorting", subtopic: "Divide & Conquer" },
      { id: 8, name: "Quick Sort", difficulty: "medium", topic: "Sorting", subtopic: "Divide & Conquer" },
      { id: 9, name: "Sort an Array", difficulty: "medium", topic: "Sorting", subtopic: "Implementation", leetcodeUrl: "https://leetcode.com/problems/sort-an-array/" },
      { id: 10, name: "Custom Sort String", difficulty: "medium", topic: "Sorting", subtopic: "Custom Comparator", leetcodeUrl: "https://leetcode.com/problems/custom-sort-string/" },
      { id: 11, name: "Largest Number", difficulty: "medium", topic: "Sorting", subtopic: "Custom Comparator", leetcodeUrl: "https://leetcode.com/problems/largest-number/" },
      { id: 12, name: "Count Inversions", difficulty: "medium", topic: "Sorting", subtopic: "Merge Sort Application", gfgUrl: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1" },
      { id: 13, name: "Count of Smaller Numbers After Self", difficulty: "hard", topic: "Sorting", subtopic: "Merge Sort Application", leetcodeUrl: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { id: 14, name: "Reverse Pairs", difficulty: "hard", topic: "Sorting", subtopic: "Merge Sort Application", leetcodeUrl: "https://leetcode.com/problems/reverse-pairs/" },
      { id: 15, name: "Create Sorted Array through Instructions", difficulty: "hard", topic: "Sorting", subtopic: "Merge Sort Application", leetcodeUrl: "https://leetcode.com/problems/create-sorted-array-through-instructions/" },
      { id: 16, name: "First Missing Positive", difficulty: "hard", topic: "Sorting", subtopic: "Cyclic Sort", leetcodeUrl: "https://leetcode.com/problems/first-missing-positive/" },
    ]
  },
  {
    name: "Two Pointers",
    icon: "👆",
    color: "#4ECDC4",
    questions: [
      { id: 17, name: "Remove Element", difficulty: "easy", topic: "Two Pointers", subtopic: "Array Modification", leetcodeUrl: "https://leetcode.com/problems/remove-element/" },
      { id: 18, name: "Remove Duplicates from Sorted Array", difficulty: "easy", topic: "Two Pointers", subtopic: "Array Modification", leetcodeUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
      { id: 19, name: "Merge Sorted Array", difficulty: "easy", topic: "Two Pointers", subtopic: "Merging", leetcodeUrl: "https://leetcode.com/problems/merge-sorted-array/" },
      { id: 20, name: "Two Sum", difficulty: "easy", topic: "Two Pointers", subtopic: "Two Sum Pattern", leetcodeUrl: "https://leetcode.com/problems/two-sum/" },
      { id: 21, name: "Valid Palindrome", difficulty: "easy", topic: "Two Pointers", subtopic: "Palindrome", leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/" },
      { id: 22, name: "Reverse String", difficulty: "easy", topic: "Two Pointers", subtopic: "String Manipulation", leetcodeUrl: "https://leetcode.com/problems/reverse-string/" },
      { id: 23, name: "Sort Array by Parity II", difficulty: "easy", topic: "Two Pointers", subtopic: "Partition", leetcodeUrl: "https://leetcode.com/problems/sort-array-by-parity-ii/" },
      { id: 24, name: "Two Sum II Input Array Is Sorted", difficulty: "medium", topic: "Two Pointers", subtopic: "Two Sum Pattern", leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { id: 25, name: "Rotate Array", difficulty: "medium", topic: "Two Pointers", subtopic: "Array Manipulation", leetcodeUrl: "https://leetcode.com/problems/rotate-array/" },
      { id: 26, name: "Valid Palindrome II", difficulty: "medium", topic: "Two Pointers", subtopic: "Palindrome", leetcodeUrl: "https://leetcode.com/problems/valid-palindrome-ii/" },
      { id: 27, name: "Reverse Words in a String", difficulty: "medium", topic: "Two Pointers", subtopic: "String Manipulation", leetcodeUrl: "https://leetcode.com/problems/reverse-words-in-a-string/" },
      { id: 28, name: "String Compression", difficulty: "medium", topic: "Two Pointers", subtopic: "String Manipulation", leetcodeUrl: "https://leetcode.com/problems/string-compression/" },
      { id: 29, name: "Partition Array According to Given Pivot", difficulty: "medium", topic: "Two Pointers", subtopic: "Partition", leetcodeUrl: "https://leetcode.com/problems/partition-array-according-to-given-pivot/" },
      { id: 30, name: "Sort Colors", difficulty: "medium", topic: "Two Pointers", subtopic: "Dutch National Flag", leetcodeUrl: "https://leetcode.com/problems/sort-colors/" },
      { id: 31, name: "3Sum", difficulty: "medium", topic: "Two Pointers", subtopic: "Three Sum Pattern", leetcodeUrl: "https://leetcode.com/problems/3sum/" },
      { id: 32, name: "3Sum Closest", difficulty: "medium", topic: "Two Pointers", subtopic: "Three Sum Pattern", leetcodeUrl: "https://leetcode.com/problems/3sum-closest/" },
      { id: 33, name: "Container With Most Water", difficulty: "medium", topic: "Two Pointers", subtopic: "Area Maximization", leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/" },
      { id: 34, name: "Next Permutation", difficulty: "medium", topic: "Two Pointers", subtopic: "Permutation", leetcodeUrl: "https://leetcode.com/problems/next-permutation/" },
      { id: 35, name: "DI String Match", difficulty: "medium", topic: "Two Pointers", subtopic: "Greedy", leetcodeUrl: "https://leetcode.com/problems/di-string-match/" },
      { id: 36, name: "Minimum Length of String After Deleting Similar Ends", difficulty: "medium", topic: "Two Pointers", subtopic: "String Manipulation", leetcodeUrl: "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/" },
      { id: 37, name: "4Sum", difficulty: "medium", topic: "Two Pointers", subtopic: "K Sum Pattern", leetcodeUrl: "https://leetcode.com/problems/4sum/" },
      { id: 38, name: "Move Pieces to Obtain a String", difficulty: "medium", topic: "Two Pointers", subtopic: "String Manipulation", leetcodeUrl: "https://leetcode.com/problems/move-pieces-to-obtain-a-string/" },
    ]
  },
  {
    name: "Prefix Sum & Line Sweep",
    icon: "📈",
    color: "#45B7D1",
    questions: [
      { id: 39, name: "Range Sum Query - Immutable", difficulty: "easy", topic: "Prefix Sum & Line Sweep", subtopic: "Basic Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { id: 40, name: "Add Binary", difficulty: "easy", topic: "Prefix Sum & Line Sweep", subtopic: "Basics", leetcodeUrl: "https://leetcode.com/problems/add-binary/" },
      { id: 41, name: "Maximum Population Year", difficulty: "easy", topic: "Prefix Sum & Line Sweep", subtopic: "Line Sweep", leetcodeUrl: "https://leetcode.com/problems/maximum-population-year/" },
      { id: 42, name: "Product of Array Except Self", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Prefix Product", leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/" },
      { id: 43, name: "Product of the Last K Numbers", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Prefix Product", leetcodeUrl: "https://leetcode.com/problems/product-of-the-last-k-numbers/" },
      { id: 44, name: "Range Sum Query 2D - Immutable", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "2D Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
      { id: 45, name: "Sum of Absolute Differences in a Sorted Array", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/" },
      { id: 46, name: "Points That Intersect With Cars", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Line Sweep", leetcodeUrl: "https://leetcode.com/problems/points-that-intersect-with-cars/" },
      { id: 47, name: "Car Pooling", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Line Sweep", leetcodeUrl: "https://leetcode.com/problems/car-pooling/" },
      { id: 48, name: "Find Good Days to Rob the Bank", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Prefix Array", leetcodeUrl: "https://leetcode.com/problems/find-good-days-to-rob-the-bank/" },
      { id: 49, name: "Increment Submatrices by One", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "2D Difference Array", leetcodeUrl: "https://leetcode.com/problems/increment-submatrices-by-one/" },
      { id: 50, name: "My Calendar II", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Line Sweep", leetcodeUrl: "https://leetcode.com/problems/my-calendar-ii/" },
      { id: 51, name: "Shifting Letters II", difficulty: "medium", topic: "Prefix Sum & Line Sweep", subtopic: "Difference Array", leetcodeUrl: "https://leetcode.com/problems/shifting-letters-ii/" },
      { id: 52, name: "Number of Flowers in Full Bloom", difficulty: "hard", topic: "Prefix Sum & Line Sweep", subtopic: "Line Sweep", leetcodeUrl: "https://leetcode.com/problems/number-of-flowers-in-full-bloom/" },
      { id: 53, name: "Minimum Cost to Make Array Equal", difficulty: "hard", topic: "Prefix Sum & Line Sweep", subtopic: "Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/minimum-cost-to-make-array-equal/" },
      { id: 54, name: "Power of Heroes", difficulty: "hard", topic: "Prefix Sum & Line Sweep", subtopic: "Advanced", leetcodeUrl: "https://leetcode.com/problems/power-of-heroes/" },
    ]
  },
  {
    name: "Matrix",
    icon: "🔲",
    color: "#96CEB4",
    questions: [
      { id: 55, name: "Richest Customer Wealth", difficulty: "easy", topic: "Matrix", subtopic: "Basic Traversal", leetcodeUrl: "https://leetcode.com/problems/richest-customer-wealth/" },
      { id: 56, name: "Transpose Matrix", difficulty: "easy", topic: "Matrix", subtopic: "Transformation", leetcodeUrl: "https://leetcode.com/problems/transpose-matrix/" },
      { id: 57, name: "Lucky Numbers in a Matrix", difficulty: "easy", topic: "Matrix", subtopic: "Row/Column Operations", leetcodeUrl: "https://leetcode.com/problems/lucky-numbers-in-a-matrix/" },
      { id: 58, name: "Set Matrix Zeroes", difficulty: "medium", topic: "Matrix", subtopic: "In-place Modification", leetcodeUrl: "https://leetcode.com/problems/set-matrix-zeroes/" },
      { id: 59, name: "Rotate Image", difficulty: "medium", topic: "Matrix", subtopic: "Transformation", leetcodeUrl: "https://leetcode.com/problems/rotate-image/" },
      { id: 60, name: "Spiral Matrix", difficulty: "medium", topic: "Matrix", subtopic: "Traversal", leetcodeUrl: "https://leetcode.com/problems/spiral-matrix/" },
      { id: 61, name: "Spiral Matrix II", difficulty: "medium", topic: "Matrix", subtopic: "Traversal", leetcodeUrl: "https://leetcode.com/problems/spiral-matrix-ii/" },
      { id: 62, name: "Diagonal Traverse", difficulty: "medium", topic: "Matrix", subtopic: "Traversal", leetcodeUrl: "https://leetcode.com/problems/diagonal-traverse/" },
      { id: 63, name: "Valid Sudoku", difficulty: "medium", topic: "Matrix", subtopic: "Validation", leetcodeUrl: "https://leetcode.com/problems/valid-sudoku/" },
      { id: 64, name: "Search a 2D Matrix", difficulty: "medium", topic: "Matrix", subtopic: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { id: 65, name: "Search a 2D Matrix II", difficulty: "medium", topic: "Matrix", subtopic: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
      { id: 66, name: "Game of Life", difficulty: "medium", topic: "Matrix", subtopic: "Simulation", leetcodeUrl: "https://leetcode.com/problems/game-of-life/" },
      { id: 67, name: "Equal Row and Column Pairs", difficulty: "medium", topic: "Matrix", subtopic: "Hashing", leetcodeUrl: "https://leetcode.com/problems/equal-row-and-column-pairs/" },
      { id: 68, name: "Matrix Block Sum", difficulty: "medium", topic: "Matrix", subtopic: "Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/matrix-block-sum/" },
      { id: 69, name: "Largest Local Values in a Matrix", difficulty: "medium", topic: "Matrix", subtopic: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/largest-local-values-in-a-matrix/" },
      { id: 70, name: "Maximum Sum of an Hourglass", difficulty: "medium", topic: "Matrix", subtopic: "Pattern Matching", leetcodeUrl: "https://leetcode.com/problems/maximum-sum-of-an-hourglass/" },
      { id: 71, name: "Where Will the Ball Fall", difficulty: "medium", topic: "Matrix", subtopic: "Simulation", leetcodeUrl: "https://leetcode.com/problems/where-will-the-ball-fall/" },
      { id: 72, name: "Matrix Similarity After Cyclic Shifts", difficulty: "medium", topic: "Matrix", subtopic: "Transformation", leetcodeUrl: "https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/" },
      { id: 73, name: "Construct Quad Tree", difficulty: "medium", topic: "Matrix", subtopic: "Divide & Conquer", leetcodeUrl: "https://leetcode.com/problems/construct-quad-tree/" },
      { id: 74, name: "Count Submatrices with Top-Left Element and Sum Less Than k", difficulty: "medium", topic: "Matrix", subtopic: "Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/" },
    ]
  },
  {
    name: "Hashing",
    icon: "#️⃣",
    color: "#DDA0DD",
    questions: [
      { id: 75, name: "Contains Duplicate", difficulty: "easy", topic: "Hashing", subtopic: "Basic HashSet", leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/" },
      { id: 76, name: "Valid Anagram", difficulty: "easy", topic: "Hashing", subtopic: "Frequency Count", leetcodeUrl: "https://leetcode.com/problems/valid-anagram/" },
      { id: 77, name: "Isomorphic Strings", difficulty: "easy", topic: "Hashing", subtopic: "Mapping", leetcodeUrl: "https://leetcode.com/problems/isomorphic-strings/" },
      { id: 78, name: "Word Pattern", difficulty: "easy", topic: "Hashing", subtopic: "Mapping", leetcodeUrl: "https://leetcode.com/problems/word-pattern/" },
      { id: 79, name: "Happy Number", difficulty: "easy", topic: "Hashing", subtopic: "Cycle Detection", leetcodeUrl: "https://leetcode.com/problems/happy-number/" },
      { id: 80, name: "Majority Element", difficulty: "easy", topic: "Hashing", subtopic: "Frequency Count", leetcodeUrl: "https://leetcode.com/problems/majority-element/" },
      { id: 81, name: "Contains Duplicate II", difficulty: "easy", topic: "Hashing", subtopic: "Sliding Window Hash", leetcodeUrl: "https://leetcode.com/problems/contains-duplicate-ii/" },
      { id: 82, name: "Design HashSet", difficulty: "easy", topic: "Hashing", subtopic: "Design", leetcodeUrl: "https://leetcode.com/problems/design-hashset/" },
      { id: 83, name: "Design HashMap", difficulty: "medium", topic: "Hashing", subtopic: "Design", leetcodeUrl: "https://leetcode.com/problems/design-hashmap/" },
      { id: 84, name: "Group Anagrams", difficulty: "medium", topic: "Hashing", subtopic: "Grouping", leetcodeUrl: "https://leetcode.com/problems/group-anagrams/" },
      { id: 85, name: "Majority Element II", difficulty: "medium", topic: "Hashing", subtopic: "Boyer-Moore", leetcodeUrl: "https://leetcode.com/problems/majority-element-ii/" },
      { id: 86, name: "Find All Duplicates in an Array", difficulty: "medium", topic: "Hashing", subtopic: "Cyclic Sort", leetcodeUrl: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
      { id: 87, name: "Find The Duplicate Number", difficulty: "medium", topic: "Hashing", subtopic: "Floyd's Cycle", leetcodeUrl: "https://leetcode.com/problems/find-the-duplicate-number/" },
      { id: 88, name: "Top K Frequent Elements", difficulty: "medium", topic: "Hashing", subtopic: "Frequency + Heap", leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { id: 89, name: "Sort Characters By Frequency", difficulty: "medium", topic: "Hashing", subtopic: "Frequency Sort", leetcodeUrl: "https://leetcode.com/problems/sort-characters-by-frequency/" },
      { id: 90, name: "Subarray Sum Equals K", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Sum Hash", leetcodeUrl: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { id: 91, name: "Subarray Sums Divisible by K", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Sum Hash", leetcodeUrl: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
      { id: 92, name: "Continuous Subarray Sum", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Sum Hash", leetcodeUrl: "https://leetcode.com/problems/continuous-subarray-sum/" },
      { id: 93, name: "Count Number of Nice Subarrays", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Sum Hash", leetcodeUrl: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
      { id: 94, name: "4Sum II", difficulty: "medium", topic: "Hashing", subtopic: "Two Sum Pattern", leetcodeUrl: "https://leetcode.com/problems/4sum-ii/" },
      { id: 95, name: "Integer to Roman", difficulty: "medium", topic: "Hashing", subtopic: "Mapping", leetcodeUrl: "https://leetcode.com/problems/integer-to-roman/" },
      { id: 96, name: "Tuple with Same Product", difficulty: "medium", topic: "Hashing", subtopic: "Counting", leetcodeUrl: "https://leetcode.com/problems/tuple-with-same-product/" },
      { id: 97, name: "Pairs of Songs with Total Durations Divisible by 60", difficulty: "medium", topic: "Hashing", subtopic: "Modulo", leetcodeUrl: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/" },
      { id: 98, name: "Custom Sort String", difficulty: "medium", topic: "Hashing", subtopic: "Order Mapping", leetcodeUrl: "https://leetcode.com/problems/custom-sort-string/" },
      { id: 99, name: "Bulls and Cows", difficulty: "medium", topic: "Hashing", subtopic: "Counting", leetcodeUrl: "https://leetcode.com/problems/bulls-and-cows/" },
      { id: 100, name: "Longest Substring Without Repeating Characters", difficulty: "medium", topic: "Hashing", subtopic: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: 101, name: "Longest Consecutive Sequence", difficulty: "medium", topic: "Hashing", subtopic: "Union Find Like", leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { id: 102, name: "Encode and Decode Strings", difficulty: "medium", topic: "Hashing", subtopic: "Serialization", leetcodeUrl: "https://leetcode.com/problems/encode-and-decode-strings/" },
      { id: 103, name: "Reconstruct Original Digits from English", difficulty: "medium", topic: "Hashing", subtopic: "Counting", leetcodeUrl: "https://leetcode.com/problems/reconstruct-original-digits-from-english/" },
      { id: 104, name: "Number of Submatrices That Sum to Target", difficulty: "hard", topic: "Hashing", subtopic: "2D Prefix Sum", leetcodeUrl: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/" },
      { id: 105, name: "First Missing Positive", difficulty: "hard", topic: "Hashing", subtopic: "Cyclic Sort", leetcodeUrl: "https://leetcode.com/problems/first-missing-positive/" },
      { id: 106, name: "Minimum Window Substring", difficulty: "hard", topic: "Hashing", subtopic: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/" },
    ]
  },
  {
    name: "Sliding Window",
    icon: "🪟",
    color: "#F7DC6F",
    questions: [
      { id: 107, name: "Maximum Number of Vowels in a Substring of Given Length", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window", leetcodeUrl: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/" },
      { id: 108, name: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window", leetcodeUrl: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/" },
      { id: 109, name: "Maximum Sum of Distinct Subarrays With Length K", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window", leetcodeUrl: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/" },
      { id: 110, name: "Maximum Points You Can Obtain from Cards", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window", leetcodeUrl: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/" },
      { id: 111, name: "Find All Anagrams in a String", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window + Hash", leetcodeUrl: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
      { id: 112, name: "Permutation in String", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window + Hash", leetcodeUrl: "https://leetcode.com/problems/permutation-in-string/" },
      { id: 113, name: "Longest Substring Without Repeating Characters", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: 114, name: "Longest Repeating Character Replacement", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
      { id: 115, name: "Max Consecutive Ones III", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
      { id: 116, name: "Maximum Number of Occurrences of a Substring", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/" },
      { id: 117, name: "Minimum Size Subarray Sum", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
      { id: 118, name: "Fruit Into Baskets", difficulty: "medium", topic: "Sliding Window", subtopic: "At Most K", leetcodeUrl: "https://leetcode.com/problems/fruit-into-baskets/" },
      { id: 119, name: "Subarray Product Less Than K", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/subarray-product-less-than-k/" },
      { id: 120, name: "Grumpy Bookstore Owner", difficulty: "medium", topic: "Sliding Window", subtopic: "Fixed Window", leetcodeUrl: "https://leetcode.com/problems/grumpy-bookstore-owner/" },
      { id: 121, name: "Number of Subarrays with Bounded Maximum", difficulty: "medium", topic: "Sliding Window", subtopic: "Counting", leetcodeUrl: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/" },
      { id: 122, name: "Maximum Erasure Value", difficulty: "medium", topic: "Sliding Window", subtopic: "Variable Window", leetcodeUrl: "https://leetcode.com/problems/maximum-erasure-value/" },
      { id: 123, name: "Minimum Operations to Reduce X to Zero", difficulty: "medium", topic: "Sliding Window", subtopic: "Reverse Thinking", leetcodeUrl: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/" },
      { id: 124, name: "Frequency of the Most Frequent Element", difficulty: "medium", topic: "Sliding Window", subtopic: "Sorting + Window", leetcodeUrl: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/" },
      { id: 125, name: "Minimum Window Substring", difficulty: "hard", topic: "Sliding Window", subtopic: "Variable Window + Hash", leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/" },
      { id: 126, name: "Sliding Window Maximum", difficulty: "hard", topic: "Sliding Window", subtopic: "Monotonic Deque", leetcodeUrl: "https://leetcode.com/problems/sliding-window-maximum/" },
      { id: 127, name: "Subarrays with K Different Integers", difficulty: "hard", topic: "Sliding Window", subtopic: "Exactly K Pattern", leetcodeUrl: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
    ]
  },
  {
    name: "Linked List",
    icon: "🔗",
    color: "#BB8FCE",
    questions: [
      { id: 128, name: "Middle of the Linked List", difficulty: "easy", topic: "Linked List", subtopic: "Fast & Slow Pointers", leetcodeUrl: "https://leetcode.com/problems/middle-of-the-linked-list/" },
      { id: 129, name: "Linked List Cycle", difficulty: "easy", topic: "Linked List", subtopic: "Fast & Slow Pointers", leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: 130, name: "Reverse Linked List", difficulty: "easy", topic: "Linked List", subtopic: "Reversal", leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/" },
      { id: 131, name: "Merge Two Sorted Lists", difficulty: "easy", topic: "Linked List", subtopic: "Merging", leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: 132, name: "Intersection of Two Linked Lists", difficulty: "easy", topic: "Linked List", subtopic: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
      { id: 133, name: "Palindrome Linked List", difficulty: "easy", topic: "Linked List", subtopic: "Fast & Slow + Reversal", leetcodeUrl: "https://leetcode.com/problems/palindrome-linked-list/" },
      { id: 134, name: "Remove Duplicates from Sorted List", difficulty: "easy", topic: "Linked List", subtopic: "Basic Operations", leetcodeUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
      { id: 135, name: "Linked List Cycle II", difficulty: "medium", topic: "Linked List", subtopic: "Fast & Slow Pointers", leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle-ii/" },
      { id: 136, name: "Reverse Linked List II", difficulty: "medium", topic: "Linked List", subtopic: "Reversal", leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list-ii/" },
      { id: 137, name: "Reorder List", difficulty: "medium", topic: "Linked List", subtopic: "Multi-technique", leetcodeUrl: "https://leetcode.com/problems/reorder-list/" },
      { id: 138, name: "Odd Even Linked List", difficulty: "medium", topic: "Linked List", subtopic: "Rearrangement", leetcodeUrl: "https://leetcode.com/problems/odd-even-linked-list/" },
      { id: 139, name: "Remove Nth Node From End of List", difficulty: "medium", topic: "Linked List", subtopic: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
      { id: 140, name: "Delete the Middle Node of a Linked List", difficulty: "medium", topic: "Linked List", subtopic: "Fast & Slow Pointers", leetcodeUrl: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/" },
      { id: 141, name: "Add Two Numbers", difficulty: "medium", topic: "Linked List", subtopic: "Math", leetcodeUrl: "https://leetcode.com/problems/add-two-numbers/" },
      { id: 142, name: "Sort List", difficulty: "medium", topic: "Linked List", subtopic: "Merge Sort", leetcodeUrl: "https://leetcode.com/problems/sort-list/" },
      { id: 143, name: "Copy List with Random Pointer", difficulty: "medium", topic: "Linked List", subtopic: "Deep Copy", leetcodeUrl: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
      { id: 144, name: "Insert Greatest Common Divisors in Linked List", difficulty: "medium", topic: "Linked List", subtopic: "Insertion", leetcodeUrl: "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/" },
      { id: 145, name: "Design Browser History", difficulty: "medium", topic: "Linked List", subtopic: "Design", leetcodeUrl: "https://leetcode.com/problems/design-browser-history/" },
      { id: 146, name: "Flattening a Linked List", difficulty: "medium", topic: "Linked List", subtopic: "Multi-level", gfgUrl: "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1" },
      { id: 147, name: "Reverse Nodes in k-Group", difficulty: "hard", topic: "Linked List", subtopic: "Reversal", leetcodeUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
      { id: 148, name: "Merge k Sorted Lists", difficulty: "hard", topic: "Linked List", subtopic: "Heap", leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/" },
      { id: 149, name: "LRU Cache", difficulty: "medium", topic: "Linked List", subtopic: "Design", leetcodeUrl: "https://leetcode.com/problems/lru-cache/" },
      { id: 150, name: "LFU Cache", difficulty: "hard", topic: "Linked List", subtopic: "Design", leetcodeUrl: "https://leetcode.com/problems/lfu-cache/" },
    ]
  },
  // Continue with more topics...
];

// Export flattened question list
export const allQuestions: Question[] = topics.flatMap(topic => topic.questions);

// Total count
export const totalQuestions = allQuestions.length;
