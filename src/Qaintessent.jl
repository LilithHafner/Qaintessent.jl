module Qaintessent

using LinearAlgebra
using SparseArrays


include("util.jl")

include("gates.jl")
export
    AbstractGate,
    X,
    Y,
    Z,
    XGate,
    YGate,
    ZGate,
    HadamardGate,
    SGate,
    TGate,
    SdagGate,
    TdagGate,
    RxGate,
    RyGate,
    RzGate,
    RotationGate,
    PhaseShiftGate,
    SwapGate,
    ControlledGate,
    controlled_not,
    MatrixGate

include("circuit.jl")
export
    AbstractCircuitGate,
    CircuitGate,
    AbstractMoment,
    Moment,
    single_qubit_circuit_gate,
    two_qubit_circuit_gate,
    controlled_circuit_gate,
    rdm,
    CircuitGateChain,
    MeasurementOps,
    Circuit,
    distribution

include("density_matrix.jl")
export
    DensityMatrix,
    pauli_group_matrix,
    density_from_statevector

include("commute.jl")
    export
        iscommuting

include("apply.jl")
export
    apply

include("models.jl")
export
    qft_circuit,
    toffoli_circuit,
    vbe_adder_circuit,
    qcla_out_adder_circuit,
    qcla_inplace_adder_circuit

include("gradients.jl")
include("view.jl")

include("graphs.jl")
export
    Dag,
    optimize!

include("qasm.jl")
export
    import_file,
    export_file

include("fock.jl")
export
    FockState,
    vacuum_fock_state,
    coherent_state,
    â,
    âDag,
    n̂,
    D̂,
    Û
end
