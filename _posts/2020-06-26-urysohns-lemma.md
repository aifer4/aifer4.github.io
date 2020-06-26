---
layout: default
title: "Urhysohn's Lemma"
tags: math analysis
---

# Urysohn's Lemma

Urysohn's Lemma states that

> A topological space X is normal iff, for any two nonempty closed disjoint subsets $$A$$, and $$B$$ of $$X$$, there is a continuous map $$f:X\to[0,1]$$ such that $$f(A)=\{0\}$$ and $$f(B)=\{1\}$$. A function f with this property is called a Urysohn function. {% cite weissteinUrysohnLemma %}

To parse that definition, we need to know what is meant by a _normal topological space_.

> A normal space is a topological space in which for any two disjoint closed sets $$A$$,$$B$$ there are two disjoint open sets $$U$$ and $$V$$ such that $$A \subseteq U$$ and $$B \subseteq V$$. {% cite barileNormalSpace %}

![](/assets/T4-axiom.png){:width="50%"}

The above criteria is also known as the separation axiom $$T^4$$. Most topological spaces used in practice are normal. For example, all metric spaces are normal. This can be seen by taking $$s(A,B)$$ to be the minimum distance between disjoint closed sets $$A$$ and $$B$$:

$$
s(A,B) = \inf_{a\in A,b\in B} d(a,b)
$$

Then let $$U$$ be the set of points $$u$$ such that for all $$a \in A$$, $$d(u,a) < \frac{s(A,B)}{3}$$. Similarly, Let $$V$$ be the set of points $$v$$ such that for all $$b \in B$$, $$d(v,b) < \frac{s(A,B)}{3}$$. Clearly $$A \subset U$$ and $$B \subset V$$, and $$U \cap V$$ is empty by the triangle inequality.

Urysohn's lemma can be used to approximate indicator functions with continuous functions, which is useful in the proof of the Riesz representation theorem. Below is a demonstration of the construction of a Urysohn function separating a closed set from the complement of an open set it is contained in. Click and drag the red points to change the boundaries of the closed set, and the black points to change the boundaries of the open set.

<iframe src="https://www.desmos.com/calculator/5lwgqjgxvv?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
