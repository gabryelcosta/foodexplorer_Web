import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { useNavigation } from '../../hooks/useNavigate';
import { SideMenu } from '../../components/sideMenu';
import { ButtonText } from '../../components/ButtonText';
import CaretLeft from '../../components/Icons/CaretLeftSVG';
import { Input } from '../../components/Input';
import { TagMarcadores } from '../../components/TagMarcadores';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { SelectComponent } from '../../components/InputSelect';
import { api } from '../../services/api';
import { FileButton } from '../../components/FileButton';

export function NewDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goToHomePage } = useNavigation();
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");
  const options = [
    { value: 'Refeicao', label: 'Refeição' },
    { value: 'PratoPrincipal', label: 'Prato Principal' },
    { value: 'Sobremesa', label: 'Sobremesa' },
  ];

  const handleRemoveIngrediente = (ingredienteToRemove) => {
    setIngredientes(ingredientes.filter(ingrediente => ingrediente !== ingredienteToRemove));
  };

  const handleAddIngrediente = () => {
    if (novoIngrediente) {
      setIngredientes([...ingredientes, novoIngrediente]);
      setNovoIngrediente("");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDeleteFile = async () => {
    try {
      // Faça uma requisição DELETE para o servidor para deletar a imagem
      await api.delete(`/dishes/deleteImage/${imageName}`);

      // Limpe o estado da imagem
      setImage(null);
      setImageName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setImage(file); // Armazene o arquivo da imagem, não apenas o nome do arquivo

    const formData = new FormData();
    formData.append('imageFile', file);

    try {
      const response = await api.post('/dishes/uploadImage', formData);
      const filename = response.data.filename;
      setImageName(filename);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifique se um arquivo de imagem foi selecionado
    if (!image) {
      alert('Por favor, selecione um arquivo de imagem antes de enviar o formulário.');
      return;
    }

    // Crie um FormData
    const formData = new FormData();

    // Anexe os dados do prato
    formData.append('name', name);
    formData.append('category', selectedOption);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('ingredients', JSON.stringify(ingredientes));

    // Anexe o arquivo de imagem
    formData.append('imageFile', image);

    console.log('Sending the following data to the server:', formData);

    try {
      const responseDish = await api.post('/dishes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Received the following response from the server:', responseDish.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content onSubmit={handleSubmit}>
          <div className="nav_text">
            <ButtonText icon={CaretLeft} title="voltar" onClick={goToHomePage}/>
          </div>
          <div className="new_content">
            <h2>Novo prato</h2>
            <div className="content_label">
              <div className="primary_information">
                <label className="upload_label">
                    <span>Imagem do prato</span>
                    <FileButton onFileSelect={handleImageChange} onDeleteFile={handleDeleteFile}/>
                </label>
                <label className="name_label">
                  <span>Nome</span>
                  <div className="container_label">
                    <Input
                      placeholder="Ex.: Salada Ceasar"
                      value={name}
                      onChange={event => setName(event.target.value)}
                    />
                  </div>
                </label>
                <label className="category_label">
                  <span>Categoria</span>
                  <SelectComponent value={selectedOption} onChange={handleOptionChange} options={options} />
                </label>
              </div>
              <div className="secondary_information">
                <label className="ingredients_label">
                  <span>Ingredientes</span>
                  <div className="container_tags">
                    {ingredientes.map((ingrediente, index) => (
                      <TagMarcadores
                        key={index}
                        value={ingrediente}
                        onRemove={() => handleRemoveIngrediente(ingrediente)}
                      />
                    ))}
                    <TagMarcadores
                      isNew
                      placeholder="Novo Ingrediente"
                      value={novoIngrediente}
                      onChange={e => setNovoIngrediente(e.target.value)}
                      onClick={handleAddIngrediente}
                    />
                  </div>
                </label>
                <label>
                  <span>Preço</span>
                  <div className="container_label">
                    <Input
                      placeholder="R$ 00,00"
                      value={price}
                      onChange={event => setPrice(event.target.value)}
                    />
                  </div>
                </label>
              </div>
              <label className="textarea_label">
                <span>Descrição</span>
                <TextArea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </label>
            </div>
            <div className="btn_container">
              <Button type="submit" title="Salvar alterações" className="btn_submit"/>
            </div>
          </div>
        </Content>
      <Footer />
    </Container>
  )
}