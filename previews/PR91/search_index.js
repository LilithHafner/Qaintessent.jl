var documenterSearchIndex = {"docs":
[{"location":"circuit/#Circuit-Construction-and-Usage","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The output of typical Quantum simulation is the expectation values of the output quantum state based on certain measurement operators. In Qaintessent.jl, this is accomplished by applying a Quantum Circuit(s) consisting of a  series of CircuitGate objects and Measurement Operators. See the corresponding sections for more information.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"CurrentModule = Qaintessent","category":"page"},{"location":"circuit/#CircuitGate","page":"Circuit Construction and Usage","title":"CircuitGate","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The basic building block of any Circuit is CircuitGates. These are constructed from basic quantum Gates. The constructor for CircuitGates is complicated: CircuitGate Helper Functions and a CircuitGate Example can be found below.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"CircuitGate\napply(cg::CircuitGate{M,G}, ψ::Vector{<:Complex}) where {M,G}","category":"page"},{"location":"circuit/#Qaintessent.CircuitGate","page":"Circuit Construction and Usage","title":"Qaintessent.CircuitGate","text":"CircuitGate{M,G} <: AbstractCircuitGate\n\nUnitary quantum circuit gate. M is the number of wires affected by the CircuitGate, N is the overall number of quantum \"wires\" of the circuit, G is the basic gate used to construct the CircuitGate.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.apply-Union{Tuple{G}, Tuple{M}, Tuple{CircuitGate{M,G},Array{var\"#s3\",1} where var\"#s3\"<:Complex}} where G where M","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(cg::CircuitGate{M,G}, ψ::Vector{<:Complex}) where {M,G}\n\nApply a CircuitGate{M,G} to a quantum state vector ψ.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#CircuitGate-Helper-Functions","page":"Circuit Construction and Usage","title":"CircuitGate Helper Functions","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"circuit_gate","category":"page"},{"location":"circuit/#Qaintessent.circuit_gate","page":"Circuit Construction and Usage","title":"Qaintessent.circuit_gate","text":"circuit_gate\n\nConstruct a CircuitGate object from basic gate types.\n\n\n\n\n\n","category":"function"},{"location":"circuit/#CircuitGate-Example","page":"Circuit Construction and Usage","title":"CircuitGate Example","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The Qaintessent.matrix function can be used to convert CircuitGate objects to a CSC sparse matrix representation","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n    N = 2\n    cnot = circuit_gate(1, XGate(), 2)\n\n    Qaintessent.matrix(cnot)","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The CircuitGate can then be applied to a quantum state in state vector form.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = ComplexF64[0, 0, 1, 0]\n\n    apply(cnot, ψ)","category":"page"},{"location":"circuit/#Moments","page":"Circuit Construction and Usage","title":"Moments","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"When performing a quantum simulation, it may be required to define an intermediate state; this can be used to optimize the mapping of gates to physical qubits. In Qaintessent.jl, we allow for groupings of CircuitGate(s) that can be run in parallel into Moments. A Moment Example is shown below.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Moment\napply(m::Moment, ψ::Vector{<:Complex})","category":"page"},{"location":"circuit/#Qaintessent.Moment","page":"Circuit Construction and Usage","title":"Qaintessent.Moment","text":"Moment\n\nRepresents an intermediate state within a given circuit.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.apply-Tuple{Moment,Array{var\"#s8\",1} where var\"#s8\"<:Complex}","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(m::Moment, ψ::Vector{<:Complex})\n\nreturns state vector of N qubits after applying a Moment{N} object to a quantum state vector of N qubits ψ\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Moment-Example","page":"Circuit Construction and Usage","title":"Moment Example","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n    N = 3\n    m = Moment(\n        [\n            circuit_gate(1, X, 2),\n            circuit_gate(3, RxGate(0.2π)),\n        ]\n    )\n    println(m) # hide","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The Moment can then be applied to a quantum state in state vector form.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = randn(ComplexF64, 2^N)\n\n    apply(m, ψ)","category":"page"},{"location":"circuit/#Measurement-Operators","page":"Circuit Construction and Usage","title":"Measurement Operators","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Measurement operators can be defined in a MeasurementOperator object. These are used in conjunction with a series ofCircuitGate objects to create a Circuit object. Usage of MeasurementOperator can be seen in the Circuit Example shown below.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"MeasurementOperator","category":"page"},{"location":"circuit/#Qaintessent.MeasurementOperator","page":"Circuit Construction and Usage","title":"Qaintessent.MeasurementOperator","text":"MeasurementOperator{M,G} <: AbstractCircuitGate\n\nGeneral complex operator. M is the number of wires affected by the CircuitGate, G is the basic gate used to construct the Operator.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Circuit","page":"Circuit Construction and Usage","title":"Circuit","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Circuit objects combine a Vector of Moment and a MeasurementOperator objects. Applying a Circuit to a given input quantum state outputs the various expectation values from the measurement operators defined in the MeasurementOperator objects. A simple circuit is shown in the Circuit Example.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Circuit\napply(c::Circuit{N}, ψ::Vector{<:Complex}) where {N}","category":"page"},{"location":"circuit/#Qaintessent.Circuit","page":"Circuit Construction and Usage","title":"Qaintessent.Circuit","text":"Circuit\n\nQuantum circuit consisting of a unitary gate chain and measurement operators.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.apply-Union{Tuple{N}, Tuple{Circuit{N},Array{var\"#s8\",1} where var\"#s8\"<:Complex}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(c::Circuit{N}, ψ::Vector{<:Complex}) where {N}\n\nreturns list of expectation values from measurement operators in c.meas after applying circuit gates in c.cgc on state vector of N qubits ψ\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Circuit-Example","page":"Circuit Construction and Usage","title":"Circuit Example","text":"","category":"section"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n    N = 3\n    cgc = CircuitGate[\n        circuit_gate(1, HadamardGate()),   \n        circuit_gate(2, HadamardGate()),\n        circuit_gate(3, HadamardGate()),\n    ]\n    I = ComplexF64[1 0 ; 0 1]\n    meas = [MeasurementOperator(X, (1,))]\n    c = Circuit{N}(cgc, meas)\n    println(c) # hide","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Applying the Circuit object to a 3-qubit quantum state all in the ground 0 state.","category":"page"},{"location":"circuit/","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = ComplexF64[1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]\n\n    apply(c, ψ)","category":"page"},{"location":"gates/#Gates","page":"Gates","title":"Gates","text":"","category":"section"},{"location":"gates/","page":"Gates","title":"Gates","text":"Any quantum operation can be represented as a unitary matrix, which are referred to as gates. In Qaintessent.jl, basic gates are implemented using the abstract base struct AbstractGate. The available basic quantum gates are seen below. Note that wire index information is still needed to when applying such gates. As such, these gates are permuted when creating the basic building blocks of Qaintessent.jl Quantum Circuit(s): CircuitGate(s).","category":"page"},{"location":"gates/","page":"Gates","title":"Gates","text":"CurrentModule = Qaintessent","category":"page"},{"location":"gates/","page":"Gates","title":"Gates","text":"AbstractGate","category":"page"},{"location":"gates/#Qaintessent.AbstractGate","page":"Gates","title":"Qaintessent.AbstractGate","text":"AbstractGate\n\nAbtract unitary quantum gate. N is the number of \"wires\" the gate acts on.\n\n\n\n\n\n","category":"type"},{"location":"gates/#Basic-Single-Qubit-Gates","page":"Gates","title":"Basic Single Qubit Gates","text":"","category":"section"},{"location":"gates/","page":"Gates","title":"Gates","text":"XGate\nYGate\nZGate\nHadamardGate\nSGate\nSdagGate\nTGate\nTdagGate","category":"page"},{"location":"gates/#Qaintessent.XGate","page":"Gates","title":"Qaintessent.XGate","text":"Pauli X gate\n\nX = beginpmatrix 0  1  1  0 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.YGate","page":"Gates","title":"Qaintessent.YGate","text":"Pauli Y gate\n\nY = beginpmatrix 0  -i  i  0 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.ZGate","page":"Gates","title":"Qaintessent.ZGate","text":"Pauli Z gate\n\nZ = beginpmatrix 1  0  0  -1 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.HadamardGate","page":"Gates","title":"Qaintessent.HadamardGate","text":"Hadamard gate\n\nH = fracsqrt beginpmatrix 1  1  1  1 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.SGate","page":"Gates","title":"Qaintessent.SGate","text":"S gate\n\nS = fracsqrt beginpmatrix 1  0  0  i endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.SdagGate","page":"Gates","title":"Qaintessent.SdagGate","text":"S† gate\n\nS^ = beginpmatrix 1  0  0  -i endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.TGate","page":"Gates","title":"Qaintessent.TGate","text":"T gate\n\nT = fracsqrt beginpmatrix 1  0  0  e^fraciπ4 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.TdagGate","page":"Gates","title":"Qaintessent.TdagGate","text":"T† gate\n\nT^ = beginpmatrix 1  0  0  e^-fraciπ4 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Parametrized-Single-Qubit-Gates","page":"Gates","title":"Parametrized Single Qubit Gates","text":"","category":"section"},{"location":"gates/","page":"Gates","title":"Gates","text":"RxGate\nRyGate\nRzGate\nRotationGate\nPhaseShiftGate","category":"page"},{"location":"gates/#Qaintessent.RxGate","page":"Gates","title":"Qaintessent.RxGate","text":"Rotation-X gate\n\nR_x(theta) = beginpmatrix cos(fractheta)  -isin(fractheta)  -isin(fractheta)  cos(fractheta) endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.RyGate","page":"Gates","title":"Qaintessent.RyGate","text":"Rotation-Y gate\n\nR_y(theta) = beginpmatrix cos(fractheta)  -sin(fractheta)  sin(fractheta)  cos(fractheta) endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.RzGate","page":"Gates","title":"Qaintessent.RzGate","text":"Rotation-Z gate\n\nR_z(theta) = beginpmatrix e^frac-itheta  0  0  e^fracitheta endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.RotationGate","page":"Gates","title":"Qaintessent.RotationGate","text":"General rotation operator gate: rotation by angle θ around unit vector n.\n\nR_vec(theta) = cos(fractheta)I - isin(fractheta)vecsigma  sigma = X Y Z\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.PhaseShiftGate","page":"Gates","title":"Qaintessent.PhaseShiftGate","text":"Phase shift gate\n\nP(phi) = beginpmatrix 1  0  0  e^iphi endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Two-Qubit-Gates","page":"Gates","title":"Two Qubit Gates","text":"","category":"section"},{"location":"gates/","page":"Gates","title":"Gates","text":"SwapGate","category":"page"},{"location":"gates/#Qaintessent.SwapGate","page":"Gates","title":"Qaintessent.SwapGate","text":"Swap gate\n\nSWAP = beginpmatrix 1  0  0  0  0  0  1  0  0  1  0  0  0  0  0  1 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Quantum-Gate-Matrix-Representation","page":"Gates","title":"Quantum Gate Matrix Representation","text":"","category":"section"},{"location":"gates/","page":"Gates","title":"Gates","text":"The Qaintessent.matrix function can be used to convert AbstractGate objects to their matrix representation. ","category":"page"},{"location":"gates/","page":"Gates","title":"Gates","text":"using Qaintessent\n\nx = XGate()\nQaintessent.matrix(x)","category":"page"},{"location":"models/#Models","page":"Models","title":"Models","text":"","category":"section"},{"location":"models/","page":"Models","title":"Models","text":"CurrentModule = Qaintessent","category":"page"},{"location":"models/","page":"Models","title":"Models","text":"qft_circuit(N::Integer)","category":"page"},{"location":"models/","page":"Models","title":"Models","text":"toffoli_circuit(cntrl::Tuple{<:Integer, <:Integer} , trg::Integer, N::Integer)","category":"page"},{"location":"models/","page":"Models","title":"Models","text":"vbe_adder_circuit(N::Integer)","category":"page"},{"location":"models/#Example","page":"Models","title":"Example","text":"","category":"section"},{"location":"models/","page":"Models","title":"Models","text":"using Qaintessent \n\nN = 3\nM = N*3 + 1\n\nadder = vbe_adder_circuit(N)\nψ = fill(0.0+0.0*im, 2^M)\na = 1\nb = 3\n\nindex = b << N + a\nψ[index+1] = 1.0\n\nψ = apply(adder, ψ)\n((findall(x->x==1, ψ)[1]-1)%(2^2N)) >> N\n\n# output\n\n4","category":"page"},{"location":"models/","page":"Models","title":"Models","text":"qcla_out_adder_circuit(N::Integer)","category":"page"},{"location":"models/#Example-2","page":"Models","title":"Example","text":"","category":"section"},{"location":"models/","page":"Models","title":"Models","text":"using Qaintessent \n\nN = 3\nM = 3N + 1\n\nadder = qcla_out_adder_circuit(N)\nψ = fill(0.0+0.0*im, 2^M)\na = 2\nb = 3\n\nindex = b << N + a\nψ[index+1] = 1.0\n\nψ = apply(adder, ψ)\n(findall(x->x==1, ψ)[1] - 1) >> 2N\n\n# output\n\n5","category":"page"},{"location":"models/","page":"Models","title":"Models","text":"qcla_inplace_adder_circuit(N::Integer)","category":"page"},{"location":"models/#Example-3","page":"Models","title":"Example","text":"","category":"section"},{"location":"models/","page":"Models","title":"Models","text":"using Qaintessent \n\nN = 3\nM = 3N\n\nadder = qcla_inplace_adder_circuit(N)\nψ = fill(0.0+0.0*im, 2^M)\na = 1\nb = 2\n\nindex = b << N + a\nψ[index+1] = 1.0\n\nψ = apply(adder, ψ)\n(findall(x->x==1, ψ)[1] - 1) >> N\n\n# output\n\n3","category":"page"},{"location":"view/#Display-Documentation","page":"Display Documentation","title":"Display Documentation","text":"","category":"section"},{"location":"view/","page":"Display Documentation","title":"Display Documentation","text":"CurrentModule = Qaintessent","category":"page"},{"location":"view/#Show","page":"Display Documentation","title":"Show","text":"","category":"section"},{"location":"view/","page":"Display Documentation","title":"Display Documentation","text":"Base.show(io::IO, c::Circuit{N}) where {N}","category":"page"},{"location":"view/#Base.show-Union{Tuple{N}, Tuple{IO,Circuit{N}}} where N","page":"Display Documentation","title":"Base.show","text":"Base.show(io::IO, c::Circuit) = Base.show(io, c.cgc)\n\nextends base show method to draw visual representation of a Circuit{N} object.\n\n\n\n\n\n","category":"method"},{"location":"qasm/#OpenQASM","page":"OpenQASM","title":"OpenQASM","text":"","category":"section"},{"location":"qasm/","page":"OpenQASM","title":"OpenQASM","text":"Qaintessent.jl provides some basic OpenQASM 2.0 support. This allows the importing of most QASM files as Circuit objects. Currently, only basic exports of Circuits is supported: custom measurements and multi-control CircuitGates cannot be exported. An example of OpenQASM usage is seen in the example below.","category":"page"},{"location":"qasm/","page":"OpenQASM","title":"OpenQASM","text":"CurrentModule = Qaintessent","category":"page"},{"location":"qasm/","page":"OpenQASM","title":"OpenQASM","text":"    qasm2cgc(txt::String)","category":"page"},{"location":"qasm/#Qaintessent.qasm2cgc-Tuple{String}","page":"OpenQASM","title":"Qaintessent.qasm2cgc","text":"qasm2cgc(txt::String)\n\nconverts OpenQASM 2.0 text to Circuit{N} object\n\n\n\n\n\n","category":"method"},{"location":"qasm/","page":"OpenQASM","title":"OpenQASM","text":"    cgc2qasm(c::Circuit{N}) where {N}","category":"page"},{"location":"qasm/#Qaintessent.cgc2qasm-Union{Tuple{Circuit{N}}, Tuple{N}} where N","page":"OpenQASM","title":"Qaintessent.cgc2qasm","text":"cgc2qasm(c::Circuit{N}) where {N}\n\nconverts Circuit{N} object to OpenQASM 2.0 representation\n\n\n\n\n\n","category":"method"},{"location":"qasm/#Example","page":"OpenQASM","title":"Example","text":"","category":"section"},{"location":"qasm/","page":"OpenQASM","title":"OpenQASM","text":"using Qaintessent\nusing LinearAlgebra\n\nN = 3\ncgc_ref = CircuitGate[\n    circuit_gate(3, XGate()),\n    circuit_gate(1, RyGate(0.3π)),\n    circuit_gate(2, RzGate(2.4)),\n    circuit_gate(2, TGate()),\n    circuit_gate(1, XGate(), 2),\n    circuit_gate(3, RzGate(0.3), 1)\n    ]\n\nmeas = MeasurementOperator(Matrix{Float64}(I, 2^N, 2^N), (1,2,3))\nc_ref = Circuit{N}(cgc_ref, [meas])\nqasm_rep = cgc2qasm(c_ref)\n\ncgc_from_qasm = qasm2cgc(qasm_rep)\n\ncgc_from_qasm\n# output\n    \n    3 —[X ]——————————————[Rz]—\n                          |\n    2 —[Rz]——[T ]———•—————————\n                    |     |\n    1 —[Ry]————————[X ]———•———","category":"page"},{"location":"#Qaintessent.jl-Documentation","page":"Home","title":"Qaintessent.jl Documentation","text":"","category":"section"},{"location":"#Table-of-Contents","page":"Home","title":"Table of Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"index.md\"]","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Qaintessent","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"gradients/#Gradients","page":"Gradients","title":"Gradients","text":"","category":"section"},{"location":"gradients/","page":"Gradients","title":"Gradients","text":"Qaintessent.jl can perform a backward pass through a circuit to compute gradients of a (fictitious) cost function with respect to the circuit parameters and input wavefunction. Since quantum gates are unitary, the intermediate quantum states can be re-computed on the fly during backwards traversal, i.e., need not be stored during the forward pass.","category":"page"},{"location":"gradients/","page":"Gradients","title":"Gradients","text":"See also this article regarding complex differentiation.","category":"page"},{"location":"gradients/","page":"Gradients","title":"Gradients","text":"CurrentModule = Qaintessent","category":"page"},{"location":"gradients/","page":"Gradients","title":"Gradients","text":"Qaintessent.gradients","category":"page"},{"location":"gradients/#Qaintessent.gradients","page":"Gradients","title":"Qaintessent.gradients","text":"gradients(c::Circuit{N}, ψ::AbstractVector, Δ::AbstractVector{<:Real}) where {N}\n\nPerform a backward pass to compute gradients of a (fictitious) cost function with respect to the circuit parameters of c and input wavefunction ψ. Δ contains the cost function gradients with respect to the circuit outputs (measurement operator averages). The gradients with respect to the circuit parameters are returned in a duplicate circuit; the overall return value is the tuple (dc::Circuit{N}, dψ::AbstractVector).\n\n\n\n\n\n","category":"function"}]
}
