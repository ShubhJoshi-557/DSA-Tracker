export type Difficulty = 'easy' | 'medium' | 'hard';
export type Status = 'pending' | 'done' | 'revision';

export interface Question {
  id: number;
  name: string;
  difficulty: Difficulty;
  topic: string;
  subtopic?: string;
  url?: string;
}

export interface Topic {
  name: string;
  icon: string;
  color: string;
  gradient: string;
  count: number;
}

export const topicsMeta: Topic[] = [
  { name: "Sorting", icon: "📊", color: "#FF6B6B", gradient: "from-red-500 to-rose-600", count: 16 },
  { name: "Two Pointers", icon: "👆", color: "#4ECDC4", gradient: "from-teal-500 to-cyan-600", count: 22 },
  { name: "Prefix Sum", icon: "📈", color: "#45B7D1", gradient: "from-blue-500 to-sky-600", count: 16 },
  { name: "Matrix", icon: "🔲", color: "#96CEB4", gradient: "from-emerald-500 to-green-600", count: 20 },
  { name: "Hashing", icon: "#️⃣", color: "#DDA0DD", gradient: "from-purple-500 to-violet-600", count: 32 },
  { name: "Sliding Window", icon: "🪟", color: "#F7DC6F", gradient: "from-amber-500 to-yellow-600", count: 21 },
  { name: "Linked List", icon: "🔗", color: "#BB8FCE", gradient: "from-fuchsia-500 to-pink-600", count: 23 },
  { name: "Stack", icon: "📚", color: "#85C1E9", gradient: "from-blue-400 to-indigo-600", count: 33 },
  { name: "Queue", icon: "🚶", color: "#82E0AA", gradient: "from-lime-500 to-green-600", count: 12 },
  { name: "Binary Search", icon: "🔍", color: "#F8C471", gradient: "from-orange-500 to-amber-600", count: 38 },
  { name: "Bit Manipulation", icon: "🔢", color: "#D7BDE2", gradient: "from-violet-500 to-purple-600", count: 21 },
  { name: "Recursion", icon: "🔄", color: "#A3E4D7", gradient: "from-teal-400 to-emerald-600", count: 29 },
  { name: "Binary Tree", icon: "🌳", color: "#76D7C4", gradient: "from-green-500 to-teal-600", count: 40 },
  { name: "BST", icon: "🌲", color: "#7DCEA0", gradient: "from-emerald-600 to-green-700", count: 23 },
  { name: "Heap", icon: "⛰️", color: "#F1948A", gradient: "from-red-400 to-rose-600", count: 33 },
  { name: "Trie", icon: "📖", color: "#85929E", gradient: "from-slate-500 to-gray-700", count: 16 },
  { name: "Greedy", icon: "🎯", color: "#FAD7A0", gradient: "from-yellow-500 to-orange-600", count: 31 },
  { name: "Dynamic Programming", icon: "🧮", color: "#AED6F1", gradient: "from-cyan-500 to-blue-600", count: 68 },
  { name: "Graphs", icon: "🕸️", color: "#D2B4DE", gradient: "from-purple-400 to-indigo-600", count: 60 },
  { name: "Advanced DP", icon: "🧠", color: "#F5B7B1", gradient: "from-pink-500 to-red-600", count: 20 },
  { name: "String Matching", icon: "🔤", color: "#A9CCE3", gradient: "from-sky-500 to-blue-600", count: 8 },
  { name: "Advanced Algo", icon: "⚡", color: "#A2D9CE", gradient: "from-teal-500 to-green-600", count: 5 },
  { name: "Misc", icon: "🎲", color: "#E5E8E8", gradient: "from-gray-400 to-slate-600", count: 13 },
];

