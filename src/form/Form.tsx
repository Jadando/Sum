import { useState } from 'react';

    const Formulario = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        nomeEmpresa: '',
        instagram: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData); // Aqui você pode enviar os dados para onde desejar, como uma API ou fazer outra ação.
        // Resetar o formulário após o envio, se necessário
        // setFormData({
        //   nome: '',
        //   telefone: '',
        //   email: '',
        //   nomeEmpresa: '',
        //   instagram: ''
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="telefone">Telefone para Contato:</label>
            <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
            <input
            type="text"
            id="nomeEmpresa"
            name="nomeEmpresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="instagram">Username do Instagram:</label>
            <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            required
            />
        </div>
        <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
