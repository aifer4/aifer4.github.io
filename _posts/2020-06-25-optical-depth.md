---
layout: default
title: "Optical Depth"
tags: cosmology recombination
---

# Optical Depth

The optical depth $$ \tau $$ is used to describe attenuation of light traveling through an absorptive medium.

The observed intensity $$ I $$ depends on the optical depth and the actual intensity $$ I_0 $$ as follows:

$$
I(x)=I_0e^{-\tau(x)}
$$

A "visibility function" $$ g(x) $$ can then be defined as the derivative of the attenuation factor.

$$
g(x) = -\frac{d\tau}{dx}e^{-\tau(x)}
$$

In cosmology, the surface of last scattering is determined by the optical depth, which is in turn determined by the density of electrons.

Assuming the density of baryons is known, we can find the optical depth by solving for the [free electron fraction]({% post_url ./2020-06-26-free-electron-fraction %}).

![](/assets/optical-depth-history.png)
