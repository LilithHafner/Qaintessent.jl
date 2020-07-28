var documenterSearchIndex = {"docs":
[{"location":"circuit/#Circuit-Construction-and-Usage-1","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The output of typical Quantum simulation is the expectation values of the output quantum state based on certain measurement operators. In Qaintessent.jl, this is accomplished by applying a Quantum Circuit(s) consisting of a  CircuitGateChain and Measurement Operators. See the corresponding sections for more information.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"CurrentModule = Qaintessent","category":"page"},{"location":"circuit/#CircuitGate-1","page":"Circuit Construction and Usage","title":"CircuitGate","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The basic building block of any CircuitGateChain is CircuitGates. These are constructed from basic quantum Gates. The constructor for CircuitGates is complicated: CircuitGate Helper Functions and a CircuitGate Example can be found below.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"CircuitGate\nCircuitGate{M,N,G}(::NTuple{M, <:Integer}, ::G) where {M,N,G}\nCircuitGate(::NTuple{M, <:Integer}, ::AbstractGate{M}, N::Integer) where {M}\napply(cg::CircuitGate{M,N,G}, ψ::AbstractVector) where {M,N,G}","category":"page"},{"location":"circuit/#Qaintessent.CircuitGate","page":"Circuit Construction and Usage","title":"Qaintessent.CircuitGate","text":"CircuitGate{M,N,G} <: AbstractCircuitGate{N}\n\nUnitary quantum circuit gate. M is the number of wires affected by the CircuitGate, N is the overall number of quantum \"wires\" of the circuit, G is the basic gate used to construct the CircuitGate.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.CircuitGate-Union{Tuple{G}, Tuple{N}, Tuple{M}, Tuple{Tuple{Vararg{#s12,M}} where #s12<:Integer,G}} where G where N where M","page":"Circuit Construction and Usage","title":"Qaintessent.CircuitGate","text":"CircuitGate{M,N,G}(iwire::NTuple{M,<:Integer}, gate::G) where {M,N,G}\n\nCreates a CircuitGate{M,N,G} object. M is the number of wires affected by the CircuitGate, N is the overall number of quantum \"wires\" of the circuit, G is the basic gate used to construct the CircuitGate.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Qaintessent.CircuitGate-Union{Tuple{M}, Tuple{Tuple{Vararg{#s12,M}} where #s12<:Integer,AbstractGate{M},Integer}} where M","page":"Circuit Construction and Usage","title":"Qaintessent.CircuitGate","text":"CircuitGate(iwire::NTuple{M,<:Integer}, gate::AbstractGate{M}, N) where {M}\n\nCreates a CircuitGate{M,N,G} object. M is the number of wires affected by the CircuitGate, N is the overall number of quantum \"wires\" of the circuit, G is the basic gate used to construct the CircuitGate.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Qaintessent.apply-Union{Tuple{G}, Tuple{N}, Tuple{M}, Tuple{CircuitGate{M,N,G},AbstractArray{T,1} where T}} where G where N where M","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(cg::CircuitGate{M,N,G}, ψ::AbstractVector) where {M,N,G}\n\nreturns state vector of N qubits after applying a CircuitGate{M, N, G} object to a quantum state vector of N qubits ψ.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#CircuitGate-Helper-Functions-1","page":"Circuit Construction and Usage","title":"CircuitGate Helper Functions","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"single_qubit_circuit_gate(iwire::Integer, gate::AbstractGate{1}, N::Integer)\ntwo_qubit_circuit_gate(iwire1::Integer, iwire2::Integer, gate::AbstractGate{2}, N::Integer)\ncontrolled_circuit_gate","category":"page"},{"location":"circuit/#Qaintessent.single_qubit_circuit_gate-Tuple{Integer,AbstractGate{1},Integer}","page":"Circuit Construction and Usage","title":"Qaintessent.single_qubit_circuit_gate","text":"single_qubit_circuit_gate(iwire::Integer, gate::AbstractGate{1}, N::Integer)\n\nConstruct a CircuitGate{1,N,G} object of basic gate type gate affecting wire iwire.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Qaintessent.two_qubit_circuit_gate-Tuple{Integer,Integer,AbstractGate{2},Integer}","page":"Circuit Construction and Usage","title":"Qaintessent.two_qubit_circuit_gate","text":"two_qubit_circuit_gate(iwire1::Integer, iwire2::Integer, gate::AbstractGate{2}, N::Integer)\n\nConstruct a CircuitGate{2,N,G} object of basic gate type gate affecting wires iwire1 and iwire2.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Qaintessent.controlled_circuit_gate","page":"Circuit Construction and Usage","title":"Qaintessent.controlled_circuit_gate","text":"rcuit_gate(icntrl::Integer, itarget::Integer, U::AbstractGate{1}, N::Integer)\n\nConstruct a CircuitGate{2,N,G} object of basic gate type U controlled by wire icntrl and affecting wire itarget.\n\n\n\n\n\ncontrolled_circuit_gate(icntrl::Integer, itarget::NTuple{M,<:Integer}, U::AbstractGate{M}, N::Integer) where {M}\n\nConstruct a CircuitGate{M+1,N,G} object of basic gate type U controlled by wire icntrl and affecting wires in tuple itarget.\n\n\n\n\n\ncontrolled_circuit_gate(icntrl::NTuple{K,<:Integer}, itarget::Integer, U::AbstractGate{1}, N::Integer)  where {K}\n\nConstruct a CircuitGate{K+1,N,G} object of basic gate type U controlled by wires in tuple icntrl and affecting wire itarget.\n\n\n\n\n\ncontrolled_circuit_gate(icntrl::NTuple{K,<:Integer}, itarget::NTuple{M,<:Integer}, U::AbstractGate{M}, N::Integer) where {K,M}\n\nConstruct a CircuitGate{M+K,N,G} object of basic gate type U controlled by wires in tuple icntrl and affecting wires in tuple itarget.\n\n\n\n\n\n","category":"function"},{"location":"circuit/#CircuitGate-Example-1","page":"Circuit Construction and Usage","title":"CircuitGate Example","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The Qaintessent.matrix function can be used to convert CircuitGate objects to a CSC sparse matrix representation","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n    N = 2\n    cnot = controlled_circuit_gate(1, 2, XGate(), N)\n\n    Qaintessent.matrix(cnot)","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The CircuitGate can then be applied to a quantum state in state vector form.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = [0, 0, 1, 0]\n\n    apply(cnot, ψ)","category":"page"},{"location":"circuit/#Moments-1","page":"Circuit Construction and Usage","title":"Moments","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"When performing a quantum simulation, it may be required to define an intermediate state; this can be used to optimize the mapping of gates to physical qubits. In Qaintessent.jl, we allow for groupings of CircuitGate(s) that can be run in parallel into Moments. A Moment Example is shown below.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Moment\nMoment{N}(g::AbstractCircuitGate{N}) where {N}\napply(m::Moment{N}, ψ::AbstractVector) where {N}","category":"page"},{"location":"circuit/#Qaintessent.Moment","page":"Circuit Construction and Usage","title":"Qaintessent.Moment","text":"AbstractMoment{N}\n\nRepresents an intermediate state within a given circuit. N is the overall number of quantum \"wires\" of the circuit.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.Moment-Union{Tuple{AbstractCircuitGate{N}}, Tuple{N}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.Moment","text":"Moment{N}(g::AbstractCircuitGate{N}) where {N}\n\nCreate a Moment{N} object consisting of a single CircuitGate{N} object.\n\n\n\n\n\nMoment{N}(g::AbstractVector{<:AbstractCircuitGate{N}}) where {N}\n\nCreate a Moment{N} object consisting of multiple CircuitGate{N} objects.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Qaintessent.apply-Union{Tuple{N}, Tuple{Moment{N},AbstractArray{T,1} where T}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(m::Moment{N}, ψ::AbstractVector) where {N}\n\nreturns state vector of N qubits after applying a Moment{N} object to a quantum state vector of N qubits ψ\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Moment-Example-1","page":"Circuit Construction and Usage","title":"Moment Example","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n\n    N = 3\n    m = Moment{N}(\n        [\n            controlled_circuit_gate(1, 2, XGate(), N),\n            single_qubit_circuit_gate(3, RxGate(0.2π), N),\n        ]\n    )\n    println(m) # hide","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The Moment can then be applied to a quantum state in state vector form.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = randn(ComplexF64, 2^N)\n    \n    apply(m, ψ)","category":"page"},{"location":"circuit/#CircuitGateChain-1","page":"Circuit Construction and Usage","title":"CircuitGateChain","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"CircuitGateChains can be constructed in two ways, either by providing a Vector of CircuitGate objects or Moment objects. A CircuitGateChain Example can be seen below.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"CircuitGateChain\nCircuitGateChain{N}(gates::AbstractVector{<:AbstractCircuitGate{N}}) where {N}\napply(c::CircuitGateChain{N}, ψ::AbstractVector) where {N}","category":"page"},{"location":"circuit/#Qaintessent.CircuitGateChain","page":"Circuit Construction and Usage","title":"Qaintessent.CircuitGateChain","text":"CircuitGateChain{N}\n\nChain of quantum circuit gates in a circuit of N qubits.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.CircuitGateChain-Union{Tuple{AbstractArray{#s12,1} where #s12<:AbstractCircuitGate{N}}, Tuple{N}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.CircuitGateChain","text":"CircuitGateChain{N}(gates::AbstractVector{<:AbstractCircuitGate{N}}) where {N}\n\nChain of quantum circuit gates in a circuit of N qubits. Constructed from vector of CircuitGate{N} objects.\n\n\n\n\n\nCircuitGateChain{N}(moments::AbstractVector{<:AbstractMoment{N}}) where {N}\n\nChain of quantum circuit gates in a circuit of N qubits, constructing from vector of Moment{N} objects.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Qaintessent.apply-Union{Tuple{N}, Tuple{CircuitGateChain{N},AbstractArray{T,1} where T}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(cgc::CircuitGateChain{N}, ψ::AbstractVector) where {N}\n\nApply CircuitGateChain to quantum state vector.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#CircuitGateChain-Example-1","page":"Circuit Construction and Usage","title":"CircuitGateChain Example","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"In the following example, a 3-qubit Quantum Fourier Transform is applied to an arbitrary input state","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n\n    N = 3\n    cgc = CircuitGateChain{N}(\n        [\n            single_qubit_circuit_gate(1, HadamardGate(), N),\n            controlled_circuit_gate(2, 1, PhaseShiftGate(2π/2^2), N),\n            controlled_circuit_gate(3, 1, PhaseShiftGate(2π/2^3), N),\n            single_qubit_circuit_gate(2, HadamardGate(), N),\n            controlled_circuit_gate(3, 1, PhaseShiftGate(2π/2^2), N),\n            single_qubit_circuit_gate(2, HadamardGate(), N),\n        ]\n    )\n    println(cgc) # hide","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"The CircuitGateChain can then be applied to a quantum state in state vector form.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = randn(ComplexF64, 2^N)\n    \n    apply(cgc, ψ)","category":"page"},{"location":"circuit/#Measurement-Operators-1","page":"Circuit Construction and Usage","title":"Measurement Operators","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Measurement operators can be defined in a MeasurementOps object. These are used in conjunction with a CircuitGateChain to create a Circuit object. Usage of MeasurementOps can be seen in the Circuit Example shown below.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"MeasurementOps\nMeasurementOps{N}(mop::AbstractMatrix) where {N}","category":"page"},{"location":"circuit/#Qaintessent.MeasurementOps","page":"Circuit Construction and Usage","title":"Qaintessent.MeasurementOps","text":"MeasurementOps{N}\n\nPairwise commuting measurement operators (Hermitian matrices) for circuit of size N.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.MeasurementOps-Union{Tuple{AbstractArray{T,2} where T}, Tuple{N}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.MeasurementOps","text":"MeasurementOps{N}(mop::AbstractMatrix) where {N}\n\nconstructs a MeasurementOps{N} object for circuit of size N from single 2^N times 2^N matrix.\n\n\n\n\n\nMeasurementOps{N}(mops::AbstractVector{<:AbstractMatrix}) where {N}\n\nconstructs a MeasurementOps{N} object for a circuit of size N from a vector of 2^N times 2^N matrices.\n\n\n\n\n\nMeasurementOps{N}(cg::CircuitGate) where {N}\n\nconstructs a MeasurementOps{N} object for a circuit of size N from a single CircuitGate{N} object.\n\n\n\n\n\nMeasurementOps{N}(cgs::AbstractVector{<:CircuitGate}) where {N}\n\nconstructs a MeasurementOps{N} object for a circuit of size N from a vector of CircuitGate{N} objects.\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Circuit-1","page":"Circuit Construction and Usage","title":"Circuit","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Circuit objects combine a CircuitGateChain and a MeasurementOps object. Applying a Circuit to a given input quantum state outputs the various expectation values from the measurement operators defined in the MeasurementOps object. A simple circuit is shown in the Circuit Example.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Circuit\napply(c::Circuit{N}, ψ::AbstractVector) where {N}","category":"page"},{"location":"circuit/#Qaintessent.Circuit","page":"Circuit Construction and Usage","title":"Qaintessent.Circuit","text":"Circuit{N}\n\nQuantum circuit consisting of a unitary gate chain and measurement operators.\n\n\n\n\n\n","category":"type"},{"location":"circuit/#Qaintessent.apply-Union{Tuple{N}, Tuple{Circuit{N},AbstractArray{T,1} where T}} where N","page":"Circuit Construction and Usage","title":"Qaintessent.apply","text":"apply(c::Circuit{N}, ψ::AbstractVector) where {N}\n\nreturns list of expectation values from measurement operators in c.meas after applying circuit gates in c.cgc on state vector of N qubits ψ\n\n\n\n\n\n","category":"method"},{"location":"circuit/#Circuit-Example-1","page":"Circuit Construction and Usage","title":"Circuit Example","text":"","category":"section"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    using Qaintessent\n    N = 3\n    cgc = CircuitGateChain{N}([\n        single_qubit_circuit_gate(1, HadamardGate(), N),   \n        single_qubit_circuit_gate(2, HadamardGate(), N),\n        single_qubit_circuit_gate(3, HadamardGate(), N),\n    ])\n    I = [1 0 ; 0 1]\n    x = Qaintessent.matrix(XGate())\n    meas_op = kron(kron(I,x), I)\n    meas = MeasurementOps{N}([meas_op])\n    c = Circuit{N}(cgc, meas)\n    println(c) # hide","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"Applying the Circuit object to a 3-qubit quantum state all in the ground 0 state.","category":"page"},{"location":"circuit/#","page":"Circuit Construction and Usage","title":"Circuit Construction and Usage","text":"    ψ = Float64[1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]\n    \n    apply(c, ψ)","category":"page"},{"location":"gates/#Gates-1","page":"Gates","title":"Gates","text":"","category":"section"},{"location":"gates/#","page":"Gates","title":"Gates","text":"Any quantum operation can be represented as a unitary matrix, which are referred to as gates. In Qaintessent.jl, basic gates are implemented using the abstract base struct AbstractGate. The available basic quantum gates are seen below. Note that wire index information is still needed to when applying such gates. As such, these gates are permuted when creating the basic building blocks of Qaintessent.jl Quantum Circuit(s): CircuitGate(s).","category":"page"},{"location":"gates/#","page":"Gates","title":"Gates","text":"CurrentModule = Qaintessent","category":"page"},{"location":"gates/#","page":"Gates","title":"Gates","text":"AbstractGate","category":"page"},{"location":"gates/#Qaintessent.AbstractGate","page":"Gates","title":"Qaintessent.AbstractGate","text":"AbstractGate{N}\n\nAbtract unitary quantum gate. N is the number of \"wires\" the gate acts on.\n\n\n\n\n\n","category":"type"},{"location":"gates/#Basic-Single-Qubit-Gates-1","page":"Gates","title":"Basic Single Qubit Gates","text":"","category":"section"},{"location":"gates/#","page":"Gates","title":"Gates","text":"XGate\nYGate\nZGate\nHadamardGate\nSGate\nSdagGate\nTGate\nTdagGate","category":"page"},{"location":"gates/#Qaintessent.XGate","page":"Gates","title":"Qaintessent.XGate","text":"Pauli X gate\n\nX = beginpmatrix 0  1  1  0 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.YGate","page":"Gates","title":"Qaintessent.YGate","text":"Pauli Y gate\n\nY = beginpmatrix 0  -i  i  0 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.ZGate","page":"Gates","title":"Qaintessent.ZGate","text":"Pauli Z gate\n\nZ = beginpmatrix 1  0  0  -1 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.HadamardGate","page":"Gates","title":"Qaintessent.HadamardGate","text":"Hadamard gate\n\nH = frac1sqrt2 beginpmatrix 1  1  1  1 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.SGate","page":"Gates","title":"Qaintessent.SGate","text":"S gate\n\nS = frac1sqrt2 beginpmatrix 1  0  0  i endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.SdagGate","page":"Gates","title":"Qaintessent.SdagGate","text":"S† gate\n\nS^ = beginpmatrix 1  0  0  -i endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.TGate","page":"Gates","title":"Qaintessent.TGate","text":"T gate\n\nT = frac1sqrt2 beginpmatrix 1  0  0  e^fraciπ4 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.TdagGate","page":"Gates","title":"Qaintessent.TdagGate","text":"T† gate\n\nT^ = beginpmatrix 1  0  0  e^-fraciπ4 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Parametrized-Single-Qubit-Gates-1","page":"Gates","title":"Parametrized Single Qubit Gates","text":"","category":"section"},{"location":"gates/#","page":"Gates","title":"Gates","text":"RxGate\nRyGate\nRzGate\nRotationGate\nPhaseShiftGate","category":"page"},{"location":"gates/#Qaintessent.RxGate","page":"Gates","title":"Qaintessent.RxGate","text":"Rotation-X gate\n\nR_x(theta) = beginpmatrix cos(fractheta2)  -isin(fractheta2)  -isin(fractheta2)  cos(fractheta2) endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.RyGate","page":"Gates","title":"Qaintessent.RyGate","text":"Rotation-Y gate\n\nR_y(theta) = beginpmatrix cos(fractheta2)  -sin(fractheta2)  sin(fractheta2)  cos(fractheta2) endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.RzGate","page":"Gates","title":"Qaintessent.RzGate","text":"Rotation-Z gate\n\nR_z(theta) = beginpmatrix e^frac-itheta2  0  0  e^fracitheta2 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.RotationGate","page":"Gates","title":"Qaintessent.RotationGate","text":"General rotation operator gate: rotation by angle θ around unit vector n.\n\nR_vecn(theta) = cos(fractheta2)I - isin(fractheta2)vecnsigma  sigma = X Y Z\n\n\n\n\n\n","category":"type"},{"location":"gates/#Qaintessent.PhaseShiftGate","page":"Gates","title":"Qaintessent.PhaseShiftGate","text":"Phase shift gate\n\nP(phi) = beginpmatrix 1  0  0  e^iphi endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Two-Qubit-Gates-1","page":"Gates","title":"Two Qubit Gates","text":"","category":"section"},{"location":"gates/#","page":"Gates","title":"Gates","text":"SwapGate","category":"page"},{"location":"gates/#Qaintessent.SwapGate","page":"Gates","title":"Qaintessent.SwapGate","text":"Swap gate\n\nSWAP = beginpmatrix 1  0  0  0  0  0  1  0  0  1  0  0  0  0  0  1 endpmatrix\n\n\n\n\n\n","category":"type"},{"location":"gates/#Quantum-Gate-Matrix-Representation-1","page":"Gates","title":"Quantum Gate Matrix Representation","text":"","category":"section"},{"location":"gates/#","page":"Gates","title":"Gates","text":"The Qaintessent.matrix function can be used to convert AbstractGate objects to their matrix representation. ","category":"page"},{"location":"gates/#","page":"Gates","title":"Gates","text":"using Qaintessent\n\nx = XGate()\nQaintessent.matrix(x)","category":"page"},{"location":"models/#Models-1","page":"Models","title":"Models","text":"","category":"section"},{"location":"models/#","page":"Models","title":"Models","text":"CurrentModule = Qaintessent","category":"page"},{"location":"models/#","page":"Models","title":"Models","text":"qft_circuit(N::Integer)","category":"page"},{"location":"models/#Qaintessent.qft_circuit-Tuple{Integer}","page":"Models","title":"Qaintessent.qft_circuit","text":"qft_circuit(N)\n\nConstruct the quantum Fourier transform circuit for N qubits.\n\n\n\n\n\n","category":"method"},{"location":"models/#","page":"Models","title":"Models","text":"toffoli_circuit(cntrl::Tuple{<:Integer, <:Integer} , trg::Integer, N::Integer)","category":"page"},{"location":"models/#Qaintessent.toffoli_circuit-Tuple{Tuple{#s12,#s11} where #s11<:Integer where #s12<:Integer,Integer,Integer}","page":"Models","title":"Qaintessent.toffoli_circuit","text":"toffoli_circuit(cntrl, trg, N)\n\nconstruct the circuit for decomposing the Toffoli gate in Figure 4.9 of Nielsen and Chuang (2000). the constructed toffoli gate acts in circuit of N qubits, has controls     on wires in Tuple cntrl and has target on wire trg. returns a CircuitGateChain{N} object.\n\n\n\n\n\n","category":"method"},{"location":"models/#","page":"Models","title":"Models","text":"vbe_adder_circuit(N::Integer)","category":"page"},{"location":"models/#Qaintessent.vbe_adder_circuit-Tuple{Integer}","page":"Models","title":"Qaintessent.vbe_adder_circuit","text":"vbe_adder_circuit(N)\n\nConstruct an in-place adder for 2 integers represented by N qubits. Based on ripple-carry adder circuit in Vedral et. al (Phys. Rev. A 54, 147 (1996), arXiv:quant-ph/9511018) Returns a CircuitGateChain{3N+1} as there are N+1 ancillary wires\n\nIf the two added integers are represented as:\n\nA = a_0times 2^0 + a_1 times 2^1 + a_2 times 2^2 +  + a_N times 2^N  B = b_0times 2^0 + b_1 times 2^1 + b_2 times 2^2 +  + b_N times 2^N\n\nThe input index should be a_0a_1a_2a_Nb_0b_1b_2b_N + 1 with a_0 as the fastest running index\n\nThe output index will be in the form a_0a_1a_2a_Nc_0c_1c_2c_N + 1 where:\n\nC = (A+B)  (2^N + 1) = c_0times 2^0 + c_1 times 2^1 + c_2 times 2^2 +  + c_N times 2^N\n\n\n\n\n\n","category":"method"},{"location":"models/#Example-1","page":"Models","title":"Example","text":"","category":"section"},{"location":"models/#","page":"Models","title":"Models","text":"using Qaintessent \n\nN = 3\nM = N*3 + 1\n\nadder = vbe_adder_circuit(N)\nψ = fill(0.0+0.0*im, 2^M)\na = 1\nb = 3\n\nindex = b << N + a\nψ[index+1] = 1.0\n\nψ = apply(adder, ψ)\n((findall(x->x==1, ψ)[1]-1)%(2^2N)) >> N\n\n# output\n\n4","category":"page"},{"location":"models/#","page":"Models","title":"Models","text":"qcla_out_adder_circuit(N::Integer)","category":"page"},{"location":"models/#Qaintessent.qcla_out_adder_circuit-Tuple{Integer}","page":"Models","title":"Qaintessent.qcla_out_adder_circuit","text":"qcla_out_adder_circuit(N)\n\nConstruct an out-of-place adder for 2 integers represented by N qubits. returns a CircuitGateChain{3N+1} object. Based on quantum carry-lookahead adder circuit by Draper et. al (Quant. Inf. Comp. 6, 351-369 (2006), arXiv:quant-ph/0406142) Returns a CircuitGateChain{3N+1} as there are N+1 ancillary wires\n\nIf the two added integers are represented as:\n\nA = a_0times 2^0 + a_1 times 2^1 + a_2 times 2^2 +  + a_N times 2^N  B = b_0times 2^0 + b_1 times 2^1 + b_2 times 2^2 +  + b_N times 2^N\n\nThe input index should be a_0a_1a_2a_Nb_0b_1b_2b_N + 1 as Julia starts indexing at 1 and a_0 as the fastest running index\n\nThe output index will be in the form a_0a_1a_2a_Nb_0b_1b_2b_Nc_0c_1c_2c_N+1 + 1 where:\n\nC = A+B = c_0times 2^0 + c_1 times 2^1 + c_2 times 2^2 +  + c_N+1 times 2^N+1\n\n\n\n\n\n","category":"method"},{"location":"models/#Example-2","page":"Models","title":"Example","text":"","category":"section"},{"location":"models/#","page":"Models","title":"Models","text":"using Qaintessent \n\nN = 3\nM = 3N + 1\n\nadder = qcla_out_adder_circuit(N)\nψ = fill(0.0+0.0*im, 2^M)\na = 2\nb = 3\n\nindex = b << N + a\nψ[index+1] = 1.0\n\nψ = apply(adder, ψ)\n(findall(x->x==1, ψ)[1] - 1) >> 2N\n\n# output\n\n5","category":"page"},{"location":"models/#","page":"Models","title":"Models","text":"qcla_inplace_adder_circuit(N::Integer)","category":"page"},{"location":"models/#Qaintessent.qcla_inplace_adder_circuit-Tuple{Integer}","page":"Models","title":"Qaintessent.qcla_inplace_adder_circuit","text":"qcla_inplace_adder_circuit(N)\n\nConstruct an in-place adder for 2 integers represented by N qubits. Based on quantum carry-lookahead adder circuit by Draper et. al (Quant. Inf. Comp. 6, 351-369 (2006), arXiv:quant-ph/0406142) Returns a CircuitGateChain{3N+1} as there are N+1 ancillary wires\n\nIf the two added integers are represented as:\n\nA = a_0times 2^0 + a_1 times 2^1 + a_2 times 2^2 +  + a_N times 2^N  B = b_0times 2^0 + b_1 times 2^1 + b_2 times 2^2 +  + b_N times 2^N\n\nThe input index should be a_0a_1a_2a_Nb_0b_1b_2b_N + 1 as Julia starts indexing at 1 and a_0 as the fastest running index\n\nThe output index will be in the form a_0a_1a_2a_Nc_0c_1c_2c_N+1 + 1 where:\n\nC = A+B = c_0times 2^0 + c_1 times 2^1 + c_2 times 2^2 +  + c_N+1 times 2^N+1\n\n\n\n\n\n","category":"method"},{"location":"models/#Example-3","page":"Models","title":"Example","text":"","category":"section"},{"location":"models/#","page":"Models","title":"Models","text":"using Qaintessent \n\nN = 3\nM = 3N\n\nadder = qcla_inplace_adder_circuit(N)\nψ = fill(0.0+0.0*im, 2^M)\na = 1\nb = 2\n\nindex = b << N + a\nψ[index+1] = 1.0\n\nψ = apply(adder, ψ)\n(findall(x->x==1, ψ)[1] - 1) >> N\n\n# output\n\n3","category":"page"},{"location":"view/#Display-Documentation-1","page":"Display Documentation","title":"Display Documentation","text":"","category":"section"},{"location":"view/#","page":"Display Documentation","title":"Display Documentation","text":"CurrentModule = Qaintessent","category":"page"},{"location":"view/#Show-1","page":"Display Documentation","title":"Show","text":"","category":"section"},{"location":"view/#","page":"Display Documentation","title":"Display Documentation","text":"Base.show(io::IO, c::Circuit)","category":"page"},{"location":"view/#Base.show-Tuple{IO,Circuit}","page":"Display Documentation","title":"Base.show","text":"Base.show(io::IO, c::Circuit) = Base.show(io, c.cgc)\n\nextends base show method to draw visual representation of a Circuit{N} object.\n\n\n\n\n\n","category":"method"},{"location":"qasm/#OpenQASM-1","page":"OpenQASM","title":"OpenQASM","text":"","category":"section"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"Qaintessent.jl provides some basic OpenQASM 2.0 support. This allows the importing of most QASM files as Circuit objects. Currently, only basic exports of Circuits is supported: custom measurements and multi-control CircuitGates cannot be exported. An example of OpenQASM usage is seen in the example below.","category":"page"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"CurrentModule = Qaintessent","category":"page"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"    import_qasm(filename::String)","category":"page"},{"location":"qasm/#Qaintessent.import_qasm-Tuple{String}","page":"OpenQASM","title":"Qaintessent.import_qasm","text":"import_file(filename::String; type=\"QASM\")\n\nconverts a .QASM file to a CircuitGateChain\n\n\n\n\n\n","category":"method"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"    import_file(filename::String; type=\"QASM\")","category":"page"},{"location":"qasm/#Qaintessent.import_file-Tuple{String}","page":"OpenQASM","title":"Qaintessent.import_file","text":"import_file(filename::String; type=\"QASM\")\n\nconverts an external file to a Circuit object\n\n\n\n\n\n","category":"method"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"    export_qasm(circuit::Circuit{N}, filename::String) where {N}","category":"page"},{"location":"qasm/#Qaintessent.export_qasm-Union{Tuple{N}, Tuple{Circuit{N},String}} where N","page":"OpenQASM","title":"Qaintessent.export_qasm","text":"export_qasm(filename::String; type=\"QASM\")\n\nCircuit to a QASM file\n\n\n\n\n\n","category":"method"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"    export_file(circuit::Circuit{N}, filename::String; type=\"QASM\") where {N}","category":"page"},{"location":"qasm/#Qaintessent.export_file-Union{Tuple{N}, Tuple{Circuit{N},String}} where N","page":"OpenQASM","title":"Qaintessent.export_file","text":"export_file(filename::String; type=\"QASM\")\n\nCircuit to a export file\n\n\n\n\n\n","category":"method"},{"location":"qasm/#Example-1","page":"OpenQASM","title":"Example","text":"","category":"section"},{"location":"qasm/#","page":"OpenQASM","title":"OpenQASM","text":"using Qaintessent \n\nN = 3\nfilename = \"reference_circuit.qasm\"\n\ncgc_ref = CircuitGateChain{N}([\n    single_qubit_circuit_gate(3, XGate(), N),\n    two_qubit_circuit_gate(3, 2, SwapGate(), N),\n    single_qubit_circuit_gate(1, RyGate(0.3π), N),\n    single_qubit_circuit_gate(2, RzGate(2.4), N),\n    single_qubit_circuit_gate(2, TGate(), N),\n    controlled_circuit_gate(1,2, XGate(), N),\n    controlled_circuit_gate(3,1, RzGate(0.3), N)\n    ])\n\nmeas = MeasurementOps{N}(AbstractMatrix[])\nc_ref = Circuit{N}(cgc_ref, meas)\nexport_file(c_ref, filename)\n\nc = import_file(filename)\nrm(filename)\n\nc\n# output\n\n    \n    1 ————————————————————•———\n                          |\n    2 ————————x————[T ]——[X ]—\n              |\n    3 —[X ]———x———————————————","category":"page"},{"location":"#Qaintessent.jl-Documentation-1","page":"Home","title":"Qaintessent.jl Documentation","text":"","category":"section"},{"location":"#Table-of-Contents-1","page":"Home","title":"Table of Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"index.md\", \"gates.md\", \"circuit.md\", \"gradients.md\", \"models.md\", \"view.md\", \"qasm.md\"]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"CurrentModule = Qaintessent","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Qaintessent.jl is a digital quantum circuit toolbox and simulator, using Julia's type system to represent quantum circuits symbolically. Quantum circuits are created from combinations of basic quantum gates (See Gates for details regarding elementary gates and Circuit Construction and Usage for circuit construction). Qaintessent.jl represents quantum states in state vector form, or (alternatively) density matrices with respect to the Pauli basis. It also supports gradient calculation for parametrized gates to be used for optimization algorithms, such as Machine Learning or QAOA. Integration with Flux is provided by Qaintellect.jl.","category":"page"},{"location":"#Index-1","page":"Home","title":"Index","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"gradients/#Gradients-1","page":"Gradients","title":"Gradients","text":"","category":"section"},{"location":"gradients/#","page":"Gradients","title":"Gradients","text":"Qaintessent.jl can perform a backward pass through a circuit to compute gradients of a (fictitious) cost function with respect to the circuit parameters and input wavefunction. Since quantum gates are unitary, the intermediate quantum states can be re-computed on the fly during backwards traversal, i.e., need not be stored during the forward pass.","category":"page"},{"location":"gradients/#","page":"Gradients","title":"Gradients","text":"See also this article regarding complex differentiation.","category":"page"},{"location":"gradients/#","page":"Gradients","title":"Gradients","text":"CurrentModule = Qaintessent","category":"page"},{"location":"gradients/#","page":"Gradients","title":"Gradients","text":"Qaintessent.gradients","category":"page"},{"location":"gradients/#Qaintessent.gradients","page":"Gradients","title":"Qaintessent.gradients","text":"gradients(c::Circuit{N}, ψ::AbstractVector, Δ::AbstractVector{<:Real}) where {N}\n\nPerform a backward pass to compute gradients of a (fictitious) cost function with respect to the circuit parameters of c and input wavefunction ψ. Δ contains the cost function gradients with respect to the circuit outputs (measurement operator averages). The gradients with respect to the circuit parameters are returned in a duplicate circuit; the overall return value is the tuple (dc::Circuit{N}, dψ::AbstractVector).\n\n\n\n\n\n","category":"function"}]
}
