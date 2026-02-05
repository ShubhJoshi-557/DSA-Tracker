// Continuation of questions data - DP, Graphs, Advanced topics

type RawQ = [string, number, number, string, string?];

export const dpQuestions: RawQ[] = [
  // ============ DYNAMIC PROGRAMMING (68) ============
  // Basic DP
  ["Climbing Stairs", 0, 17, "Basic", "https://leetcode.com/problems/climbing-stairs/"],
  ["N-th Tribonacci Number", 0, 17, "Basic", "https://leetcode.com/problems/n-th-tribonacci-number/"],
  ["Min Cost Climbing Stairs", 0, 17, "Basic", "https://leetcode.com/problems/min-cost-climbing-stairs/"],
  ["House Robber", 1, 17, "Linear DP", "https://leetcode.com/problems/house-robber/"],
  ["House Robber II", 1, 17, "Linear DP", "https://leetcode.com/problems/house-robber-ii/"],
  ["Coin Change", 1, 17, "Classic", "https://leetcode.com/problems/coin-change/"],
  ["Best Time to Buy and Sell Stock", 0, 17, "Stocks", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"],
  ["Delete and Earn", 1, 17, "Linear DP", "https://leetcode.com/problems/delete-and-earn/"],
  ["Decode Ways", 1, 17, "Linear DP", "https://leetcode.com/problems/decode-ways/"],
  ["Perfect Squares", 1, 17, "Classic", "https://leetcode.com/problems/perfect-squares/"],
  ["Integer Break", 1, 17, "Basic", "https://leetcode.com/problems/integer-break/"],
  
  // 2D DP
  ["Coin Change II", 1, 17, "2D DP", "https://leetcode.com/problems/coin-change-2/"],
  ["Partition Equal Subset Sum", 1, 17, "Subset Sum", "https://leetcode.com/problems/partition-equal-subset-sum/"],
  ["Target Sum", 1, 17, "Subset Sum", "https://leetcode.com/problems/target-sum/"],
  ["Combination Sum IV", 1, 17, "Combinations", "https://leetcode.com/problems/combination-sum-iv/"],
  ["Longest Arithmetic Subsequence", 1, 17, "2D DP", "https://leetcode.com/problems/longest-arithmetic-subsequence/"],
  ["Longest Arithmetic Subsequence of Given Diff", 1, 17, "2D DP", "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/"],
  ["Partition Array for Maximum Sum", 2, 17, "Partitioning", "https://leetcode.com/problems/partition-array-for-maximum-sum/"],
  
  // DP on Grids
  ["Unique Paths", 1, 17, "Grid DP", "https://leetcode.com/problems/unique-paths/"],
  ["Unique Paths II", 1, 17, "Grid DP", "https://leetcode.com/problems/unique-paths-ii/"],
  ["Minimum Path Sum", 1, 17, "Grid DP", "https://leetcode.com/problems/minimum-path-sum/"],
  ["Triangle", 1, 17, "Grid DP", "https://leetcode.com/problems/triangle/"],
  ["Cherry Pickup", 2, 17, "Grid DP", "https://leetcode.com/problems/cherry-pickup/"],
  ["Cherry Pickup II", 2, 17, "Grid DP", "https://leetcode.com/problems/cherry-pickup-ii/"],
  ["Dungeon Game", 2, 17, "Grid DP", "https://leetcode.com/problems/dungeon-game/"],
  ["Minimum Falling Path Sum", 1, 17, "Grid DP", "https://leetcode.com/problems/minimum-falling-path-sum/"],
  ["Minimum Falling Path Sum II", 2, 17, "Grid DP", "https://leetcode.com/problems/minimum-falling-path-sum-ii/"],
  ["Max Difference Score in a Grid", 1, 17, "Grid DP", "https://leetcode.com/problems/maximum-difference-score-in-a-grid/"],
  
  // Knapsack Variants
  ["0/1 Knapsack", 1, 17, "Knapsack", "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1"],
  ["Unbounded Knapsack", 1, 17, "Knapsack", "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1"],
  ["Ones and Zeroes", 1, 17, "Knapsack", "https://leetcode.com/problems/ones-and-zeroes/"],
  ["Last Stone Weight II", 1, 17, "Knapsack", "https://leetcode.com/problems/last-stone-weight-ii/"],
  ["Rod Cutting", 1, 17, "Knapsack", "https://www.geeksforgeeks.org/problems/rod-cutting0840/1"],
  ["Shopping Offers", 1, 17, "Knapsack", "https://leetcode.com/problems/shopping-offers/"],
  ["Profitable Schemes", 2, 17, "Knapsack", "https://leetcode.com/problems/profitable-schemes/"],
  
  // Stock Problems
  ["Best Time to Buy Sell Stock II", 1, 17, "Stocks", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"],
  ["Best Time to Buy Sell Stock III", 2, 17, "Stocks", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"],
  ["Best Time to Buy Sell Stock IV", 2, 17, "Stocks", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"],
  ["Best Time to Buy Sell Stock with Fee", 1, 17, "Stocks", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"],
  ["Best Time to Buy Sell Stock Cooldown", 1, 17, "Stocks", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"],
  
  // LIS Pattern
  ["Longest Increasing Subsequence", 1, 17, "LIS", "https://leetcode.com/problems/longest-increasing-subsequence/"],
  ["Printing LIS", 1, 17, "LIS", "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/0"],
  ["Number of Longest Increasing Subsequence", 1, 17, "LIS", "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"],
  ["Largest Divisible Subset", 1, 17, "LIS", "https://leetcode.com/problems/largest-divisible-subset/"],
  ["Russian Doll Envelopes", 2, 17, "LIS", "https://leetcode.com/problems/russian-doll-envelopes/"],
  ["Maximum Height by Stacking Cuboids", 2, 17, "LIS", "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/"],
  ["Maximum Length of Pair Chain", 1, 17, "LIS", "https://leetcode.com/problems/maximum-length-of-pair-chain/"],
  
  // LCS Pattern
  ["Longest Common Subsequence", 1, 17, "LCS", "https://leetcode.com/problems/longest-common-subsequence/"],
  ["Print All LCS Sequences", 1, 17, "LCS", "https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1"],
  ["Longest Palindromic Subsequence", 1, 17, "LCS", "https://leetcode.com/problems/longest-palindromic-subsequence/"],
  ["Longest Palindromic Substring", 1, 17, "String DP", "https://leetcode.com/problems/longest-palindromic-substring/"],
  ["Palindromic Substrings", 1, 17, "String DP", "https://leetcode.com/problems/palindromic-substrings/"],
  ["Edit Distance", 1, 17, "LCS", "https://leetcode.com/problems/edit-distance/"],
  ["Wildcard Matching", 2, 17, "LCS", "https://leetcode.com/problems/wildcard-matching/"],
  ["Regular Expression Matching", 2, 17, "LCS", "https://leetcode.com/problems/regular-expression-matching/"],
  ["Shortest Common Supersequence", 2, 17, "LCS", "https://leetcode.com/problems/shortest-common-supersequence/"],
  ["Minimum Insertion to Make Palindrome", 2, 17, "LCS", "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"],
  ["Distinct Subsequences", 2, 17, "LCS", "https://leetcode.com/problems/distinct-subsequences/"],
  ["Interleaving String", 1, 17, "String DP", "https://leetcode.com/problems/interleaving-string/"],
  
  // String DP
  ["Word Break", 1, 17, "String DP", "https://leetcode.com/problems/word-break/"],
  ["Word Break II", 2, 17, "String DP", "https://leetcode.com/problems/word-break-ii/"],
  ["Longest String Chain", 1, 17, "String DP", "https://leetcode.com/problems/longest-string-chain/"],
  ["Longest Valid Parentheses", 2, 17, "String DP", "https://leetcode.com/problems/longest-valid-parentheses/"],
  ["Frog Jump", 2, 17, "DP", "https://leetcode.com/problems/frog-jump/"],
  
  // Matrix DP
  ["Maximal Square", 1, 17, "Matrix DP", "https://leetcode.com/problems/maximal-square/"],
  ["Count Square Submatrices with All Ones", 1, 17, "Matrix DP", "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"],
  ["Maximal Rectangle", 2, 17, "Matrix DP", "https://leetcode.com/problems/maximal-rectangle/"],
  ["Number of Submatrices Sum to Target", 2, 17, "Matrix DP", "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/"],
  
  // MCM Pattern
  ["Matrix Chain Multiplication", 2, 17, "MCM", "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1"],
  ["Burst Balloons", 2, 17, "MCM", "https://leetcode.com/problems/burst-balloons/"],
  ["Minimum Score Triangulation of Polygon", 1, 17, "MCM", "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/"],
  ["Palindrome Partitioning II", 2, 17, "MCM", "https://leetcode.com/problems/palindrome-partitioning-ii/"],
  ["Strange Printer", 2, 17, "MCM", "https://leetcode.com/problems/strange-printer/"],
  
  // Kadane's Algorithm
  ["Maximum Subarray", 1, 17, "Kadane", "https://leetcode.com/problems/maximum-subarray/"],
  ["Maximum Product Subarray", 1, 17, "Kadane", "https://leetcode.com/problems/maximum-product-subarray/"],
  ["Max Subarray Sum One Deletion", 1, 17, "Kadane", "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/"],
  ["Maximum Sum Circular Subarray", 1, 17, "Kadane", "https://leetcode.com/problems/maximum-sum-circular-subarray/"],
  ["K-Concatenation Maximum Sum", 1, 17, "Kadane", "https://leetcode.com/problems/k-concatenation-maximum-sum/"],
  ["Longest Turbulent Subarray", 1, 17, "Kadane", "https://leetcode.com/problems/longest-turbulent-subarray/"],
  
  // Misc DP
  ["Length of Longest Fibonacci Subsequence", 1, 17, "Misc DP", "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/"],
  ["Stone Game", 1, 17, "Game Theory", "https://leetcode.com/problems/stone-game/"],
  ["Stone Game II", 1, 17, "Game Theory", "https://leetcode.com/problems/stone-game-ii/"],
  ["Stone Game III", 2, 17, "Game Theory", "https://leetcode.com/problems/stone-game-iii/"],
];

export const graphQuestions: RawQ[] = [
  // ============ GRAPHS (60) ============
  // DFS & BFS
  ["Find if Path Exists in Graph", 0, 18, "Basic", "https://leetcode.com/problems/find-if-path-exists-in-graph/"],
  ["Find The Town Judge", 0, 18, "Basic", "https://leetcode.com/problems/find-the-town-judge/"],
  ["Keys and Rooms", 1, 18, "DFS", "https://leetcode.com/problems/keys-and-rooms/"],
  ["Number of Provinces", 1, 18, "DFS", "https://leetcode.com/problems/number-of-provinces/"],
  ["Clone Graph", 1, 18, "DFS", "https://leetcode.com/problems/clone-graph/"],
  ["Word Ladder", 2, 18, "BFS", "https://leetcode.com/problems/word-ladder/"],
  ["Snakes and Ladders", 1, 18, "BFS", "https://leetcode.com/problems/snakes-and-ladders/"],
  ["Open the Lock", 1, 18, "BFS", "https://leetcode.com/problems/open-the-lock/"],
  ["Shortest Path Visiting All Nodes", 2, 18, "BFS", "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"],
  
  // Cycle Detection
  ["Detect Cycle in Undirected Graph", 1, 18, "Cycle", "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/0"],
  ["Detect Cycle in Directed Graph", 1, 18, "Cycle", "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"],
  ["Detect Cycles in 2D Grid", 1, 18, "Cycle", "https://leetcode.com/problems/detect-cycles-in-2d-grid/"],
  ["Is Graph Bipartite?", 1, 18, "Bipartite", "https://leetcode.com/problems/is-graph-bipartite/"],
  ["Possible Bipartition", 1, 18, "Bipartite", "https://leetcode.com/problems/possible-bipartition/"],
  ["Shortest Cycle in a Graph", 2, 18, "Cycle", "https://leetcode.com/problems/shortest-cycle-in-a-graph/"],
  ["Check Odd Length Cycle in Graph", 1, 18, "Cycle","https://www.naukri.com/code360/library/check-if-a-graph-has-a-cycle-of-odd-length"],
  
  // Topological Sort
  ["Course Schedule", 1, 18, "Topo Sort", "https://leetcode.com/problems/course-schedule/"],
  ["Course Schedule II", 1, 18, "Topo Sort", "https://leetcode.com/problems/course-schedule-ii/"],
  ["Course Schedule IV", 1, 18, "Topo Sort", "https://leetcode.com/problems/course-schedule-iv/"],
  ["Find Eventual Safe States", 1, 18, "Topo Sort", "https://leetcode.com/problems/find-eventual-safe-states/"],
  ["Alien Dictionary", 2, 18, "Topo Sort", "https://leetcode.com/problems/alien-dictionary/"],
  ["All Ancestors of a Node in DAG", 1, 18, "Topo Sort", "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/"],
  ["Parallel Courses III", 2, 18, "Topo Sort", "https://leetcode.com/problems/parallel-courses-iii/"],
  ["Minimum Height Trees", 1, 18, "Topo Sort", "https://leetcode.com/problems/minimum-height-trees/"],
  ["Longest Increasing Path in a Matrix", 2, 18, "Topo + DFS", "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"],
  ["Largest Color Value in Directed Graph", 2, 18, "Topo + DP", "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/"],
  ["Build a Matrix With Conditions", 2, 18, "Topo Sort", "https://leetcode.com/problems/build-a-matrix-with-conditions/"],
  
  // Flood Fill & Multi-Source BFS
  ["Flood Fill", 0, 18, "Flood Fill", "https://leetcode.com/problems/flood-fill/"],
  ["Island Perimeter", 0, 18, "Flood Fill", "https://leetcode.com/problems/island-perimeter/"],
  ["Number of Islands", 1, 18, "Flood Fill", "https://leetcode.com/problems/number-of-islands/"],
  ["Max Area of Island", 1, 18, "Flood Fill", "https://leetcode.com/problems/max-area-of-island/"],
  ["Count Sub Islands", 1, 18, "Flood Fill", "https://leetcode.com/problems/count-sub-islands/"],
  ["Find All Groups of Farmland", 1, 18, "Flood Fill", "https://leetcode.com/problems/find-all-groups-of-farmland/"],
  ["Rotting Oranges", 1, 18, "Multi-source BFS", "https://leetcode.com/problems/rotting-oranges/"],
  ["Number of Enclaves", 1, 18, "Flood Fill", "https://leetcode.com/problems/number-of-enclaves/"],
  ["Surrounded Regions", 1, 18, "Flood Fill", "https://leetcode.com/problems/surrounded-regions/"],
  ["Number of Closed Islands", 1, 18, "Flood Fill", "https://leetcode.com/problems/number-of-closed-islands/"],
  ["01 Matrix", 1, 18, "Multi-source BFS", "https://leetcode.com/problems/01-matrix/"],
  ["Shortest Bridge", 1, 18, "Multi-source BFS", "https://leetcode.com/problems/shortest-bridge/"],
  ["Pacific Atlantic Water Flow", 1, 18, "Multi-source DFS", "https://leetcode.com/problems/pacific-atlantic-water-flow/"],
  ["Walls And Gates", 1, 18, "Multi-source BFS", "https://leetcode.com/problems/walls-and-gates/"],
  
  // Shortest Path Algorithms
  ["Network Delay Time", 1, 18, "Dijkstra", "https://leetcode.com/problems/network-delay-time/"],
  ["Cheapest Flights Within K Stops", 1, 18, "Bellman Ford", "https://leetcode.com/problems/cheapest-flights-within-k-stops/"],
  ["Path with Maximum Probability", 1, 18, "Dijkstra", "https://leetcode.com/problems/path-with-maximum-probability/"],
  ["Path with Minimum Effort", 1, 18, "Dijkstra", "https://leetcode.com/problems/path-with-minimum-effort/"],
  ["Min Cost Valid Path in a Grid", 2, 18, "0-1 BFS", "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"],
  ["Shortest Path in Binary Matrix", 1, 18, "BFS", "https://leetcode.com/problems/shortest-path-in-binary-matrix/"],
  ["Bus Routes", 2, 18, "BFS", "https://leetcode.com/problems/bus-routes/"],
  ["Second Minimum Time to Reach", 2, 18, "BFS", "https://leetcode.com/problems/second-minimum-time-to-reach-destination/"],
  ["City with Smallest Neighbors", 1, 18, "Floyd Warshall", "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"],
  ["Minimum Cost to Convert String I", 1, 18, "Floyd Warshall", "https://leetcode.com/problems/minimum-cost-to-convert-string-i/"],
  ["Number of Ways to Arrive at Destination", 1, 18, "Dijkstra", "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"],
  ["Swim In Rising Water", 2, 18, "BS + DFS", "https://leetcode.com/problems/swim-in-rising-water/"],
  ["Reconstruct Itinerary", 2, 18, "Eulerian", "https://leetcode.com/problems/reconstruct-itinerary/"],
  
  // Disjoint Set Union (Union-Find)
  ["Redundant Connection", 1, 18, "DSU", "https://leetcode.com/problems/redundant-connection/"],
  ["Accounts Merge", 1, 18, "DSU", "https://leetcode.com/problems/accounts-merge/"],
  ["Most Stones Removed Same Row/Col", 1, 18, "DSU", "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"],
  ["Operations to Make Network Connected", 1, 18, "DSU", "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"],
  ["Checking Edge Length Limited Paths", 2, 18, "DSU", "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/"],
  ["Remove Max Edges Keep Traversable", 2, 18, "DSU", "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/"],
  ["Satisfiability of Equality Equations", 1, 18, "DSU", "https://leetcode.com/problems/satisfiability-of-equality-equations/"],
  ["Smallest String With Swaps", 1, 18, "DSU", "https://leetcode.com/problems/smallest-string-with-swaps/"],
  ["Graph Valid Tree", 1, 18, "DSU", "https://leetcode.com/problems/graph-valid-tree/"],
  ["Number of Connected Components", 1, 18, "DSU", "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"],
  ["GCD Sort of an Array", 2, 18, "DSU", "https://leetcode.com/problems/gcd-sort-of-an-array/"],
  ["Greatest Common Divisor Traversal", 2, 18, "DSU", "https://leetcode.com/problems/greatest-common-divisor-traversal/"],
  ["Evaluate Division", 1, 18, "DFS/DSU", "https://leetcode.com/problems/evaluate-division/"],
  
  // MST
  ["Min Cost to Connect All Points", 1, 18, "MST", "https://leetcode.com/problems/min-cost-to-connect-all-points/"],
  ["Find Critical Pseudo-Critical Edges", 2, 18, "MST", "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/"],
  
  // Advanced Graph
  ["Critical Connections in a Network", 2, 18, "Bridges", "https://leetcode.com/problems/critical-connections-in-a-network/"],
  ["Strongly Connected Components", 2, 18, "SCC", "https://www.geeksforgeeks.org/dsa/strongly-connected-components/"],
  ["Articulation Points", 2, 18, "Cut Vertices", "https://www.geeksforgeeks.org/dsa/articulation-points-or-cut-vertices-in-a-graph/"],
];

export const advancedQuestions: RawQ[] = [
  // ============ ADVANCED DP (20) ============
  // Bitmask DP
  ["Partition to K Equal Sum Subsets", 1, 19, "Bitmask DP", "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/"],
  ["Stickers to Spell Word", 2, 19, "Bitmask DP", "https://leetcode.com/problems/stickers-to-spell-word/"],
  ["Smallest Sufficient Team", 2, 19, "Bitmask DP", "https://leetcode.com/problems/smallest-sufficient-team/"],
  ["Maximum Students Taking Exam", 2, 19, "Bitmask DP", "https://leetcode.com/problems/maximum-students-taking-exam/"],
  ["Number of Ways Different Hats", 2, 19, "Bitmask DP", "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/"],
  ["Min Cost Connect Two Groups", 2, 19, "Bitmask DP", "https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/"],
  ["Shortest Path Visiting All Nodes", 2, 19, "Bitmask DP", "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"],
  
  // Digit DP
  ["Non-negative Integers without Consecutive Ones", 2, 19, "Digit DP", "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/"],
  ["Numbers At Most N Given Digit Set", 2, 19, "Digit DP", "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/"],
  ["Count Powerful Integers", 2, 19, "Digit DP", "https://leetcode.com/problems/count-the-number-of-powerful-integers/"],
  
  // DP on Trees
  ["House Robber III", 1, 19, "Tree DP", "https://leetcode.com/problems/house-robber-iii/"],
  ["Binary Tree Maximum Path Sum", 2, 19, "Tree DP", "https://leetcode.com/problems/binary-tree-maximum-path-sum/"],
  ["Longest ZigZag Path in Tree", 1, 19, "Tree DP", "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/"],
  ["Sum of Distances in Tree", 2, 19, "Tree DP", "https://leetcode.com/problems/sum-of-distances-in-tree/"],
  ["Max Points After Collecting Coins", 2, 19, "Tree DP", "https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/"],
  ["Maximum Sum BST in Binary Tree", 2, 19, "Tree DP", "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/"],
  ["Time Taken to Mark All Nodes", 2, 19, "Tree DP", "https://leetcode.com/problems/time-taken-to-mark-all-nodes/"],
  
  // Hard DP
  ["Super Egg Drop", 2, 19, "Hard DP", "https://leetcode.com/problems/super-egg-drop/"],
  ["Race Car", 2, 19, "Hard DP", "https://leetcode.com/problems/race-car/"],
  ["Count Different Palindromic Subsequences", 2, 19, "Hard DP", "https://leetcode.com/problems/count-different-palindromic-subsequences/"],
  
  // ============ STRING MATCHING (8) ============
  ["KMP Algorithm for Pattern Searching", 1, 20, "Pattern Matching", "https://www.geeksforgeeks.org/dsa/kmp-algorithm-for-pattern-searching/"],
  ["Rabin-Karp Algorithm", 1, 20, "Pattern Matching", "https://www.geeksforgeeks.org/dsa/rabin-karp-algorithm-for-pattern-searching/"],
  ["Z Algorithm", 1, 20, "Pattern Matching", "https://www.geeksforgeeks.org/dsa/z-algorithm-linear-time-pattern-searching-algorithm/"],
  ["Find Substring with Given Hash Value", 2, 20, "Rolling Hash", "https://leetcode.com/problems/find-substring-with-given-hash-value/"],
  ["Longest Happy Prefix", 2, 20, "KMP", "https://leetcode.com/problems/longest-happy-prefix/"],
  ["Shortest Palindrome", 2, 20, "KMP", "https://leetcode.com/problems/shortest-palindrome/"],
  ["Longest Duplicate Substring", 2, 20, "Rabin-Karp", "https://leetcode.com/problems/longest-duplicate-substring/"],
  ["Subarrays That Match a Pattern II", 2, 20, "KMP", "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/"],
  
  // ============ ADVANCED ALGORITHMS (5) ============
  ["Range Sum Query - Mutable", 1, 21, "Segment Tree", "https://leetcode.com/problems/range-sum-query-mutable/"],
  ["Count of Range Sum", 2, 21, "Segment Tree", "https://leetcode.com/problems/count-of-range-sum/"],
  ["Falling Squares", 2, 21, "Segment Tree", "https://leetcode.com/problems/falling-squares/"],
  ["Range Module", 2, 21, "Segment Tree", "https://leetcode.com/problems/range-module/"],
  ["Longest Substring of One Repeating Char", 2, 21, "Segment Tree", "https://leetcode.com/problems/longest-substring-of-one-repeating-character/"],
  
  // ============ MISCELLANEOUS (13) ============
  ["Excel Sheet Column Title", 0, 22, "Math", "https://leetcode.com/problems/excel-sheet-column-title/"],
  ["GCD of Strings", 0, 22, "Math", "https://leetcode.com/problems/greatest-common-divisor-of-strings/"],
  ["Plus One", 0, 22, "Math", "https://leetcode.com/problems/plus-one/"],
  ["Multiply Strings", 1, 22, "Math", "https://leetcode.com/problems/multiply-strings/"],
  ["Roman to Integer", 0, 22, "Math", "https://leetcode.com/problems/roman-to-integer/"],
  ["Reverse Integer", 1, 22, "Math", "https://leetcode.com/problems/reverse-integer/"],
  ["Verifying An Alien Dictionary", 0, 22, "String", "https://leetcode.com/problems/verifying-an-alien-dictionary/"],
  ["Concatenation of Array", 0, 22, "Array", "https://leetcode.com/problems/concatenation-of-array/"],
  ["Number of Ways to Reorder Array Same BST", 2, 22, "Combinatorics", "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/"],
  ["Minimum Operations Make X and Y Equal", 1, 22, "BFS", "https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/"],
  ["Max Points on a Line", 2, 22, "Geometry", "https://leetcode.com/problems/max-points-on-a-line/"],
  ["Nim Game", 0, 22, "Game Theory", "https://leetcode.com/problems/nim-game/"],
  ["Predict the Winner", 1, 22, "Game Theory", "https://leetcode.com/problems/predict-the-winner/"],
];

// Combinatorics & Game Theory questions (extras for the topic)
export const combinatoricsQuestions: RawQ[] = [
  ["Rectangle Overlap", 0, 22, "Geometry", "https://leetcode.com/problems/rectangle-overlap/"],
  ["Rectangle Area", 1, 22, "Geometry", "https://leetcode.com/problems/rectangle-area/"],
  ["Minimum Area Rectangle", 1, 22, "Geometry", "https://leetcode.com/problems/minimum-area-rectangle/"],
  ["Count All Valid Pickup and Delivery Options", 2, 22, "Combinatorics", "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/"],
  ["Can I Win", 1, 22, "Game Theory", "https://leetcode.com/problems/can-i-win/"],
  ["Cat and Mouse", 2, 22, "Game Theory", "https://leetcode.com/problems/cat-and-mouse/"],
  ["Detect Squares", 1, 22, "Geometry", "https://leetcode.com/problems/detect-squares/"],
];
