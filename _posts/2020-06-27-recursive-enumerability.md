---
layout: default
title: "Recursive Enumerability"
tags: compsci
---

# Recursive Enumerability

A set $$S\subset \mathbb{N}$$ is called _recursively enumerable_ if there is a [Turing machine]({% post_url ./2020-06-27-turing-machine %}) $$M: \mathbb{N}\to \mathbb{N} \cup \{\nearrow\}$$ such that for all $$s\in S$$ there is some $$n \in \mathbb{N} $$ such that $$M(n) = s$$. Let $$ (n_k) $$ denote the sequence of inputs required to generate $$ S $$, i.e. $$ S = \{ M(n_k) : k \in \mathbb{N}\} $$.

It is then possible to construct a Turing machine $$ P $$ which halts if and only if its input is an element of $$ S $$. Given input $$ m $$, $$ P $$ begins computing terms in the sequence $$ M(n_k) $$. If $$ M(n_k) = m $$, $$ P $$ halts and outputs $$ 1 $$. If there is no such $$ n_k $$, then $$ P $$ doesn't halt.