// All 500 questions with difficulty, topic, and subtopic
export const questions: Question[] = [
  // SORTING (16)
  { id: 1, name: "Bubble Sort", difficulty: "easy", topic: "Sorting", subtopic: "Basic Sorts" },
  { id: 2, name: "Insertion Sort Algorithm", difficulty: "easy", topic: "Sorting", subtopic: "Basic Sorts" },
  { id: 3, name: "Selection Sort Algorithm", difficulty: "easy", topic: "Sorting", subtopic: "Basic Sorts" },
  { id: 4, name: "Counting Sort", difficulty: "easy", topic: "Sorting", subtopic: "Non-Comparison" },
  { id: 5, name: "Radix Sort", difficulty: "medium", topic: "Sorting", subtopic: "Non-Comparison" },
  { id: 6, name: "Bucket Sort", difficulty: "medium", topic: "Sorting", subtopic: "Non-Comparison" },
  { id: 7, name: "Merge Sort", difficulty: "medium", topic: "Sorting", subtopic: "Divide & Conquer" },
  { id: 8, name: "Quick Sort", difficulty: "medium", topic: "Sorting", subtopic: "Divide & Conquer" },
  { id: 9, name: "Sort an Array", difficulty: "medium", topic: "Sorting", subtopic: "Implementation", url: "https://leetcode.com/problems/sort-an-array/" },
  { id: 10, name: "Custom Sort String", difficulty: "medium", topic: "Sorting", subtopic: "Custom Comparator", url: "https://leetcode.com/problems/custom-sort-string/" },
  { id: 11, name: "Largest Number", difficulty: "medium", topic: "Sorting", subtopic: "Custom Comparator", url: "https://leetcode.com/problems/largest-number/" },
  { id: 12, name: "Count Inversions", difficulty: "medium", topic: "Sorting", subtopic: "Merge Sort App", url: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1" },
  { id: 13, name: "Count of Smaller Numbers After Self", difficulty: "hard", topic: "Sorting", subtopic: "Merge Sort App", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
  { id: 14, name: "Reverse Pairs", difficulty: "hard", topic: "Sorting", subtopic: "Merge Sort App", url: "https://leetcode.com/problems/reverse-pairs/" },
  { id: 15, name: "Create Sorted Array through Instructions", difficulty: "hard", topic: "Sorting", subtopic: "Merge Sort App", url: "https://leetcode.com/problems/create-sorted-array-through-instructions/" },
  { id: 16, name: "First Missing Positive", difficulty: "hard", topic: "Sorting", subtopic: "Cyclic Sort", url: "https://leetcode.com/problems/first-missing-positive/" },

  // TWO POINTERS (22)
  { id: 17, name: "Remove Element", difficulty: "easy", topic: "Two Pointers", subtopic: "Array Modification", url: "https://leetcode.com/problems/remove-element/" },
  { id: 18, name: "Remove Duplicates from Sorted Array", difficulty: "easy", topic: "Two Pointers", subtopic: "Array Modification", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
  { id: 19, name: "Merge Sorted Array", difficulty: "easy", topic: "Two Pointers", subtopic: "Merging", url: "https://leetcode.com/problems/merge-sorted-array/" },
  { id: 20, name: "Two Sum", difficulty: "easy", topic: "Two Pointers", subtopic: "Two Sum Pattern", url: "https://leetcode.com/problems/two-sum/" },
  { id: 21, name: "Valid Palindrome", difficulty: "easy", topic: "Two Pointers", subtopic: "Palindrome", url: "https://leetcode.com/problems/valid-palindrome/" },
  { id: 22, name: "Reverse String", difficulty: "easy", topic: "Two Pointers", subtopic: "String", url: "https://leetcode.com/problems/reverse-string/" },
  { id: 23, name: "Sort Array by Parity II", difficulty: "easy", topic: "Two Pointers", subtopic: "Partition", url: "https://leetcode.com/problems/sort-array-by-parity-ii/" },
  { id: 24, name: "Two Sum II", difficulty: "medium", topic: "Two Pointers", subtopic: "Two Sum Pattern", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
  { id: 25, name: "Rotate Array", difficulty: "medium", topic: "Two Pointers", subtopic: "Array Manipulation", url: "https://leetcode.com/problems/rotate-array/" },
  { id: 26, name: "Valid Palindrome II", difficulty: "medium", topic: "Two Pointers", subtopic: "Palindrome", url: "https://leetcode.com/problems/valid-palindrome-ii/" },
  { id: 27, name: "Reverse Words in a String", difficulty: "medium", topic: "Two Pointers", subtopic: "String", url: "https://leetcode.com/problems/reverse-words-in-a-string/" },
  { id: 28, name: "String Compression", difficulty: "medium", topic: "Two Pointers", subtopic: "String", url: "https://leetcode.com/problems/string-compression/" },
  { id: 29, name: "Partition Array According to Given Pivot", difficulty: "medium", topic: "Two Pointers", subtopic: "Partition", url: "https://leetcode.com/problems/partition-array-according-to-given-pivot/" },
  { id: 30, name: "Sort Colors", difficulty: "medium", topic: "Two Pointers", subtopic: "Dutch National Flag", url: "https://leetcode.com/problems/sort-colors/" },
  { id: 31, name: "3Sum", difficulty: "medium", topic: "Two Pointers", subtopic: "Three Sum", url: "https://leetcode.com/problems/3sum/" },
  { id: 32, name: "3Sum Closest", difficulty: "medium", topic: "Two Pointers", subtopic: "Three Sum", url: "https://leetcode.com/problems/3sum-closest/" },
  { id: 33, name: "Container With Most Water", difficulty: "medium", topic: "Two Pointers", subtopic: "Area", url: "https://leetcode.com/problems/container-with-most-water/" },
  { id: 34, name: "Next Permutation", difficulty: "medium", topic: "Two Pointers", subtopic: "Permutation", url: "https://leetcode.com/problems/next-permutation/" },
  { id: 35, name: "DI String Match", difficulty: "medium", topic: "Two Pointers", subtopic: "Greedy", url: "https://leetcode.com/problems/di-string-match/" },
  { id: 36, name: "Minimum Length of String After Deleting Similar Ends", difficulty: "medium", topic: "Two Pointers", subtopic: "String", url: "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/" },
  { id: 37, name: "4Sum", difficulty: "medium", topic: "Two Pointers", subtopic: "K Sum", url: "https://leetcode.com/problems/4sum/" },
  { id: 38, name: "Move Pieces to Obtain a String", difficulty: "medium", topic: "Two Pointers", subtopic: "String", url: "https://leetcode.com/problems/move-pieces-to-obtain-a-string/" },

  // PREFIX SUM (16)
  { id: 39, name: "Range Sum Query - Immutable", difficulty: "easy", topic: "Prefix Sum", subtopic: "Basic", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
  { id: 40, name: "Add Binary", difficulty: "easy", topic: "Prefix Sum", subtopic: "Basics", url: "https://leetcode.com/problems/add-binary/" },
  { id: 41, name: "Maximum Population Year", difficulty: "easy", topic: "Prefix Sum", subtopic: "Line Sweep", url: "https://leetcode.com/problems/maximum-population-year/" },
  { id: 42, name: "Product of Array Except Self", difficulty: "medium", topic: "Prefix Sum", subtopic: "Prefix Product", url: "https://leetcode.com/problems/product-of-array-except-self/" },
  { id: 43, name: "Product of the Last K Numbers", difficulty: "medium", topic: "Prefix Sum", subtopic: "Prefix Product", url: "https://leetcode.com/problems/product-of-the-last-k-numbers/" },
  { id: 44, name: "Range Sum Query 2D - Immutable", difficulty: "medium", topic: "Prefix Sum", subtopic: "2D Prefix Sum", url: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
  { id: 45, name: "Sum of Absolute Differences", difficulty: "medium", topic: "Prefix Sum", subtopic: "Advanced", url: "https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/" },
  { id: 46, name: "Points That Intersect With Cars", difficulty: "medium", topic: "Prefix Sum", subtopic: "Line Sweep", url: "https://leetcode.com/problems/points-that-intersect-with-cars/" },
  { id: 47, name: "Car Pooling", difficulty: "medium", topic: "Prefix Sum", subtopic: "Line Sweep", url: "https://leetcode.com/problems/car-pooling/" },
  { id: 48, name: "Find Good Days to Rob the Bank", difficulty: "medium", topic: "Prefix Sum", subtopic: "Prefix Array", url: "https://leetcode.com/problems/find-good-days-to-rob-the-bank/" },
  { id: 49, name: "Increment Submatrices by One", difficulty: "medium", topic: "Prefix Sum", subtopic: "2D Diff Array", url: "https://leetcode.com/problems/increment-submatrices-by-one/" },
  { id: 50, name: "My Calendar II", difficulty: "medium", topic: "Prefix Sum", subtopic: "Line Sweep", url: "https://leetcode.com/problems/my-calendar-ii/" },
  { id: 51, name: "Shifting Letters II", difficulty: "medium", topic: "Prefix Sum", subtopic: "Diff Array", url: "https://leetcode.com/problems/shifting-letters-ii/" },
  { id: 52, name: "Number of Flowers in Full Bloom", difficulty: "hard", topic: "Prefix Sum", subtopic: "Line Sweep", url: "https://leetcode.com/problems/number-of-flowers-in-full-bloom/" },
  { id: 53, name: "Minimum Cost to Make Array Equal", difficulty: "hard", topic: "Prefix Sum", subtopic: "Advanced", url: "https://leetcode.com/problems/minimum-cost-to-make-array-equal/" },
  { id: 54, name: "Power of Heroes", difficulty: "hard", topic: "Prefix Sum", subtopic: "Advanced", url: "https://leetcode.com/problems/power-of-heroes/" },

  // MATRIX (20)
  { id: 55, name: "Richest Customer Wealth", difficulty: "easy", topic: "Matrix", subtopic: "Basic", url: "https://leetcode.com/problems/richest-customer-wealth/" },
  { id: 56, name: "Transpose Matrix", difficulty: "easy", topic: "Matrix", subtopic: "Transform", url: "https://leetcode.com/problems/transpose-matrix/" },
  { id: 57, name: "Lucky Numbers in a Matrix", difficulty: "easy", topic: "Matrix", subtopic: "Row/Col", url: "https://leetcode.com/problems/lucky-numbers-in-a-matrix/" },
  { id: 58, name: "Set Matrix Zeroes", difficulty: "medium", topic: "Matrix", subtopic: "In-place", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
  { id: 59, name: "Rotate Image", difficulty: "medium", topic: "Matrix", subtopic: "Transform", url: "https://leetcode.com/problems/rotate-image/" },
  { id: 60, name: "Spiral Matrix", difficulty: "medium", topic: "Matrix", subtopic: "Traversal", url: "https://leetcode.com/problems/spiral-matrix/" },
  { id: 61, name: "Spiral Matrix II", difficulty: "medium", topic: "Matrix", subtopic: "Traversal", url: "https://leetcode.com/problems/spiral-matrix-ii/" },
  { id: 62, name: "Diagonal Traverse", difficulty: "medium", topic: "Matrix", subtopic: "Traversal", url: "https://leetcode.com/problems/diagonal-traverse/" },
  { id: 63, name: "Valid Sudoku", difficulty: "medium", topic: "Matrix", subtopic: "Validation", url: "https://leetcode.com/problems/valid-sudoku/" },
  { id: 64, name: "Search a 2D Matrix", difficulty: "medium", topic: "Matrix", subtopic: "Binary Search", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
  { id: 65, name: "Search a 2D Matrix II", difficulty: "medium", topic: "Matrix", subtopic: "Binary Search", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
  { id: 66, name: "Game of Life", difficulty: "medium", topic: "Matrix", subtopic: "Simulation", url: "https://leetcode.com/problems/game-of-life/" },
  { id: 67, name: "Equal Row and Column Pairs", difficulty: "medium", topic: "Matrix", subtopic: "Hashing", url: "https://leetcode.com/problems/equal-row-and-column-pairs/" },
  { id: 68, name: "Matrix Block Sum", difficulty: "medium", topic: "Matrix", subtopic: "Prefix Sum", url: "https://leetcode.com/problems/matrix-block-sum/" },
  { id: 69, name: "Largest Local Values in a Matrix", difficulty: "medium", topic: "Matrix", subtopic: "Sliding Window", url: "https://leetcode.com/problems/largest-local-values-in-a-matrix/" },
  { id: 70, name: "Maximum Sum of an Hourglass", difficulty: "medium", topic: "Matrix", subtopic: "Pattern", url: "https://leetcode.com/problems/maximum-sum-of-an-hourglass/" },
  { id: 71, name: "Where Will the Ball Fall", difficulty: "medium", topic: "Matrix", subtopic: "Simulation", url: "https://leetcode.com/problems/where-will-the-ball-fall/" },
  { id: 72, name: "Matrix Similarity After Cyclic Shifts", difficulty: "medium", topic: "Matrix", subtopic: "Transform", url: "https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/" },
  { id: 73, name: "Construct Quad Tree", difficulty: "medium", topic: "Matrix", subtopic: "Divide Conquer", url: "https://leetcode.com/problems/construct-quad-tree/" },
  { id: 74, name: "Count Submatrices Sum Less Than k", difficulty: "medium", topic: "Matrix", subtopic: "Prefix Sum", url: "https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/" },

  // HASHING (32) - IDs 75-106 
  { id: 75, name: "Contains Duplicate", difficulty: "easy", topic: "Hashing", subtopic: "Basic Set", url: "https://leetcode.com/problems/contains-duplicate/" },
  { id: 76, name: "Valid Anagram", difficulty: "easy", topic: "Hashing", subtopic: "Frequency", url: "https://leetcode.com/problems/valid-anagram/" },
  { id: 77, name: "Isomorphic Strings", difficulty: "easy", topic: "Hashing", subtopic: "Mapping", url: "https://leetcode.com/problems/isomorphic-strings/" },
  { id: 78, name: "Word Pattern", difficulty: "easy", topic: "Hashing", subtopic: "Mapping", url: "https://leetcode.com/problems/word-pattern/" },
  { id: 79, name: "Happy Number", difficulty: "easy", topic: "Hashing", subtopic: "Cycle Detection", url: "https://leetcode.com/problems/happy-number/" },
  { id: 80, name: "Majority Element", difficulty: "easy", topic: "Hashing", subtopic: "Frequency", url: "https://leetcode.com/problems/majority-element/" },
  { id: 81, name: "Contains Duplicate II", difficulty: "easy", topic: "Hashing", subtopic: "Sliding Hash", url: "https://leetcode.com/problems/contains-duplicate-ii/" },
  { id: 82, name: "Design HashSet", difficulty: "easy", topic: "Hashing", subtopic: "Design", url: "https://leetcode.com/problems/design-hashset/" },
  { id: 83, name: "Design HashMap", difficulty: "medium", topic: "Hashing", subtopic: "Design", url: "https://leetcode.com/problems/design-hashmap/" },
  { id: 84, name: "Group Anagrams", difficulty: "medium", topic: "Hashing", subtopic: "Grouping", url: "https://leetcode.com/problems/group-anagrams/" },
  { id: 85, name: "Majority Element II", difficulty: "medium", topic: "Hashing", subtopic: "Boyer-Moore", url: "https://leetcode.com/problems/majority-element-ii/" },
  { id: 86, name: "Find All Duplicates in an Array", difficulty: "medium", topic: "Hashing", subtopic: "Cyclic Sort", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
  { id: 87, name: "Find The Duplicate Number", difficulty: "medium", topic: "Hashing", subtopic: "Floyd Cycle", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
  { id: 88, name: "Top K Frequent Elements", difficulty: "medium", topic: "Hashing", subtopic: "Frequency Heap", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 89, name: "Sort Characters By Frequency", difficulty: "medium", topic: "Hashing", subtopic: "Frequency Sort", url: "https://leetcode.com/problems/sort-characters-by-frequency/" },
  { id: 90, name: "Subarray Sum Equals K", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Hash", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
  { id: 91, name: "Subarray Sums Divisible by K", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Hash", url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
  { id: 92, name: "Continuous Subarray Sum", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Hash", url: "https://leetcode.com/problems/continuous-subarray-sum/" },
  { id: 93, name: "Count Number of Nice Subarrays", difficulty: "medium", topic: "Hashing", subtopic: "Prefix Hash", url: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
  { id: 94, name: "4Sum II", difficulty: "medium", topic: "Hashing", subtopic: "Two Sum Pattern", url: "https://leetcode.com/problems/4sum-ii/" },
  { id: 95, name: "Integer to Roman", difficulty: "medium", topic: "Hashing", subtopic: "Mapping", url: "https://leetcode.com/problems/integer-to-roman/" },
  { id: 96, name: "Tuple with Same Product", difficulty: "medium", topic: "Hashing", subtopic: "Counting", url: "https://leetcode.com/problems/tuple-with-same-product/" },
  { id: 97, name: "Pairs of Songs Divisible by 60", difficulty: "medium", topic: "Hashing", subtopic: "Modulo", url: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/" },
  { id: 98, name: "Custom Sort String", difficulty: "medium", topic: "Hashing", subtopic: "Order Map", url: "https://leetcode.com/problems/custom-sort-string/" },
  { id: 99, name: "Bulls and Cows", difficulty: "medium", topic: "Hashing", subtopic: "Counting", url: "https://leetcode.com/problems/bulls-and-cows/" },
  { id: 100, name: "Longest Substring Without Repeating", difficulty: "medium", topic: "Hashing", subtopic: "Sliding Window", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id: 101, name: "Longest Consecutive Sequence", difficulty: "medium", topic: "Hashing", subtopic: "Union Find", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
  { id: 102, name: "Encode and Decode Strings", difficulty: "medium", topic: "Hashing", subtopic: "Serialization", url: "https://leetcode.com/problems/encode-and-decode-strings/" },
  { id: 103, name: "Reconstruct Original Digits from English", difficulty: "medium", topic: "Hashing", subtopic: "Counting", url: "https://leetcode.com/problems/reconstruct-original-digits-from-english/" },
  { id: 104, name: "Number of Submatrices That Sum to Target", difficulty: "hard", topic: "Hashing", subtopic: "2D Prefix", url: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/" },
  { id: 105, name: "First Missing Positive", difficulty: "hard", topic: "Hashing", subtopic: "Cyclic Sort", url: "https://leetcode.com/problems/first-missing-positive/" },
  { id: 106, name: "Minimum Window Substring", difficulty: "hard", topic: "Hashing", subtopic: "Sliding Window", url: "https://leetcode.com/problems/minimum-window-substring/" },

  // Continue with remaining topics... (I'll add more in chunks)
  // SLIDING WINDOW, LINKED LIST, STACK, QUEUE, BINARY SEARCH, etc.
];

// This is a partial list - the full implementation will have all 500 questions
// For now, continuing with the key topics...

export const totalQuestions = 500; // Target total
