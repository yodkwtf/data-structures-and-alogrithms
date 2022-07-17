## Sorting

Even though we have pre built sorting methods in languages they can turn out to be inefficient as our data grows and comes in different types. For this we can use different sorting algorithms to sort our data as we want.

#### Bubble Sort

We compare 2 values at a time and bubble up the largest of the 2 while moving step by step. We get the first sorted element after first iteration and we perform as many iterations as the elements in the data structure.

This is not very efficient since we run a lot of operations and the nested loops give a **time complexity of O(n^2)** whereas the **space complexity is O(1)**.

It is very simple to understand and one of the three sorting algorithms of the _Elementary Sorts_ which are like most used and simple sorting algorithms.

#### Selection Sort

We compare every value to the rest of the values that come after it in the data structure and find the smallest one of them all. Once found, we swap the smallest one with the current value we're comparing for.

We do this one by one for every value in the list and hence one by one start placing smallest values left to right, eventually returning a sorted data list.

Since we run nested loops, again we get a **time complexity of O(n^2)** and **space complexity of O(1)**.

#### Insertion Sort

We compare items one by one, starting with the second value in the list. If this value is greater than the value to the left of it, no changes are made. Otherwise this value is moved left and we keep comparing and moving until it meets a value that is less than it. The sort process then starts again with the next value.

Insertion sort is also not the most efficient of ways but in certain situations it can give results really fast.

It's pretty much the opposite direction and logic of bubble sort.

#### Merge Sort

It uses Divide and Conquer method. We divide the given list into two equal halves, calls itself for the two halves to sort them and then merges the two sorted halves using merge() function. We have to define the merge() function to perform the merging.

The sub-lists are divided again and again into halves until the list cannot be divided further. Then we combine the pair of one element lists into two-element lists, sorting them in the process. The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.

#### Quick Sort

Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.

After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.

#### Non-Comparison Sort

Unlike Quick & Merge sort which can sort any type of data, we can use non-comparison sorts like **Counting Sort** and **Radical Sort** which only sort fixed length integers.

They are faster than O(n logN) though as they have time complexity of O(n+k) or O(nk).

## Contents

- [Sort() method](<sort().js>)
- [Bubble Sort](bubbleSort.js)
- [Selection Sort](selectionSort.js)
- [Insertion Sort](insertionSort.js)
- [Merge Sort](mergeSort.js)
- [Merge Sort - Video Explanation](https://youtu.be/TzeBrDU-JaY)
- [Quick Sort](quickSort.js)
