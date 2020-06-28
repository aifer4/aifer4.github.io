---
layout: default
title: "Turing Machine"
tags: compsci
---

# Turing Machine

A Turing Machine consists of a "tape" and a "head". The tape is a row of squares which extends to infinity in both directions, and each square can be empty or hold a symbol. The head is a device which can move around on the tape, writing and erasing symbols. The machine operates in discrete steps. At each step, the head can write a symbol to the square it is located at, overwriting the (potentially empty) square, or erase the contents of the square, or leave the square alone. Then, the head can move one square to the left, or one square to the right, or it can stay still. {%cite immermanComputabilityComplexity2018 %}

Below is a "manual" Turing machine, where the head is operated using buttons.

<iframe src="/turing-index.html" width="500px" height="100px" style="border: 1px solid #ccc" frameborder=0></iframe>

The behavior of the Turing machine is governed by the tuple $$(Q, \Sigma, \delta)$$, where

- $$Q$$ is a finite set of states that the machine itself can be in (e.g. $$ \{A,B,C\} $$). $$Q$$ contains a special _accept_ state, and when the machine is put into this state it signifies the termination of the program.
- $$\Sigma$$ is a finite set of symbols that can appear on the tape (e.g $$ \{ 0, 1, \square\} $$)
- $$\delta: Q\times \Sigma \to Q\times\Sigma \times \{-1,0,1\}$$ is a transition function, whose input is the current state and the contents of the current square, and whose outputs are the next state, the symbol to put in the current square, and the number of steps to move the head to the right ($$-1$$, $$0$$, or $$1$$).

A Turing machine $$M$$ can be seen as a function. The input is represented as a binary number and written on the tape before computation starts, starting at the head's starting position. If the machine halts and the final state of the tape is formatted as a binary number (i.e. no leading zeros or empty squares between nonempty squares), then the value of that number is the output, and the machine is said to _accept_ the input. Otherwise, the output is undefined (written $$\nearrow$$). Therefore a Turing machine is a function $$M: \mathbb{N}\to \mathbb{N} \cup \{\nearrow\}$$.

Furthermore, the set of all Turing machines is countable, because each of $$\Sigma$$, $$\delta$$, and $$Q$$ are finite. We can therefore give an enumeration of Turing machines $$(M_i)$$. It can be assumed, without loss of generality, that $$\Sigma$$ is always $$\{ 0, 1, \square \}$$

A set $$S\subset \mathbb{N}$$ is called _recursively enumerable_ if there is a turing machine $$M: \mathbb{N}\to \mathbb{N} \cup \{\nearrow\}$$ such that for all $$s\in S$$ there is some $$n \in \mathbb{N} $$ such that $$M(n) = s$$.
