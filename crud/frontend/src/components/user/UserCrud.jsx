import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir.'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '',
            email: '', 
            street:'',
            number:'',
            complement:'',
            city:'',
            state:'',
            zipCode:''        
        },
    list: []
}

export default class UserCrud extends Component {
   
    state = { ...initialState}

    componentDidMount() {
        axios(baseUrl).then(resp => { 
            this.setState({ list: resp.data }) 
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }
    
    
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }
        
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
       
    renderForm () {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                value={this.state.user.name} 
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                value={this.state.user.email} 
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail" />
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="form-group">
                            <label>Endereço</label>
                            <input
                                type="text"
                                className="form-control"
                                name="street"
                                value={this.state.user.street}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome da rua" />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Número</label>
                            <input
                                type="text"
                                className="form-control"
                                name="number"
                                value={this.state.user.number}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nº" />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>Complemento</label>
                            <input
                                type="text"
                                className="form-control"
                                name="complement"
                                value={this.state.user.complement}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o complemento" />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                value={this.state.user.city}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a cidade" />
                        </div>
                    </div>
                      
                    <div class="col-12 col-md-4">
                        <div class="form-group">
                            <label for="state">Estado</label>
                                <select class="form-control" name="state" onChange={e => this.updateField(e)}>
                                    <option value="">Selecione o estado</option> 
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                    <option value="DF">DF</option>
                                </select>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>CEP</label>
                            <input
                                type="text"
                                className="form-control"
                                name="zipCode"
                                value={this.state.user.zipCode}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o CEP" />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>              
            </div>
        )
    }
    
    renderFormBottom () {
        return (
            <div className="container-fluid">
                <div className="row mr-4">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Imprimir cadastros" onClick={() =>this.printPage()}>
                            <i className="fa fa-print"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }
        
    confirmRemove(user) {
        if (window.confirm("Tem certeza que deseja excluir o cadastro?") === true){
            this.remove(user)
        }
    }
        
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    printPage () {
        window.print()
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th style={{width: '5%'}}>ID</th>
                        <th style={{width: '10%'}}>Nome</th>
                        <th style={{width: '10%'}}>E-mail</th>
                        <th style={{width: '15%'}}>Endereço</th>
                        <th style={{width: '5%'}}>Nº</th>
                        <th style={{width: '5%'}}>Comp.</th>
                        <th style={{width: '10%'}}>Cidade</th>
                        <th style={{width: '5%'}}>Estado</th>
                        <th style={{width: '10%'}}>CEP</th>
                        <th style={{width: '25%'}}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map( user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.street}</td>
                    <td>{user.number}</td>
                    <td>{user.complement}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zipCode}</td>
                    <td>
                        <button className="btn btn-info" data-toggle="tooltip" data-placement="right" title="Editar cadastro" onClick={() =>this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" data-toggle="tooltip" data-placement="right" title="Excluir cadastro" onClick={() => this.confirmRemove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.state.user)
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
                {this.renderFormBottom()}
            </Main>
        )
    }
}