---
widget: blank
title:
summary: 'Proteins induce bilayer deformations through amphiphilic interactions'
date: "2022-08-21T00:00:00Z"

reading_time: true  # Show estimated reading time?
share: true # Show social sharing links?
profile: false  # Show author profile?
comments: false  # Show comments?

# Optional header image (relative to `assets/media/` folder).
header:
  caption: "dsfsdfsdf"
  image: "BilayerDeformationColorMaps"

design:
  columns: '1'
---

# Protein bilayer deformations

<img src="BilayerAndProteinSurface.png">

> A numerical boundary value method (BVM) for protein-induced bilayer deformation calculations

---
### Table of Contents

- [Problem Description](#problem-description)
- [Software](#software)
- [Benchmarks](#benchmarks)
- [Installation](#installation)
- [How To Compile And Run It](#how-to-compile-and-run-it)
- [References](#references)
- [Author Info](#author-info)

---

## Problem Description

#### Physical problem

How do lipid bilayer deformations induced by a protein depend on the protein's shape?

#### Framing of the problem in mathematics

<img src="equations.png " width="1500" height="250">

We truncation the infinite series that represents the general form of the bilayer deformation field to a finite number of terms, N, and applying the boundary conditions along the protein-bilayer interface to form a linear system of boundary equations which can be solved for the coefficients A_n,B_n, where n = 0,1,2,...,N. Protein shape data can be obtained through either experimental measurements or molecular dynamics simulations. Since the late 1990's many protein structures have been highly resolved through x-ray crystallography. Many of these structures are catalogued in the Protein Data Bank (PDB) website https://www.rcsb.org. Adaptive point distributions are needed for accelerated convergence for many protein shapes of experimental and theoretical interest, which will be discussed in our manuscript.


#### Computational obstacles and remedy

Since Basset functions grow exponentially with increasing order n, floating point overflow issues and matrix conditioning issues manifest. We use Arblib library for arbitrary precision floating point calculations, choosing an appropriate precision to avoid overflow and to offset numerical instability when solving the linear system of boundary equations. Numerical algorithms to solve the linear system of boundary conditions that minimize adding anymore instability to the problem, as well as being parallelizable, are discussed in the manuscript.

[Back To The Top](#boundary-value-method-for-protein-bilayer-thickness-deformations)

---

## Software

We use only open-source software, so our approach is easily accessible to anyone with a laptop or desktop computer.

- C++
- Arblib library (version 2.17 or newer)
- Carlos_Membrane_Project
- OpenMP
- OpenMPI (if you want to do calculations for multiple protein systems)
- Paraview

[Back To The Top](#boundary-value-method-for-protein-bilayer-thickness-deformations)

---

## Benchmarks

#### OMP thread count speed up and efficiency benchmarks

<img src="speedup.png " width="500" height="375"> <img src="efficiency.png " width="500" height="375">

Our plots show performance benchmarks for a truncation length N = 62 and using floating point precision of about 200 decimal places.
We got almost a 5x speed up using only 8 threads. Efficiency decreases with increased thread count.

#### Boundary value method benchmarked against a hybrid of finite elements and discrete Kirchoff triangles method (FEDKTM)
The hybrid FEDKTM converges with decreasing average mesh length.
Using paraview we can create a pipeline to extract the length data of the mesh elements used in the FEDKTM. We average the mesh lengths and plot the FEDKTM calculations as a function of average mesh length.

<img src="FEM_mesh.png " width="1000" height="600">

<img src="FEM_edges.png " width="1000" height="600">

<img src="FEM_celldata.png " width="1000" height="600">

After measuring the accuracy of the finite element method, we compared it with the converged BVM and found similar agreement to the accuracy of the FEDKTM, which shows the BVM appears to reliably converge to the correct result.

[Back To The Top](#boundary-value-method-for-protein-bilayer-thickness-deformations)

---

## References

1. Alas, C. D., & Haselwandter, C. A. (2022). Dependence of protein-induced lipid bilayer deformations on protein shape. arXiv. https://doi.org/10.48550/ARXIV.2208.05011

2. F. Johansson. Arb: efficient arbitrary-precision midpoint-radius interval arithmetic. IEEE Transactions on Computers, 66:1281-1292, 2017.

3. Leonardo Dagum and Ramesh Menon. Openmp: an industry standard api for shared-memory programming. Computational Science & Engineering, IEEE, 5(1):46-55, 1998.

4. openMPI (citation needed here)

5. Osman Kahraman, Peter D. Koch, William S. Klug, and Christoph A. Haselwandter. Architecture and function of mechanosensitive membrane protein lattices.              Scientific Reports, 6(1), Jan 2016.

6. Ayachit, Utkarsh, The ParaView Guide: A Parallel Visualization Application, Kitware, 2015, ISBN 978-1930934306


[Back To The Top](#boundary-value-method-for-protein-bilayer-thickness-deformations)

---

## Author Info

- LinkedIn - [Carlos Alas LI](https://www.linkedin.com/in/carlos-alas-6a4643160/)
- ResearchGate - [Carlos Alas RG](https://www.researchgate.net/profile/Carlos_Alas3)
This project was brought to life by Carlos D. Alas under the supervision of Christoph A. Haselwandter

[Back To The Top](#boundary-value-method-for-protein-bilayer-thickness-deformations)
