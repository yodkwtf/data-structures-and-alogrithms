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

## Contents

- [Sort() method](<sort().js>)
- [Bubble Sort](bubbleSort.js)
- [Selection Sort](selectionSort.js)
- [Insertion Sort](insertionSort.js)
