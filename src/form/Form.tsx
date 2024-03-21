import { useState } from 'react';
import db from '../../firebaseConnect'
import { getFirestore, doc, setDoc} from "firebase/firestore";

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

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);

        const sql = getFirestore(db)
        await setDoc(doc(sql, "leads",formData.email), formData)
        // .then(() => { alert('Arquivo enviado com sucesso') }).catch(() => { alert('Ocorreu um erro') })
        setFormData({
            nome: '',
            telefone: '',
            email: '',
            nomeEmpresa: '',
            instagram: ''
        });
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
