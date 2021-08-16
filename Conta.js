export class Conta{
  constructor(saldoInicial, cliente, agencia) {
    this.saldo = saldo;
    this.cliente = cliente;
    this.agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    let taxa = 1;
    return this.sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado
    }
    return 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

}