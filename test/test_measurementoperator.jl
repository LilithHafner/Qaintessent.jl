using Test
using TestSetExtensions
using LinearAlgebra
using Qaintessent


##==----------------------------------------------------------------------------------------------------------------------


@testset ExtendedTestSet "measurement operator construction" begin
    N = 5
    meas1 = MeasurementOperator.([3 * Matrix{Float64}(I, 2^N, 2^N), 2 * Matrix{Float64}(I, 2^N, 2^N)], ((1,2,3,4,5),))
    @test Qaintessent.check_commute(meas1) == true

    meas2 = MeasurementOperator.([X, Y], [(1,),(2,)])
    @test Qaintessent.check_commute(meas2) == true
end

@testset ExtendedTestSet "measurement operator abstract matrix exceptions" begin
    N = 2
    small_matrix = Matrix{Float64}(I, 2^(N)-1, 2^(N)-1)
    large_matrix = Matrix{Float64}(I, 2^(N)+1, 2^(N)+1)
    uneven_matrix = Matrix{Float64}(I, 2^(N), 2^(N+1))
    iwires = (3,4)
    non_hermitian_matrix = Qaintessent.sparse_matrix(circuit_gate(1, RxGate(0.2), 2))

    @test_throws ErrorException("Measurement operator must be a $(2^N) × $(2^N) matrix.") MeasurementOperator(small_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be a $(2^N) × $(2^N) matrix.") MeasurementOperator(small_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be a $(2^N) × $(2^N) matrix.") MeasurementOperator(large_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be a $(2^N) × $(2^N) matrix.") MeasurementOperator(large_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be a $(2^N) × $(2^N) matrix.") MeasurementOperator(uneven_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be a $(2^N) × $(2^N) matrix.") MeasurementOperator(uneven_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be Hermitian.") MeasurementOperator(non_hermitian_matrix, iwires)
    @test_throws ErrorException("Measurement operator must be Hermitian.") MeasurementOperator(non_hermitian_matrix, iwires)

    noncomm_matrix_1 = sparse_matrix(circuit_gate(1, HadamardGate(), 2))
    noncomm_matrix_2 = sparse_matrix(circuit_gate(1, X, 2))
    m = MeasurementOperator.([noncomm_matrix_1, noncomm_matrix_2], (iwires,))
    @test Qaintessent.check_commute(m) == false
end

@testset ExtendedTestSet "measurement operator abstract matrix exceptions" begin
    iwires = (1,)

    non_hermitian_matrix = RxGate(0.2)
    @test_throws ErrorException("Measurement operator must be Hermitian.") MeasurementOperator(non_hermitian_matrix, iwires)
    iwires = (1,)
    noncomm_gate_1 = HadamardGate()
    noncomm_gate_2 = X
    m = MeasurementOperator.([noncomm_gate_1, noncomm_gate_2], (iwires,))
    @test Qaintessent.check_commute(m) == false
end